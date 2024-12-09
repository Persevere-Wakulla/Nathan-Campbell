import { Link } from "react-router-dom";

export default function CartError() {
    return (
        <section className="cart-error container-lg mt-3 p-3">
            <h1 className="under-line">
                Error
            </h1>
            <p className="lead">The requested Cart could not be found. Return to <Link to='/'>Home</Link></p>
        </section>
    )
}