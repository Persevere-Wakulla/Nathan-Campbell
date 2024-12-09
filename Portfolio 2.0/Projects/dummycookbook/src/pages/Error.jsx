import { Link } from "react-router-dom"

export default function Error(){
    return(
        <>
        <h3>We've encountered an error. The page you requested was not found.</h3>
        <Link to='/'>Return to Home</Link>
        </>
    )
}