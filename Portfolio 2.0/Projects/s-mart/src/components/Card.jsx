import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../layouts/RootLayout"

export default function Card({ item, cartFunc }) {

    const tall = item.category === 'smartphones' || item.id === 6 ? 'height' : null

    const { newCart, setNewCart } = useContext(CartContext)

    const buildCart = (item) => {
        if (!newCart.includes(item)) {
                cartFunc(add => add + 1)
                setNewCart([...newCart, item])
            } 
        }

    return (
        <article className="product-card card d-flex flex-column justify-content-center align-items-center gap-2 p-2">
            <Link to={item.id.toString()} className="img-container">
                <img src={item.images[0]} className={`card-img-top ${tall}`} alt={item.title} />
            </Link>
            <div className="card-body text-center">
                <Link to={item.id.toString()}>
                    <h5 className="card-title">{item.title}</h5>
                </Link>
                <p className="card-text fs-2">${item.price}</p>
                <button className="btn blue-btn fw-bold" onClick={() => buildCart(item)}>Add to Cart</button>
            </div>
        </article>
    )
}