import { useOutletContext } from 'react-router'
import HowTo from '../components/HowTo'

export default function Intro() {

    const { startGame } = useOutletContext()

    const createUser = (e) => {
        if (e.key === 'Enter') {
            startGame(e.target.value)
        }
        else if (e.target.id === 'start-game') {
            startGame(player.value)
        }
    }

    return (
        <main className='intro'>
            <div className='register'>
                <HowTo />
                <input type="text" name="player" id="player" onKeyUp={createUser} />
                <button id='start-game' onClick={createUser}>Start Game!</button>
            </div>
        </main>
    )
}