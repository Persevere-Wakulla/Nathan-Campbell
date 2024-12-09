import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

export default function RootLayout() {
    return (
        <>
            <header className="p-2 d-flex justify-content-between align-items-center">
                <h1 className='display-3 fw-bold'>DummyCookbook</h1>
                <Navbar />
            </header>
            <main className='container p-4 mt-4 mb-5 rounded mx-auto'>
                <Breadcrumbs />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}