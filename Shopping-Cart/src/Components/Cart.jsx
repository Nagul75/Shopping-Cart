import CartItem from "./CartItem"
import "../Styles/Cart.css"
import { useOutletContext } from "react-router-dom"

export default function Cart() {
    const [cart, setCart] = useOutletContext()
    let total = 0
    cart.forEach(product => {
        total += product.price
    });

    return(
        <>
            {cart.length > 0 ?
            <>
                <div className="cart-container">
                {cart.map(item =>
                    <CartItem product = {item} setCart = {setCart}/>
                )}
            </div>
            <div className="total-price-buy-now">
                <h1>Grand Total: {total} $</h1>
                <button>Buy Now</button>
            </div>
            </> :
            <>
                <h1 className="no-item-cart">No Item in Cart</h1>
            </>}
        </>
    )
}