import { useEffect, useState } from "react"
import Card from "./Card"
import "../Styles/Products.css"

export default function Products() {

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
                    <Card product = {product}/>
                 )}
            </div>
        </>
    )
}