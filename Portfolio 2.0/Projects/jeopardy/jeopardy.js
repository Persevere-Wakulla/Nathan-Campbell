//json data
const res = await fetch('./questions.json')
const json = await res.json()

//grab elements
const header = document.getElementById('header')
const headTitle = document.querySelector('.title')
const round1 = document.getElementById('round1')
const round2 = document.getElementById('round2')
const finalYes = document.getElementById('y')
const finalNo = document.getElementById('n')
const input1 = document.getElementById('first')
const input2 = document.getElementById('second')
const input3 = document.getElementById('third')
const randomBtn = document.getElementById('choice')
const submitBtn = document.getElementById('submit')
const main = document.getElementById('main')
const divOne = document.getElementById('divOne')
const divTwo = document.getElementById('divTwo')
const divThree = document.getElementById('divThree')
const pick = document.getElementById('pick')

// main events
submitBtn.addEventListener('click', newGame)
randomBtn.addEventListener('click', randomPick)

// new Game
let myGame;

// randomizer
function randomPick() {
    let number = Math.floor(Math.random() * 3)
    pick.textContent = number + 1
    return
}

// create a new game from the options
function newGame(ev) {
    ev.preventDefault()
    if (pick.textContent === '') {
        alert('Click the first turn to find out who chooses first')
    } else {
        const playerOne = new Contestant(input1.value, divOne)
        const playerTwo = new Contestant(input2.value, divTwo)
        const playerThree = new Contestant(input3.value, divThree)
        const contestants = new Array(playerOne, playerTwo, playerThree)
        let final
        let rounds
        if (round1.checked) {
            rounds = new Array(json[0].round1)
        }
        if (round2.checked) {
            rounds = new Array(json[0].round1, json[1].round2)
        }
        if (finalYes.checked) {
            final = true
            rounds.push(json[2].final)
        } else {
            final = false
        }
        let random = contestants[pick.textContent - 1]
        myGame = new Game(contestants, rounds, random, final)
        myGame.populate()
    }
}

//! classes
// Contestant
class Contestant {
    constructor(name, area) {
        this.name = name
        this.area = area
        this.score = 0
        this.active = true
    }
    // keep score & name
    update() {
        this.area.firstElementChild.textContent = this.name
        this.area.lastElementChild.lastElementChild.textContent = this.score
    }
}

// Question
class Question {
    constructor(qObj, cash, contestant) {
        this.qObj = qObj
        this.cash = Number(cash)
        this.contestant = contestant
    }
    // making a question box
    createQ() {
        const qArt = document.createElement('article')
        const qH2 = document.createElement('h2')
        const qInput = document.createElement('input')
        const qBtn = document.createElement('button')
        qArt.classList.add('question-box', 'clicked')
        qInput.classList.add('answer')
        qInput.setAttribute('placeholder', 'answer')
        qBtn.classList.add('lil-btn')
        qH2.textContent = this.qObj.q
        qBtn.textContent = 'Submit'
        qArt.append(qH2, qInput, qBtn)
        main.prepend(qArt)
        this.newContestant()
        // answering the question
        qBtn.addEventListener('click', () => {
            this.guess(qInput)
        })
        qInput.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') {
                this.guess(qInput)
            }
        })
        // first chance
        confirm('First team to raise a hand after the question is read.')
    }
    // evaluating answer
    guess(input) {
        if (input.value === this.qObj.a) {
            this.contestant.score += Number(this.cash)
            myGame.contestants.forEach((player) => {
                player.active = true
            })
            this.removeQ()
            myGame.check()
        } else {
            confirm('Incorrect, next team to raise a hand gets a chance.')
            this.contestant.score -= Number(this.cash)
            this.contestant.active = false
            this.newContestant()
        }
        this.contestant.update()
        input.value = ''
    }
    // if wrong, new contestant
    newContestant() {
        myGame.contestants.forEach((player) => {
            if (player.active) {
                player.area.addEventListener('click', () => {
                    this.contestant = player
                    myGame.choice = player
                })
            }
        })
    }
    // when correct, remove
    removeQ() {
        main.firstElementChild.remove()
    }
}

// Wager
class Wager {
    constructor(money, answer, contestant) {
        this.money = Number(money)
        this.answer = answer
        this.contestant = contestant
    }
}

// Final
class Final {
    constructor(finalObj) {
        this.finalObj = finalObj
        this.finalArr = []
        this.contestants = myGame.contestants
    }
    // new final question
    create() {
        main.replaceChildren([])
        main.classList.remove('main-flex')
        const finH2 = document.createElement('h2')
        const finDiv = document.createElement('div')
        const finWager = document.createElement('input')
        const finInput = document.createElement('input')
        const finBtn = document.createElement('button')
        finInput.classList.add('answer')
        finInput.setAttribute('placeholder', 'answer')
        finWager.classList.add('wager')
        finWager.setAttribute('placeholder', 'wager')
        finBtn.classList.add('lil-btn')
        finBtn.textContent = 'Submit your answer'
        finH2.textContent = this.finalObj.q
        finDiv.append(finWager, finInput, finBtn)
        main.append(finH2, finDiv)
        finBtn.addEventListener('click', () => {
            this.enterWager(finWager, finInput)
        })
    }
    // entering wagers
    enterWager(wager, answer) {
        switch (this.finalArr.length) {
            case 0:
                const ansOne = new Wager(wager.value, answer.value, this.contestants[0])
                this.finalArr.push(ansOne)
                break;
            case 1:
                const ansTwo = new Wager(wager.value, answer.value, this.contestants[1])
                this.finalArr.push(ansTwo)
                break;
            default:
                const ansThree = new Wager(wager.value, answer.value, this.contestants[2])
                this.finalArr.push(ansThree)
                this.results()
        }
        wager.value = ''
        answer.value = ''
    }
    // showing correct answer & updating scores
    results() {
        main.lastElementChild.remove()
        const aH2 = document.createElement('h2')
        const flexDiv = document.createElement('div')
        aH2.textContent = this.finalObj.a
        flexDiv.classList.add('flex')
        this.finalArr.forEach((player) => {
            const playDiv = document.createElement('div')
            const wagerP = document.createElement('p')
            const answerP = document.createElement('p')
            wagerP.textContent = player.money
            answerP.textContent = player.answer
            playDiv.append(wagerP, answerP)
            flexDiv.append(playDiv)
            console.log(player.contestant.score);
            if (player.answer === this.finalObj.a) {
                Number(player.contestant.score += player.money)
            } else {
                Number(player.contestant.score -= player.money)
            }
            player.contestant.update()
        })
        const winBtn = document.createElement('btn')
        winBtn.classList.add('lil-btn')
        winBtn.textContent = 'Show Winner'
        winBtn.addEventListener('click', () => {
            myGame.winner()
        })
        main.append(aH2, flexDiv, winBtn)
    }
}

// Game
class Game {
    constructor(contestants, rounds, choice, final) {
        this.contestants = contestants
        this.rounds = rounds
        this.choice = choice
        this.final = final
        this.currentRound = 0
    }
    // make board
    populate() {
        header.style.display = 'none'
        main.replaceChildren([])
        this.contestants.forEach((player) => {
            player.update()
        })
        main.classList.add('main-flex')
        this.rounds[this.currentRound].forEach((category) => {
            const column = document.createElement('section')
            const titleDiv = document.createElement('article')
            const title = document.createElement('h2')
            column.classList.add('flex-col')
            titleDiv.classList.add('big-btn')
            title.textContent = category.name
            titleDiv.append(title)
            column.append(titleDiv)
            for (let i = 0; i < category.qA.length; i++) {
                const box = document.createElement('div')
                box.classList.add('big-btn')
                box.id = this.currentRound === 0 ? `${i + 1}00` : `${(i + 1) * 2}00`
                box.textContent = this.currentRound === 0 ? `$${i + 1}00` : `$${(i + 1) * 2}00`
                column.append(box)
                box.addEventListener('click', this.getQ)
            }
            main.append(column)
        })
    }
    // retrieve question
    getQ(e) {
        let box = e.target
        box.classList.add('hidden')
        let category = myGame.rounds[myGame.currentRound].indexOf(myGame.rounds[myGame.currentRound].find((item) => item.name === box.parentElement.firstElementChild.textContent))
        let index = myGame.currentRound === 0 ? (box.id / 100) - 1 : (box.id / 200) - 1
        myGame.makeQ(myGame.rounds[myGame.currentRound][category].qA[index], box.id)
        box.removeEventListener('click', myGame.getQ)
    }
    // generate question box
    makeQ(question, id) {
        const myQ = new Question(question, id)
        myQ.createQ()
    }
    // update round
    check() {
        let answered = 0
        const columns = [...document.querySelectorAll('section')]
        columns.forEach((col) => {
            [...col.children].forEach((div) => {
                if (div.classList.contains('hidden')) {
                    answered++
                }
            })
        })
        if (answered === 25) {
            if (this.final) {
                switch (this.rounds.length) {
                    case 3:
                        if (this.currentRound === 1) {
                            this.runFinal()
                        } else {
                            this.currentRound++
                            this.populate()
                        }
                        break;
                    default:
                        this.runFinal()
                }
            } else {
                switch (this.rounds.length) {
                    case 2:
                        if (this.currentRound === 1) {
                            this.winner()
                        } else {
                            this.currentRound++
                            this.populate()
                        }
                        break;
                    default:
                        this.winner()
                }
            }
        }
    }
    // final
    runFinal() {
        const index = Math.floor(Math.random() * this.rounds[this.rounds.length - 1].length)
        const finalQ = new Final(this.rounds[this.rounds.length - 1][index])
        finalQ.create()
    }
    // display winner
    winner() {
        main.replaceChildren([])
        header.style.display = 'block'
        const sorted = this.contestants.sort((player1, player2) => player1.score - player2.score).reversed()
        const cash = document.createElement('h2')
        headTitle.textContent = `The Winner is:`
        cash.textContent = `${sorted[0].name}!  With $${sorted[0].score}`
        main.append(cash)
    }
}