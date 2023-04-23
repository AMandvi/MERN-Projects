import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate}  from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate()
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const deleteAuthor = (deleteID) => {
        console.log(deleteID)
        if (window.confirm("really?")){
        axios.delete("http://localhost:8000/api/authors/"+deleteID)
        .then(res => {
            console.log(res.data);
            console.log("Delete SUCCESS!!")

            //remove from the dOM after a successful delete
            setAuthors(authors.filter((author) => author._id !== deleteID))
        })
        .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Link to= "/new">Add an author</Link><hr />
            We have quotes by:
            <table className="table">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {
                authors.map((oneAuthor, index) => {
                    return (
                        <tr key ={oneAuthor._id}> 
                            <td>{oneAuthor.name}</td>
                            <td>
                                <button onClick={() => navigate("/edit/" + oneAuthor._id)}>Edit</button>
                                <button onClick={() => deleteAuthor(oneAuthor._id)}>Delete</button>
                            </td>
                        </tr>
                    )

                })
            }
            </tbody>
            
            </table>
        </div>
    )
}

export default Main
