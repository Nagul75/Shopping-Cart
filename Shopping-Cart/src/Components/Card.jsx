import "../Styles/Card.css"

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
                        <p>{product.rating.rate}/5 <i>{product.rating.count}</i></p>
                    </div>
                </div>
        </>
    )
}