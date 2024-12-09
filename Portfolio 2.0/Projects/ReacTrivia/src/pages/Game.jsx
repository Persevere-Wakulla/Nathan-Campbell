import { useState, useEffect, useContext } from 'react'
import { TriviaContext } from '../layouts/RootLayout'
import { useOutletContext, useNavigate } from 'react-router'
import Qbox from '../components/Qbox'
import Category from '../components/Category'
import Player from '../components/Player'

export default function Game() {

    const trivia = useContext(TriviaContext)
    const { current, setCurrent } = useOutletContext()
    const navigate= useNavigate()

    const [cash, setCash] = useState(1)
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        const time = trivia.round === 1 ? 5000 : 2500
        setCash(trivia.round * 500)
        const decrement = () => {
            let interval = setInterval(() => {
                if (cash > 0) {
                    setCash(dol => dol - 100)
                }
            }, time)
            return () => {
                clearInterval(interval)
            }
        }
        if (question) {
            setTimeout(() => {
                decrement()
            }, 500)
        }
    }, [question])

    useEffect(() => {
        if (cash === 0) {
            const right = [...document.querySelectorAll('.answer')].find(opt => opt.innerText === question.correct)
            right.style.color = 'var(--warning)'
            setTimeout(() => {
                setCurrent(null)
            }, 4000)
        }
    }, [cash])

    useEffect(() => {
        const choice = current[Math.floor(Math.random() * current.length)]

        const buzzer = (item) => {
            const cats = [...document.querySelectorAll('.cat-btn')]
                cats.map(cat => {
                    cat.style.color = 'var(--main-text)'
                })
            const auto = cats.find(cat => {
                if (cat.innerText === item.category) {
                    return cat
                }
            })
            auto.style.color = 'var(--warning)'
            setTimeout(() => {
                pickCat(item)
            }, 3000)
        }
        if (current) {
            setTimeout(() => {
                buzzer(choice)
            }, 15000)
        }
    }, [current])

    useEffect(()=>{
        if (trivia.round === 3){
            navigate('/game/finale')
        }
    },[trivia.round])

    const pickCat = (cat) => {
        if (!trivia.used.includes(cat)) {
            trivia.used = [...trivia.used, cat]
        }
        const index = Math.floor(Math.random() * cat.questions.length)
        setQuestion({ ...cat.questions[index] })
    }

    const checkAnswer = (e) => {
        if (e.target.classList.contains('answer')) {
            const choice = e.target.innerText
            if (choice === question.correct) {
                trivia.score += cash
            } else {
                trivia.score -= cash
            }
        }
        setCurrent(null)
    }

    return (
        <main className="main">
            {question ? (
                <>
                    <div className="bank">{cash}</div>
                    <Qbox q={question} pick={checkAnswer} />
                </>
            ) :
                <Category options={current} pick={pickCat} />
            }
            <Player />
        </main>
    )
}
