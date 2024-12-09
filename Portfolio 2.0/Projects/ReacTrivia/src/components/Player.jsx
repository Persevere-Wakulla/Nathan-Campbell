import { useEffect, useContext, useState } from "react";
import { TriviaContext } from "../layouts/RootLayout";


export default function Player() {

    const trivia = useContext(TriviaContext)
    const [user, setUser] = useState(null)
    const [score, setScore] = useState(0)

    useEffect(() => {
        setUser(trivia.user)
        setScore(trivia.score)
    }, [])

    useEffect(() => {
        setScore(trivia.score)
    }, [trivia.score])

    // useEffect(() => {
    //     const scoreboard = document.getElementById('user-score')
    //     if (user.change === '-') {
    //         scoreboard.classList.add('loss')
    //     }
    //     else if (user.change === '+') {
    //         scoreboard.classList.add('gain')
    //     }
    //     return () => {
    //         scoreboard.classList.map(cls => scoreboard.classList.remove(cls))
    //     }
    // }, [user.change])

    return (
        <footer className="player">
            <h4 id="user-name">{user}</h4>
            <h4 id="user-score">$ {score}</h4>
        </footer>
    )
}