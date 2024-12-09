import { Outlet, Link } from "react-router-dom";

export default function RecipesLayout() {
    
    return (
        <div className="container-fluid recipe-layout hover">
               <Link className="search-link display-5" to='search'>Search &#128269;</Link>
            <section className="container-fluid">
                <Outlet />
            </section>
        </div >
    )
}

