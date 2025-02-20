import "../Styles/CartItem.css"

export default function CartItem({product}) {
    return (
        <div className="cart-item">
            <h1>{product.title}</h1>
        </div>
    )
}