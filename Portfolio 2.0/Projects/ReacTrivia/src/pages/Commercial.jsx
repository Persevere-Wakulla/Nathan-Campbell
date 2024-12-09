import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { TriviaContext } from '../layouts/RootLayout'

export default function Commercial() {

    const trivia = useContext(TriviaContext)
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    const layout = index % 2 === 0 ? 'flex-row' : 'flex-column'

    const ads = [{
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }, {
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }, {
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }, {
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }, {
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }, {
        title: '',
        topTxt: '',
        btmTxt: '',
        pic: ''
    }]

    useEffect(() => {
        const random = Math.floor(Math.random() * ads.length)
        setIndex(random)
        ads.splice(random, 1)
    }, [])

    const resume = () => {
        trivia.round += 1
        navigate('/game')
    }

    return (
        <section className="commercial">
            <div className={`${layout}`}>
                <h1>{ads[index].title}</h1>
                <p>{ads[index].topTxt}</p>
                <img src={ads[index].pic} alt={ads[index].title} />
                <p>{ads[index].btmTxt}</p>
            </div>
            <button onClick={resume}>Close</button>
        </section>
    )
}
