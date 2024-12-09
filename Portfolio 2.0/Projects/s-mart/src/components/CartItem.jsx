import { useState } from "react"

export default function CartItem({ item, index, del, add }) {

    const [showInput, setShowInput] = useState(false)

    const plusIt = (e, thing) => {
        e.preventDefault()
        add(thing)
    }

    return (
        <div className="card mb-3 cart-item">
            <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text lead fw-bold mb-2">$ {item.price}</p>
                <div className='w-100 d-flex justify-content-between align-items-end'>
                    {showInput ? <>
                        <form action="">
                            <div>
                                <div className="d-flex gap-2">
                                    <label htmlFor="quantity" className="fw-bold">Qty:</label>
                                    <input type="number" name="quantity" id={`qty-${item.id}`} className='w-50 mb-2' />
                                </div>
                                <button className='btn blue-btn' onClick={(e) => plusIt(e, item)}>Add More</button>
                            </div>
                        </form>
                    </>
                        :
                        <>
                            <button className='btn blue-btn' onClick={() => setShowInput(true)}>Need More?</button>
                        </>
                    }
                    <button onClick={() => del(index)} className="btn red-btn">Remove</button>
                </div>
            </div>
        </div>
    )
}