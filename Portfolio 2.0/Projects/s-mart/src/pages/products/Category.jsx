import { useParams, useLoaderData } from "react-router-dom";


export default function Category() {

    const products = useLoaderData()
    const { category } = useParams()

    return (
        <div className="product-page">
            <h1 className="display-2 fw-semibold under-line text-center mb-4">{category.name}</h1>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {products.map(prod => (
                    <Card item={prod} />
                ))}
            </div>
        </div>
    )
}

export const sortedLoader = async ({ param }) => {
    const { category } = param
    const res = await fetch('https://dummyjson.com/products/category/' + category)
    return res.json()
}