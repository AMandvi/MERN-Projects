import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {
    //grab the id from params
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const[price, setPrice] = useState(0)
    const[description, setDescription] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
            
        })
        .catch(err => console.log(err))
    }, [])
    const editProduct = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/products/" + id, {
            title, price, description
        })
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <form onSubmit={editProduct}>
                Title: <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" /> <br />
                Price: <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" /> <br />
                Description: <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" />
                <button>Edit</button>
            </form>

        </div>
    )
}

export default Edit
