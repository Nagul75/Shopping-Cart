import { useEffect } from "react"
import Card from "./Card"
import "../Styles/Products.css"

export default function Products() {

    return(
        <>
            <div className="card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </>
    )
}