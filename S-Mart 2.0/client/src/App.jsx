// dom stuff
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
}
    from 'react-router-dom'
// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import StoreLayout, { categoryLoader } from './layouts/StoreLayout'
import CartLayout, { cartsLoader } from './layouts/CartLayout'
// home pages
import Home from './pages/Home'
import About from './pages/About'
import NewAccount from './pages/NewAccount'
// help pages
import FAQ from './pages/help/FAQ'
import Contact from './pages/help/Contact'
// product pages
import Products, { productsLoader } from './pages/products/Products'
import ProductDetails, { detailsLoader } from './pages/products/ProductDetails'
// cart page
import ShoppingCart from './pages/carts/ShoppingCart'
import Checkout from './pages/carts/Checkout'
// error pages
import Error from './pages/Error'
import ProductError from './pages/products/ProductError'
import CartError from './pages/carts/CartError'

// css
import './s-mart.css'

// building routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'
            element={<RootLayout />} >

            <Route index
                element={<Home />} />

            <Route path='/about'
                element={<About />} />

            <Route path='/new-account'
                element={<NewAccount />} />

            <Route path='help'
                element={<HelpLayout />}>

                <Route path='faq'
                    element={<FAQ />} />

                <Route path='contact'
                    element={<Contact />} />

            </Route>

            <Route path='products'
                element={<StoreLayout />}
                errorElement={<ProductError />}
                loader={categoryLoader} >

                <Route index
                    element={<Products />}
                    loader={productsLoader} />

                <Route path=':id'
                    element={<ProductDetails />}
                    loader={detailsLoader} />
            </Route>

            <Route path='shopping-cart'
                element={<CartLayout />}
                errorElement={<CartError />}
                loader={cartsLoader} >

                <Route index
                    element={<ShoppingCart />} />
                <Route path='checkout'
                    element={<Checkout />} />
            </Route>

            <Route path='*' element={<Error />} />
        </Route>
    )
)

// rendering
export default function App() {
    return <RouterProvider router={router} />
}