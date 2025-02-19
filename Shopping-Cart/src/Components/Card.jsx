import "../Styles/Card.css"
import StarRating from "./StarRating"

export default function Card({product}) {
    console.log(product)
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
                        <p><StarRating rating = {product.rating.rate}/> {product.rating.count} ratings</p>
                    </div>
                </div>
        </>
    )
}