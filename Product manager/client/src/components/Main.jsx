import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useNavigate}  from 'react-router-dom'

const Main = (props) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(someDataResponse => {
                console.log(someDataResponse)
                setProducts(someDataResponse.data)
            })
            .catch(err => console.log("xxx", err))
    }, [])

    const makeProduct = (e) => {
        e.preventDefault()
        console.log(title, price, description)
        axios.post("http://localhost:8000/api/products", {title, price, description})
            .then(res => {
                console.log("✅ SUCCESS")
                console.log(res.data);
                const copyProducts = [...products, res.data.product];
                setProducts(copyProducts)
            })
            .catch(err => console.log("❌", err))
    }

    const goToEdit = (id) => {
        navigate("/" + id + "/edit");
    }

    const deleteProduct = (deleteID) => {
        axios.delete("http://localhost:8000/api/products/" + deleteID)
        .then((res) => {
            console.log(res.data);
            console.log("Delete SUCCESS!!");
            setProducts(products.filter((product) => product._id !== deleteID))
        })
        .catch()
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={makeProduct}>
                Title: <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" /> <br />
                Price: <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" /> <br />
                Description: <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" />
                <button>Create</button>
            </form>

            <hr />
            <h1>All products:</h1>
            {
                products.map((oneProduct, index) => {
                    return (
                        <div key={oneProduct._id} >
                            <Link to={`/${oneProduct._id}`}>
                                <p>{oneProduct.title}</p>
                            </Link>
                            <button onClick={() => goToEdit(oneProduct._id)}>Edit</button>
                            <button onClick={() => deleteProduct(oneProduct._id)}>Delete</button>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Main
