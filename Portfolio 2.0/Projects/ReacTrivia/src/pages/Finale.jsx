import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react"
import { TriviaContext } from '../layouts/RootLayout'

export default function Finale() {

    const trivia = useContext(TriviaContext)
    const data = useLoaderData()
    const navigate = useNavigate()

    const [final, setFinal] = useState(null)
    const [options, setOptions] = useState(null)

    useEffect(() => {
        const randomCats = () => {
            let cats = []
            while (cats.length < 2) {
                const index = Math.floor(Math.random() * data.length)
                if (!cats.includes(data[index])) {
                    cats.push(data[index])
                }
            }
            setOptions(cats)
        }
        if (!options) {
            randomCats()
        }
    }, [])

    const choose = (e) => {
        if (e.target.classList.contains('cat-btn')) {
            // const choice = document.getElementById(`${e.target.id}`)
            // choice.classList.add('glow')
            setTimeout(() => {
                setFinal(options.find(cat => cat.title === e.target.innerText))
            }, 3000)
        }
    }

    const complete = () => {
        const inputs = [...document.querySelectorAll('input')].filter((ip, index) => {
            if (ip.value === final.answers[index]) {
                return ip.value
            }
        })
        if (inputs.length === 0) {
            trivia.score -= 3000
        } else {
            trivia.score += (inputs.length * 1000)
        }
        setTimeout(() => {
            navigate('/game/results')
        }, 2500)
    }

    return (
        <section className="finale">
            {
                final ? (
                    <div className="finalQ">
                        <h2 className="title">{final.title}</h2>
                        <p className="direct">{final.directions}</p>
                        <div className="blanks">
                            <pre>
                                {final.details.map((d, index) => {
                                    if (!d.startsWith('_')) {
                                        return (
                                            <code key={index} className="details">
                                                {d}
                                            </code>
                                        )
                                    } else {
                                        return (
                                            <input type="text" className={d} name={`final-${index}`} />
                                        )
                                    }
                                })}
                            </pre>
                        </div>
                            <button className="submit" onClick={complete}>Submit</button>
                    </div>
                ) : options && (
                    <div className="categories">
                        {options.map(opt => (
                            <div className="cat-btn" key={opt.id} id={opt.id} onClick={choose}>{opt.title}</div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}

export const finaleLoader = async () => {
    const res = await fetch('/finale.json')
    return res.json()
}