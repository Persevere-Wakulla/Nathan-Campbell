import { useState, useEffect, createContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const TriviaContext = createContext(null)

export default function RootLayout() {

    const [trivia, setTrivia] = useState(null)

    const navigate = useNavigate()


    useEffect(() => {
        if (trivia) {
            navigate('/game')
        }
    }, [trivia])

    const startGame = (input) => {
        setTrivia({
            user: input,
            score: 0,
            round: 1,
            used: [],
        })
    }

    const layout = location.pathname !== '/' ? (
        <header className='logo'>
            <div className='img-box'>
                <img src="/react-icon.png" alt="logo" className='symbol' />
            </div>
            <h1 className='brand'>ReacTrivia</h1>
        </header>
    ) : (
        <div className="big">
            <h1 className='top'>ReacTrivia</h1>
        </div>
    )

    return (
        <div className="root-layout">

            {layout}


            <TriviaContext.Provider value={trivia}>
                <Outlet context={{ startGame }} />
            </TriviaContext.Provider>
        </div>
    )
}