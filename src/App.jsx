import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Product from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import toast, { Toaster } from 'react-hot-toast'

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/products/:id" element={<EditProduct />} />
            </Routes>
            <Toaster />
            </BrowserRouter>
        </div>
    )
}
export default App