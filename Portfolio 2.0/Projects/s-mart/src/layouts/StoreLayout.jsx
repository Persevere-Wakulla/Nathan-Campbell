import { useContext, useState, useEffect } from "react";
import { CartContext } from "./RootLayout";
import { Outlet, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";


export default function StoreLayout() {

    const { addToCart, setAddToCart } = useOutletContext()
    const categories = useLoaderData()
    const navigate = useNavigate()
    const [filter, setFilter] = useState('')

    const makeFilter = (btn) => {
        if (location.pathname !== '/products') {
            navigate('/products')
        }
        setFilter(btn)
    }

    return (
        <main className="store-layout mt-3 mb-3 p-3">
            <p>
                <button className="btn red-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu">
                    Menu
                </button>
            </p>
            <div className="collapse collapse-horizontal" id="collapseMenu">
                <aside className="d-flex flex-column gap-2 pe-3 position-absolute z-1 backing">
                    {categories.map(cat => (
                        <button onClick={() => makeFilter(cat)} key={cat.slug} className="btn text-center p-2 rounded blue-btn fw-bold">{cat.name}</button>
                    ))}
                </aside>
            </div>
            <section className="container-md rounded w-100">
                <Outlet context={{ filter, addToCart, setAddToCart }} />
            </section>
        </main>
    )
}

export const categoryLoader = async () => {
    const res = await fetch('https://dummyjson.com/products/categories')
    return res.json()
}