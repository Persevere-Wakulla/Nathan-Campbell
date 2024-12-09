import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {

    return (
        <section className="help container-md rounded mt-5 p-3">
            <h2>Need Help?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sequi molestias velit odio, quaerat in perferendis, quasi, qui id culpa laborum! Nemo vel iure nesciunt adipisci quibusdam quia architecto beatae.</p>
            <nav className="d-flex justify-content-around">
                <NavLink className='btn blue-btn' to='/help/faq'>View the FAQ</NavLink>
                <NavLink className='btn red-btn' to='/help/contact'>Contact Us</NavLink>
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </section>
    )

}