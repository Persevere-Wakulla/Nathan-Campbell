import { useState, useEffect } from "react";

export default function Preview({ context }) {

    const [index, setIndex] = useState(0)

    useEffect(()=>{
        setIndex(0)
    },[context])

    const addIndex = () => {
        if (index === context.pics.length - 1) {
            setIndex(0)
        } else {
            setIndex(i => i + 1)
        }
    }

    const minusIndex = () => {
        if (index === 0) {
            setIndex(context.pics.length - 1)
        } else {
            setIndex(i => i - 1)
        }
    }

    return (
        <section className="preview m-auto pt-2 ps-2">
            <div className="d-flex">
                <h2 className="title">{context.title}</h2>
            </div>
            <p className="lead">{context.description}</p>
            <p><span className='fw-bold'>Type: </span>
                <span>{context.category}</span></p>
            <p><span className='fw-bold'>Tools Used: </span>
                <span>{context.tools.join(', ')}</span></p>
            <div className="image-container text-center p-1 rounded">
                <h5 className="mt-3">{context.pics[index].label}</h5>
                <p>{context.pics[index].caption}</p>
                <img src={context.pics[index].img} className="fit" alt={context.pics[index].label} />
                <div className="img-btns d-flex justify-content-between mt-4">
                    <button className="btn img-btn" onClick={minusIndex}>Previous</button>
                    <button className="btn img-btn" onClick={addIndex}>Next</button>
                </div>
            </div>
        </section>
    )
}