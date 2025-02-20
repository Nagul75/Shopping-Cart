import "../Styles/Home.css"
import { Dribbble } from 'lucide-react'
import { useState } from "react"
import { Outlet, Link } from "react-router-dom"

export default function Home() {
    const [cart, setCart] = useState([])

    return(
        <>
            <header className="header">
                <div className="icon"><Dribbble size={48}/></div>
                <h1>A Generic Ecommerce Website</h1>
                <div className="links">
                    <a href="#">Sign-Up</a>
                    <a href="#">Login</a>
                </div>
            </header>

            <aside className="sidebar">
                <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                    <li><Link to={"/checkout"}>Checkout</Link></li>
                </ul>
                </nav>
            </aside>

            <main className="content">
                <Outlet context={[cart, setCart]}/>
            </main>
        </>
    )
}