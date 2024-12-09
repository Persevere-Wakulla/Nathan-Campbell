import { useContext, useState } from "react"
import { useLoaderData, useParams, Link, useOutletContext } from "react-router-dom"
import { CartContext } from "../../layouts/RootLayout"

export default function ProductDetails() {

    const { id } = useParams()
    const current = useLoaderData()
    const { setAddToCart } = useOutletContext()
    const { newCart, setNewCart } = useContext(CartContext)
    const [index, setIndex] = useState(0)

    const buildCart = (item) => {
        if (!newCart.includes(item)) {
            setAddToCart(add => add + 1)
            setNewCart([...newCart, item])
        }
    }

    return (
        <article className="details w-75 p-3 d-flex flex-column align-items-center m-auto">
            <img src={current.images[index]} className="card-img-top" alt={current.title} />
            {
                current.images.length > 1 &&
                <div className="pics d-flex overflow-x-scroll mb-3">
                    {current.images.map((pic, index) => (
                        <img src={pic} alt='pics' className="thumb w-100" onClick={() => setIndex(index)} />
                    ))}
                </div>
            }
            <div className="card-body text-center">
                <h2 className="card-title display-5 fw-bold mb-3">{current.title}</h2>
                <h2>$ {current.price}</h2>
                <p className="card-text lead fw-semibold">{current.description}</p>
            </div>
            <ul className="list-group list-group-flush w-75">
                <li className="list-group-item d-flex justify-content-between bg-transparent under-line">Discount: <span className="lead fw-bold">{current.discountPercentage}%</span></li>
                <li className="list-group-item d-flex justify-content-between bg-transparent under-line">Rating: <span className="lead fw-bold">{current.rating}</span></li>
                <li className="list-group-item d-flex justify-content-between bg-transparent under-line">Shipping: <span className="lead fw-bold">{current.shippingInformation}</span></li>
                <li className="list-group-item d-flex justify-content-between bg-transparent under-line">Warranty: <span className="lead fw-bold">{current.warrantyInformation}</span></li>
                <li className="list-group-item d-flex justify-content-between bg-transparent under-line">Return Policy: <span className="lead fw-bold">{current.returnPolicy}</span></li>
            </ul>
            <br />
            <div className="card-body d-flex justify-content-between p-2 gap-4">
                <button className="btn blue-btn" onClick={() => buildCart(current)}>Add to Cart</button>
                <Link to='/shopping-cart' className="card-link btn red-btn">Go to Cart</Link>
            </div>
        </article>
    )
}

export const detailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('https://dummyjson.com/products/' + id)
    return res.json()
}