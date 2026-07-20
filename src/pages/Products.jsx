import React, { useState, useEffect } from "react";
import {Button, Card} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'

function Products(){
    const [product, setProducts] =useState ([]);
    const navigate = useNavigate()
   async function getProducts(){
    const res = await axios.get("http://localhost:8000/products")
    console.log(res)
    setProducts(res.data)
    }
    useEffect(()=>{
        getProducts()
    },[])
    async function deleteProducts(id){
        const res = await axios.delete(`http://localhost:8000/products/${id}`) 
        const singleProduct = product.filter((mereProduct) => mereProduct._id !== id)
        setProducts(singleProduct)
        toast.success("Product   deleted successfully!", {
            position: "top-right",
            duration: 3000,
          });
    }
    return(
        <div className="container">
            <div className="users-handler flex justify-content-between align-items-center">
            <h1>Product Data</h1>
            <Button variant="primary" onClick={()=>navigate("/create-product")}>
                Create Product
            </Button>
                </div>
            <div className="user flex flex-wrap justify-content-between gap-4">
                {product.map((mereProduct) =>{
                    return (
                        <Card style={{ width: '18rem' }} key={mereProduct._id}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                           <Card.Title>{mereProduct.title}</Card.Title>
                           <Card.Text>
                             {mereProduct.description}
                           </Card.Text>
                           <div className="d-flex justify-content-center gap-2">
                           <Button variant="primary">{mereProduct.price}</Button>
                           <Button variant="secondary" onClick={() => navigate(`/products/${mereProduct._id}`)}>Edit</Button>
                           <Button variant="danger" onClick={() => deleteProducts(mereProduct._id)}>Delete</Button>
                           </div>
                         </Card.Body>
                       </Card>
                        );
                })}
        </div>
    </div>
    );
}
export default Products