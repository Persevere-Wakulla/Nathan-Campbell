import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {

    const [name, setName] = useState(false)

    return (
        <div className="root-layout d-flex flex-column justify-content-between mt-2">
            <header className='under-line container-md rounded-4'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to='/' className='navbar-brand fs-2' onMouseOver={() => setName(true)} onMouseLeave={() => setName(false)}>S_Kimo Studios
                        </Link>
                            {
                            name && <span className='fs-6'>Nathan Campbell</span>
                            }
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='profile'>Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='projects'>Projects</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact Me
                                    </a>
                                    <ul className="dropdown-menu ps-2">
                                        <li>
                                            <Link to='#' className="contact-link">Email</Link>
                                        </li>
                                        <li>
                                            <div className='d-flex gap-2'>
                                                <Link to='#' className='socials'><img className='social-link w-100' src="/socials/linked-in.png" alt="linked-in" /></Link>
                                                <Link to='#' className='socials'><img className='social-link w-100' src="/socials/github.png" alt="github" /></Link>
                                                <Link to='#' className='socials'><img className='social-link w-100' src="/socials/twitter.png" alt="twitter" /></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className='container-md mt-4 mb-4 p-2 rounded-4 w-75'>
                <Outlet />
            </main>

            <footer className='text-center'>
                <p className='m-0'>S_Kimo Studios &copy; 2024</p>
            </footer>
        </div>
    )
}