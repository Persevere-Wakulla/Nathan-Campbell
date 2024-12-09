import { Link } from "react-router-dom"

export default function RecipeError(){
    return(
        <>
        <h3>We've encountered an error. We do not have the recipe you've requested. Please try another.</h3>
        <Link to='/recipes'>Go Back</Link>
        </>
    )
}