export default function Home() {
    return (
        <>
            <section className="home container-md rounded text-center mt-4 p-3 w-75 m-auto">
                <h1 className="catchy display-2 fw-bolder">Shop smart<br /> Shop <span className="red">S</span> Mart!</h1>
                <div className="contianer-fluid">
                    <h3 className='display-4'>Employee of the Month:</h3>
                    <p className='lead fs-2 mt-3 fst-italic'>We give this valued employee a hand!</p>
                    <h1 className="display-3 fw-semibold">Ash</h1>
                    <img src="/Untitled.png" className='img-fluid rounded mt-1' alt="employee of the month" />
                    <blockquote className='blockquote mt-3'>
                        <p className='w-75 m-auto d-flex justify-content-between align-items-baseline fs-4'><span className="quotes display-4 fst-italic">"</span>
                            Come get some
                            <span className="quotes display-4 fst-italic">"</span></p>
                    </blockquote>
                </div>
            </section>
        </>
    )
}