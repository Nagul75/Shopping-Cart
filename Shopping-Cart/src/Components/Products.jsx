import { useEffect, useState } from "react"
import Card from "./Card"
import "../Styles/Products.css"
import { useOutletContext } from "react-router-dom"

export default function Products() {

    const [cart, setCart] = useOutletContext()
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products?limit=18')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(err=>console.error(err))
    }, [])


    return(
        <>
            <div className="card-container">
                {products.map(product =>
                    <Card product = {product} setCart = {setCart} cart = {cart}/>
                 )}
            </div>
        </>
    )
}