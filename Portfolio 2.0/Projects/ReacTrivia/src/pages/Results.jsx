import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TriviaContext } from '../layouts/RootLayout'

export default function Results() {

    const trivia = useContext(TriviaContext)
    const navigate = useNavigate()
    // const [leaderBoard, setLeaderBoard] = useState(false)

    // let leaders = JSON.parse(localStorage.getItem('leaderBoard'))

    // const save = () => {
    //     leaders.pop()
    //     leaders.push(trivia.player)
    //     leaders.sort((a, b) => a.score - b.score)
    //     localStorage.setItem('leaders')
    // }

    const newGame = () => {
        navigate('/')
    }

    return (
        <section className="results">
            <h1 className={trivia.score > 1000 ? 'win' : trivia.score > 500 ? 'ok' : 'lose'}>{trivia.score > 1000 ? 'CONGRATULATIONS!' : trivia.score < 500 ? 'ouch...' : "You know it's ok to actually try, right?"}</h1>
            <div className="end">
                <h3 className="end-name">{trivia.user}</h3>
                <h2 className="end-score">{trivia.score}</h2>
                <div className="buttons">
                {/* {leaders && trivia.score > leaders[leaders.length - 1].score && <button onClick={save}>Save Your Score</button>}
                <button onClick={() => { setLeaderBoard(!leaderBoard) }}>View High Scores</button> */}
                <button onClick={newGame}>New Game</button>
                </div>
            </div>
            {/* {leaderBoard && <div className="leader-board">
                <ol>
                    {leaders.map(user => (
                        <li style={(user.name === trivia.name) && (user.score === trivia.score) ? { color: 'var(--glow)' } : null}>
                            <span>{user.name}</span><span>{user.score}</span>
                        </li>
                    ))}
                </ol>
            </div>
            } */}
        </section>
    )
}