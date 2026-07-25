import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Product from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import toast, { Toaster } from 'react-hot-toast'
import Register from './pages/Register'
import Login from './pages/Login'

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Product />} />
                <Route path="/" element={<Login />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/products/:id" element={<EditProduct />} />
            </Routes>
            <Toaster />
            </BrowserRouter>
        </div>
    )
}
export default App