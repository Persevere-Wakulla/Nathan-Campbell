import { useEffect, useContext, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { TriviaContext } from '../layouts/RootLayout'


export default function GameLayout() {

    const navigate = useNavigate()
    const data = useLoaderData()
    const trivia = useContext(TriviaContext)
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        console.log(trivia.used);
        if ((trivia.used.length === 10 && trivia.round === 1) || (trivia.used.length === 20 && trivia.round === 2)) {
            navigate('/game/commercial')
        }
    }, [trivia.used])

    useEffect(() => {
        function randomCats() {
            const picks = []
            while (picks.length < 2) {
                let n = Math.floor(Math.random() * data.length)
                if (!trivia.used.includes(data[n]) && !picks.includes(data[n])) {
                    picks.push(data[n])
                }
            }
            setCurrent([...picks])
        }
        
        if (!current) {
            randomCats()
        }
    })

    return (
        <section className='game-layout'>
            {current &&
                <>
                    <Outlet context={{ current, setCurrent }} />
                </>
            }
        </section>
    )
}

export const questionsLoader = async () => {
    const res = await fetch('/reacTrivia.json')
    return res.json()
}