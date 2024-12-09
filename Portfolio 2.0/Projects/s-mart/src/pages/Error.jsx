import { Link } from "react-router-dom";

export default function Error(){
    return(
        <section className="general-error container-lg mt-3 p-3">
            <h1 className="underline">Page not Found!</h1>

            <p className="lead">Return to <Link to='/'>Home</Link></p>
        </section>
    )
}