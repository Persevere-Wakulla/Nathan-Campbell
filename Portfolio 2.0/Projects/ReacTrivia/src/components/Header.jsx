import { useContext } from "react"
import { TriviaContext } from "../layouts/RootLayout"

export default function Header() {

    const trivia = useContext(TriviaContext)
    const number = trivia.round === 1 ? "First" : trivia.round === 2 ? "Second" : "Final"

    return (
        <header>
            <img src="" alt="" className="logo" />
            {
                location.pathname !== '/results' &&
                <h2>{number} Round</h2>
            }
        </header>
    )
}