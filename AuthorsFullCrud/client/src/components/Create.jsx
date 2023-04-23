import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate}  from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const[name,setName] = useState("")
    //DATABASE ERRORS
    const [errors, setErrors] = useState([]); 

    const createAuthor = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors" , {name})
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
            <Link to = "/">Home</Link> <hr />
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            <form onSubmit={createAuthor} className="form-group" >
                Add a new author:
                Name: <input onChange= {(e)=> setName(e.target.value)} value={name}/>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Create
