import { useState, createContext, useEffect } from 'react'
import { NavLink, Outlet, Form } from 'react-router-dom'

export const CartContext = createContext([])
export const UserContext = createContext(null)

const res = await fetch('https://dummyjson.com/users?limit=0')
const allUsers = await res.json()

export default function RootLayout() {

    const [user, setUser] = useState({})
    const [newCart, setNewCart] = useState([])
    const [addToCart, setAddToCart] = useState(0)
    const [cartNumber, setCartNumber] = useState(0)

    useEffect(() => {
        setCartNumber(newCart.length)
    }, [newCart])

    const login = (e) => {
        e.preventDefault()
        const userName = document.getElementById('uN').value
        const passWord = document.getElementById('pW').value
        const current = allUsers.users.find((me) => {
            if (me.username === userName) {
                if (me.password === passWord) {
                    return (me)
                }
            }
        })
        if (current) {
            setUser(current)
        } else {
            alert('Invalid Username or Password')
        }
    }
    const logOut = () => {
        setUser({})
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg p-3 under-line" style={{ backgroundColor: 'var(--container)' }}>
                    <div className="container-fluid">
                        <div className="logo-box mb-3">
                            <NavLink to='/' className="logo">
                                <span className='red'>S</span>  Mart
                            </NavLink>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex w-100 justify-content-between">
                                <ul className="navbar-nav mobile-flex w-50">
                                    <li className="nav-item">
                                        <NavLink to='about'>
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='help'>
                                            Help
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='products'>
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <NavLink to='shopping-cart'>
                                            Shopping Cart
                                        </NavLink>
                                        {newCart.length > 0 && <span className='badge position-absolute top-0 start-100 translate-middle badge rounded-pill'>{cartNumber}</span>}
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='new-account'>
                                            Create Account
                                        </NavLink>
                                    </li>
                                </ul>
                                {user.firstName ? (
                                    <>
                                        <p className='lead fs-3 fw-bold log text-center'>You're shopping SMART with S Mart!</p>
                                        <button type='button' className="btn red-btn d-block m-auto" onClick={logOut}>Sign Out</button>
                                    </>
                                ) : (
                                    <Form className="mt-3 mb-1" onSubmit={login}>
                                        <div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id='uN' />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                                <input type="password" className="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" id='pW' />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-5'>
                                            <button className='btn red-btn' type="submit">Login</button>
                                            <button className='btn blue-btn' type='button'>Sign Up</button>
                                        </div>
                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <UserContext.Provider value={user}>
                    <CartContext.Provider value={{ newCart, setNewCart }}>
                        <Outlet context={{ addToCart, setAddToCart }} />
                    </CartContext.Provider>
                </UserContext.Provider>
            </main>
        </>
    )

}
