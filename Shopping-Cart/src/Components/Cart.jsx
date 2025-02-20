import CartItem from "./CartItem"
import "../Styles/Cart.css"

export default function Cart() {
    return(
        <>
            <div className="cart-container">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        </>
    )
}