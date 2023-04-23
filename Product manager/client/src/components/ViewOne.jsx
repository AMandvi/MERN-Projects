
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from'axios'

const ViewOne = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[thisProduct, setThisProduct] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res.data)
            setThisProduct(res.data)
        })
        .catch(err => console.log(err))
    },[id])
    const goToUpdate =(updateID) => {
        console.log(updateID)
        navigate("/" + updateID + "/edit")
    }
    const  deleteProduct = (deleteID) => {
        axios.delete("http://localhost:8000/api/products/" + deleteID)
        .then((res) => {
            console.log(res.data);
            console.log("Delete SUCCESS!!");
            navigate("/")
        })
        .catch()
    }
    return (
        <div>
            {
                thisProduct ? (
                    <div>
                        <h3>{thisProduct.product.title}</h3>
                        <p>Price: ${thisProduct.product.price}</p>
                        <p>Description: {thisProduct.product.description}</p>
                        <button onClick ={() => goToUpdate(thisProduct.product._id)}>Edit</button>
                        <button onClick ={() => deleteProduct(thisProduct.product._id)}>Delete</button>
                    </div>
                ):"loading....."
            }

        </div>
    )
}

export default ViewOne
