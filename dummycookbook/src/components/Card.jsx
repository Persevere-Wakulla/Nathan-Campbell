import { useState } from "react"
import { Link } from "react-router-dom"


export default function Card({ item }) {

    const [details, setDetails] = useState(false)

    return (
        <div className="recipe card position-relative" style={{ width: "14rem" }}>
            <Link to={`/recipes/${item.id.toString()}`}>
                <img src={item.image} className="card-img-top" alt={item.name} /></Link>
            <div className="card-body">
                <Link to={`/recipes/${item.id.toString()}`}>
                    <h6 className="card-title fw-bold fs-5">{item.name}</h6></Link>
                <p className="card-text" onClick={() => setDetails(!details)}>
                {
                    details ?
                        `#${item.tags.join(' #')}` : 'Show Tags'
                }</p>
            </div>
        </div>
    )
}