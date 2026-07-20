import React, { useState } from "react";
import {Form, Button} from "react-bootstrap"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

function CreateProduct(){
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        rating: "",
        review: ""
    })
    const navigate = useNavigate()
    function changeHandler(e){
        const name = e.target.name
        const value = e.target.value
        setProduct({...product, [name]: value})
    }
    async function submitHandler(e){
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/create", product)
        console.log(res)
        setProduct({
            title: "",
            description: "",
            price: "",
            rating: "",
            review: ""
        })
        navigate("/")
        toast.success("Product created successfully!", {
            position: "top-right",
            duration: 3000,
          });
    }
    return(
        <div className="container">
            <div className="w-1/2 mx-auto">

            <h1>Create Product</h1>
            <Form onSubmit={submitHandler}>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Title</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter product title"
                 value={product.title}
                 name="title"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                 <Form.Label>Description</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter product description"
                 value={product.description}
                 name="description"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                 <Form.Label>Price</Form.Label>
                 <Form.Control 
                 type="number"
                 placeholder="Enter product price"
                 value={product.price}
                 name="price"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                 <Form.Label>Rating</Form.Label>
                 <Form.Control 
                 type="number"
                 placeholder="Enter product rating"
                 value={product.rating}
                 name="rating"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                 <Form.Label>Review</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter product review"
                 value={product.review}
                 name="review"
                 onChange={changeHandler} />
               </Form.Group>
             </Form>
             <Button 
             variant="success"
             type="submit"
             onClick={submitHandler}>
                Submit
             </Button>
            </div>
        </div>
    )
}
export default CreateProduct