import "../Styles/CartItem.css"
import StarRating from "./StarRating"

export default function CartItem({product, setCart}) {
    function removeFromCart(product) {
        setCart((prevCart) => prevCart.filter(item => item !== product))
    }

    return (
        <div className="cart-item">
            <div className="cart-content">
                <div className="cart-image"><img src={product.image} alt={product.title} /></div>
                <div className="cart-item-info">
                    <h2>{product.title}</h2>
                    <div className="cart-price-rating">
                        <p>{product.price}$</p>
                        <div><StarRating rating = {product.rating.rate}/> {product.rating.count} ratings</div>
                    </div>
                    <p>{product.description}</p>
                    <div className="remove-item-btn">
                        <button onClick={() => removeFromCart(product)}>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}