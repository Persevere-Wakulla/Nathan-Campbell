import { useLoaderData, Link } from "react-router-dom"
import Card from '../../components/Card'


export default function AllRecipes() {

    const data = useLoaderData()

    return (
        <div className="container-lg recipes">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {data.recipes.map(r => (
                        <Card item={r} />
                ))}
            </div>
        </div>
    )
}


export const recipesLoader = async () => {
    const res = await fetch('https://dummyjson.com/recipes?limit=0')
    if (!res.ok) {
        throw Error('Could not fetch recipes')
    }
    return res.json()
}