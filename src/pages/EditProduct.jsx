import React, { useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

function EditProduct(){
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        rating: "",
        review: ""
    })
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)
    function changeHandler(e){
        const name = e.target.name
        const value = e.target.value
        setProduct({...product, [name]: value})
    }
    async function submitHandler(e){
        e.preventDefault()
        const res = await axios.patch(`https://ecom-89-code.onrender.com/products/${params.id}`, product);
        console.log("Patch response:", res.status, res.data);
        console.log("Product data after patch:");
        setProduct({
            title: "",
            description: "",
            price: "",
            rating: "",
            review: ""
        })
        navigate("/products")
        toast.success("Product updated successfully!", {
            position: "top-right",
            duration: 3000,
          });
    }
 async function getProductById(){
        const res = await axios.get(`https://ecom-89-code.onrender.com/products/${params.id}`)
        console.log(res.data)
        setProduct(res.data)
    }
    useEffect(()=>{
        getProductById()
    },[])
    return(
        <div className="container">
            <div className="w-1/2 mx-auto">

            <h1>Edit Product</h1>
            <Form onSubmit={submitHandler}>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Title</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter title"
                 value={product.title}
                 name="title"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                 <Form.Label>Description</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter description"
                 value={product.description}
                 name="description"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                 <Form.Label>Price</Form.Label>
                 <Form.Control 
                 type="number"
                 placeholder="Enter price"
                 value={product.price}
                 name="price"
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                 <Form.Label>Rating</Form.Label>
                 <Form.Control 
                 type="number"
                 placeholder="Enter rating"
                 value={product.rating}
                 name="rating "
                 onChange={changeHandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                 <Form.Label>Review</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Enter review"
                 value={product.review}
                 name="review"
                 onChange={changeHandler} />
               </Form.Group>
             <Button 
             variant="success"
             type="submit"
             onClick={submitHandler}>
                Submit
             </Button>
             </Form>
            </div>
        </div>
    )
}
export default EditProduct