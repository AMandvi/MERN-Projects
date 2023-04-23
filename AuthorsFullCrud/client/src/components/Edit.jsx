import React, {useState} from 'react'
import axios from'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Edit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[name,setName] = useState("")
    //DATABASE ERRORS
    const [errors, setErrors] = useState([]); 


    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id )
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [id])

    const editAuthor = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/authors/" + id , {name})
            .then(res => {
                console.log("✅ SUCCESS")
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log("❌ ERROR")
                console.log(err.response.data)
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to = "/">Home</Link><hr />
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            <form onSubmit={editAuthor}>
                Edit this Author:
                Name: <input onChange= {(e)=> setName(e.target.value)} value={name}/>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Edit
