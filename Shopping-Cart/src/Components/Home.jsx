import "../Styles/Home.css"
import { Dribbble } from 'lucide-react'

export default function Home() {
    return(
        <>
            <header class="header">
                <div><Dribbble size={48}/></div>
                <h1>A Generic Ecommerce Website</h1>
                <div className="links">
                    <a href="#">Sign-Up</a>
                    <a href="#">Login</a>
                </div>
            </header>

            <aside className="sidebar">
                <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Checkout</a></li>
                </ul>
                </nav>
            </aside>

            <main className="content">
                <h2>Main Content Area</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra risus vitae nunc gravida, eu tincidunt leo fermentum.</p>
                <p>Scroll down to see how the sidebar and header remain fixed!</p>
                <p>More content...</p>
                <p>More content...</p>
                <p>More content...</p>
                <p>More content...</p>
            </main>
        </>
    )
}