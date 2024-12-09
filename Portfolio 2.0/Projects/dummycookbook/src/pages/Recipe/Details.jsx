import { useLoaderData, useParams } from "react-router-dom";

export default function Details() {

    const { id } = useParams()
    const recipe = useLoaderData()

    return (
        <div className="details p-3 border rounded">
            <div className="container d-flex gap-2">
                    <div className="container w-75">
                        <img src={recipe.image} alt="" className="img-fluid border rounded" />
                    </div>
                    <div>
                        <h2>{recipe.name}</h2>
                        <h4>{recipe.cuisine}</h4>
                        <p>{recipe.tags.join(', ')}</p>
                        <h5>Rating: {recipe.rating}</h5>
                    </div>
                    <div>
                        <h3>Servings: {recipe.servings}</h3>
                        <p>Prep Time: {recipe.prepTimeMinutes}</p>
                        <p>Cook Time: {recipe.cookTimeMinutes}</p>
                    </div>
            </div>
            <div className="container d-flex mt-2">
                <ul className="container list-unstyled">
                    <h3>Ingredients:</h3>
                    {recipe.ingredients.map((ig, index) => (
                        <li key={index}>{ig}</li>
                    ))}
                </ul>
                <ol className="container">
                    <h3>Instructions:</h3>
                    {recipe.instructions.map((is, index) => (
                        <li key={index}>{is}</li>
                    ))}
                </ol>
            </div>
        </div >
    )
}


export const detailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('https://dummyjson.com/recipes/' + id)
    if (!res.ok) {
        throw Error('err')
    }
    return res.json()
}

