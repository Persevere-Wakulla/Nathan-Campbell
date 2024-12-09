import { useState, useEffect } from 'react'
import './rps.css'
import GamePiece from './components/GamePiece.jsx'
import Rules from './components/Rules'


export default function App() {

  const [score, setScore] = useState(0)
  const [user, setUser] = useState(null)
  const [cpu, setCpu] = useState(null)
  const [winner, setWinner] = useState('')

  useEffect(() => {
    let comp = document.getElementById('cpu')
    let place = document.getElementById('user')

    function random() {
      let pick = Math.floor(Math.random() * choices.length)
      return choices[pick]
    }
    if (user) {
      place.classList.add('user-in')
      setTimeout(() => {
        comp.classList.add('cpu-in')
        setCpu(random())
      }, 3000)
    }
    return () => {
      clearTimeout()
    }
  }, [user])

  useEffect(() => {
    function whoWins() {
      if (user.name === 'rock') {
        switch (cpu.name) {
          case 'paper':
          case 'spock':
            setWinner('You Lose!')
            break;
          case 'scissors':
          case 'lizard':
            setWinner('You Win!')
            break;
          default:
            setWinner('Tie')
            break;
        }
      }
      if (user.name === 'paper') {
        switch (cpu.name) {
          case 'rock':
          case 'lizard':
            setWinner('You Win!')
            break;
          case 'scissors':
          case 'spock':
            setWinner('You Lose!')
            break;
          default:
            setWinner('Tie')
            break;
        }
      }
      if (user.name === 'scissors') {
        switch (cpu.name) {
          case 'rock':
          case 'spock':
            setWinner('You Lose!')
            break;
          case 'paper':
          case 'lizard':
            setWinner('You Win!')
            break;
          default:
            setWinner('Tie')
            break;
        }
      }
      if (user.name === 'lizard') {
        switch (cpu.name) {
          case 'rock':
          case 'scissors':
            setWinner('You Lose!')
            break;
          case 'paper':
          case 'spock':
            setWinner('You Win!')
            break;
          default:
            setWinner('Tie')
            break;
        }
      }
      if (user.name === 'spock') {
        switch (cpu.name) {
          case 'rock':
          case 'scissors':
            setWinner('You Win!')
            break;
          case 'paper':
          case 'lizard':
            setWinner('You Lose!')
            break;
          default:
            setWinner('Tie')
            break;
        }
      }
    }
    if (cpu) {
      const win = document.getElementById('win')
      setTimeout(() => {
        whoWins()
        win.classList.add('win')
      }, 2000)
    }
    return () => {
      clearTimeout()
    }
  }, [cpu])

  useEffect(() => {
    if (winner === 'You Win!') {
      setScore(score + 1)
    }
    if (winner === 'You Lose!') {
      setScore(0)
    }
  }, [winner])

  const choices = [
    {
      name: 'rock',
      pic: 'images/icon-rock.svg',
      border: { border: '15px solid hsl(349, 71%, 52%)' }
    },
    {
      name: 'paper',
      pic: 'images/icon-paper.svg',
      border: { border: '15px solid hsl(230, 89%, 62%)' }
    },
    {
      name: 'scissors',
      pic: 'images/icon-scissors.svg',
      border: { border: '15px solid hsl(39, 89%, 49%)' },
    },
    {
      name: 'lizard',
      pic: 'images/icon-lizard.svg',
      border: { border: '15px solid hsl(261, 73%, 60%)' }
    },
    {
      name: 'spock',
      pic: 'images/icon-spock.svg',
      border: { border: '15px solid hsl(189, 59%, 53%)' }
    }
  ]

  const intro = (<>
    <div id="placement" onClick={makeSelection}>
      <img src="./images/bg-pentagon.svg" alt="pentagon" id="bg-pic" />
      {choices.map((obj, index) => (
        <GamePiece key={index} piece={obj} phase={'begin'} />
      ))}
    </div>
  </>)

  const playing = (<>
    <section id="playing" className="grid">
      <div className='play' id='user'>
        <p className='white'>You Chose:</p>
        <GamePiece piece={user} phase={'play'} />
      </div>
      <div id="win">
        {
          winner !== '' &&
          <>
            <h1 className="white" id='winner'>{winner}</h1>
            <button id="again" onClick={newGame}>Play Again?</button>
          </>
        }
      </div>
      <div className='play' id='cpu'>
        <p className='white'>CPU Chose:</p>
        {cpu &&
          <GamePiece piece={cpu} phase={'play'} />
        }
      </div>
    </section>
  </>)

  function newGame() {
    setUser(null)
    setCpu(null)
    setWinner('')
  }

  function makeSelection(e) {
    let select
    if (e.target.id === '') {
      select = choices.find(item => item.name === e.target.parentElement.id)
    } else {
      select = choices.find(item => item.name === e.target.id)
    }
    setUser(select)
  }

  return (
    <>
      <header>
        <section id="head">
          <div className="col">
            <button className='menuBtn' id="rock" onClick={makeSelection}>Rock</button>
            <button className='menuBtn' id="paper" onClick={makeSelection}>Paper</button>
            <button className='menuBtn' id="scissors" onClick={makeSelection}>Scissors</button>
            <button className='menuBtn' id="lizard" onClick={makeSelection}>Lizard</button>
            <button className='menuBtn' id="spock" onClick={makeSelection}>Spock</button>
          </div>
          <div id="score">
            <p className="caps blue">Score</p>
            <div id="number">{score}</div>
          </div>
        </section>
      </header>
      <main id='main'>
        {user ? playing : intro}
      </main>
      <footer>
        <Rules />
      </footer>
    </>
  )
}


