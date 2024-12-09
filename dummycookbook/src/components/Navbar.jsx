import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="d-flex position-absolute end-0 p-2 navi">
                            <li className="nav-item hover">
                                <NavLink to='/' className="navbar-brand" href="#">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item hover">
                                <NavLink to='recipes' className="navbar-brand" href="#">
                                    Recipes
                                </NavLink>
                            </li>
                            <li className="nav-item hover">
                                <NavLink to='about' className="navbar-brand" href="#">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item hover">
                                <NavLink to='contact' className="navbar-brand" href="#">
                                    Contact Us
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
