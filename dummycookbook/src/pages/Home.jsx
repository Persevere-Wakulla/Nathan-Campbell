import { Link } from "react-router-dom"

export default function Home() {
    return (
        <section className="home">
            <h3 className='border text-secondary-emphasis'>The entirety of DummyJSON's recipe listings all in one easy access location, with filtering and search capabilites!</h3>
            <br />
            <div className="hover container-lg text-center">
                <Link className="display-3" to='recipes'>Get Started</Link>
                <img className="img-fluid border rounded" src="/pexels-samer-daboul-2233729.jpg" alt="" />
            </div>
        </section>
    )
}