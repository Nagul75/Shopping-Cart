import "../Styles/Card.css"
import StarRating from "./StarRating"

export default function Card({product, cart, setCart}) {

    function addToCart(item) {
        setCart(prevCart => [...prevCart, item])
        console.log(cart)
    }

    return(
        <>
                <div className="card">
                    <div className="image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-title">
                        <p>{product.title}</p>
                    </div>
                    <div className="price-rating">
                        <p>{product.price}$</p>
                        <div><StarRating rating = {product.rating.rate}/> {product.rating.count} ratings</div>
                    </div>
                    <div className="cart-button">
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
        </>
    )
}