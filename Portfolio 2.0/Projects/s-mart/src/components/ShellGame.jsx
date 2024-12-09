import { useEffect, useState } from "react"

export default function ShellGame({ func }) {

    const prizes = [
        'Sorry, Not a Winner.',
        'Sorry, Not a Winner.',
        '15% Off Order',
        'Sorry, Not a Winner.',
        'Free Shipping',
        'Sorry, Not a Winner.',
        '20% Off Order',
        'Sorry, Not a Winner.',
        'Free Gift',
        'Sorry, Not a Winner.',
    ]

    const [choice, setChoice] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const pickPrize = () => {
            const random = Math.floor(Math.random() * prizes.length)
            return prizes[random]
        }
        if (choice) {
            setMessage(pickPrize())
        }
    }, [choice])

    return (
        <section className="container-lg z-1 position-absolute top-0 start-0 p-3 rounded text-center">
            <h2 className="under-line">Open the box for a chance to win!</h2>
            {message !== '' ? <>

                <h3 className="mt-4">{message}</h3>
                <button type='button' className="btn blue-btn" onClick={() => func(c => !c)}>Continue</button>
            </>
                : (<>
                    <img onClick={() => setChoice(true)} src="/public/S-mart-box.png" alt="" className="img-fluid" />
                </>)
            }
        </section>
    )
}