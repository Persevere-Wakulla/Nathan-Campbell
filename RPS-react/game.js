//variables
// choices
const rockElem = document.getElementById('rock')
const rockWordElem = document.getElementById('rock-choose')
const paperElem = document.getElementById('paper')
const paperWordElem = document.getElementById('paper-choose')
const scissorElem = document.getElementById('scissor')
const scissorWordElem = document.getElementById('scissor-choose')
const lizardElem = document.getElementById('lizard')
const lizardWordElem = document.getElementById('lizard-choose')
const spockElem = document.getElementById('spock')
const spockWordElem = document.getElementById('spock-choose')

//object
const selections = {
    rock: './images/icon-rock.svg',
    paper: './images/icon-paper.svg',
    scissor: './images/icon-scissors.svg',
    lizard: './images/icon-lizard.svg',
    spock: './images/icon-spock.svg',
}

//array
const options = ['rock', 'paper', 'scissor', 'lizard', 'spock']

//bg
const bgPicElem = document.getElementById('bg-pic')

//step2
const step2Elem = document.getElementById('step2')

//player
const playerElem = document.getElementById('player')
const playerArea = document.getElementById('play-area')

//cpu
const cpuElem = document.getElementById('cpu')
const cpuArea = document.getElementById('cpu-area')

//step3
const step3Elem = document.getElementById('step3')
const outcomeElem = document.getElementById('win-or-lose')

//win or lose
const winElem = document.getElementById('winner')
const loseElem = document.getElementById('loser')
const buttonElem = document.getElementById('again')

//score keeper
let score = 1
const scoreElem = document.getElementById('number')

//listeners
rockElem.addEventListener('click', rockHandler)
rockWordElem.addEventListener('click', rockHandler)
paperElem.addEventListener('click', paperHandler)
paperWordElem.addEventListener('click', paperHandler)
scissorElem.addEventListener('click', scissorHandler)
scissorWordElem.addEventListener('click', scissorHandler)
lizardElem.addEventListener('click', lizardHandler)
lizardWordElem.addEventListener('click', lizardHandler)
spockElem.addEventListener('click', spockHandler)
spockWordElem.addEventListener('click', spockHandler)
buttonElem.addEventListener('click', restart)


//functions
//RNG
function cpuPick(arr) {
    const totalItems = arr.length
    const random = Math.floor(Math.random() * totalItems)
    return arr[random]
}

//step2
function cleanUp() {
    rockElem.style.display = 'none'
    paperElem.style.display = 'none'
    scissorElem.style.display = 'none'
    lizardElem.style.display = 'none'
    spockElem.style.display = 'none'
    bgPicElem.style.display = 'none'
    step2Elem.style.display = 'grid'
    outcomeElem.style.display = 'block'
    outcomeElem.style.gridRow = '2'
    outcomeElem.style.gridColumn = '2'
    cpuElem.style.display = 'block'
    cpuElem.style.gridRow = '1'
    cpuElem.style.gridColumn = '3'
    playerElem.style.display = 'block'
    playerElem.style.gridRow = '1'
    buttonElem.style.display = 'block'
    buttonElem.style.gridRow = '3'
    buttonElem.style.gridColumn = '2'
    // playerArea.classList.add('player')
    // cpuArea.classList.add('cpu')
    // outcomeElem.classList.add('outcome')
}


//handlers
//rock
function rockHandler() {
    cleanUp()

    playerArea.firstElementChild.src = selections['rock']
    playerArea.className = 'circle rock'
    let cpuChoice = cpuPick(options)
    cpuArea.firstElementChild.src = selections[cpuChoice]
    cpuArea.classList.add(`${cpuChoice}`)

    rockVs(cpuChoice)
}

//paper
function paperHandler() {
    cleanUp()

    playerArea.firstElementChild.src = selections['paper']
    let cpuChoice = cpuPick(options)
    cpuArea.firstElementChild.src = selections[cpuChoice]
    cpuArea.classList.add(`${cpuChoice}`)
    playerArea.className = 'circle paper'

    paperVs(cpuChoice)
}

//scissor
function scissorHandler() {
    cleanUp()

    playerArea.firstElementChild.src = selections['scissor']
    let cpuChoice = cpuPick(options)
    cpuArea.firstElementChild.src = selections[cpuChoice]
    cpuArea.classList.add(`${cpuChoice}`)
    playerArea.className = 'circle scissor'

    scissorVs(cpuChoice)
}

//lizard
function lizardHandler() {
    cleanUp()

    playerArea.firstElementChild.src = selections['lizard']
    let cpuChoice = cpuPick(options)
    cpuArea.firstElementChild.src = selections[cpuChoice]
    cpuArea.classList.add(`${cpuChoice}`)
    playerArea.className = 'circle lizard'

    lizardVs(cpuChoice)
}

//spock
function spockHandler() {
    cleanUp()

    playerArea.firstElementChild.src = selections['spock']
    let cpuChoice = cpuPick(options)
    cpuArea.firstElementChild.src = selections[cpuChoice]
    cpuArea.classList.add(`${cpuChoice}`)
    playerArea.className = 'circle spock'

    spockVs(cpuChoice)
}


//play again button
function restart() {
    rockElem.style.display = ''
    paperElem.style.display = ''
    scissorElem.style.display = ''
    lizardElem.style.display = ''
    spockElem.style.display = ''
    bgPicElem.style.display = ''
    step2Elem.style.display = 'none';
    cpuArea.classList.remove(...['rock', 'paper', 'scissors', 'lizard', 'spock'])
    cpuArea.classList.remove(...['wins', 'loses', 'tie'])
    playerArea.classList.remove(...['wins', 'loses', 'tie'])
}


//comparison switches
//rock
function rockVs(cpu) {
    switch (cpu) {
        case 'paper':
        case 'spock':
            youWin('no')
            break;
        case 'scissor':
        case 'lizard':
            youWin('yes')
            break;
        default:
            youWin('tie')
            break;
    }
}

//paper
function paperVs(cpu) {
    switch (cpu) {
        case 'rock':
        case 'lizard':
            youWin('yes')
            break;
        case 'scissor':
        case 'spock':
            youWin('no')
            break;
        default:
            youWin('tie')
            break;
    }
}

//scissor
function scissorVs(cpu) {
    switch (cpu) {
        case 'rock':
        case 'spock':
            youWin('no')
            break;
        case 'paper':
        case 'lizard':
            youWin('yes')
            break;
        default:
            youWin('tie')
            break;
    }
}

//lizard
function lizardVs(cpu) {
    switch (cpu) {
        case 'rock':
        case 'scissor':
            youWin('no')
            break;
        case 'paper':
        case 'spock':
            youWin('yes')
            break;
        default:
            youWin('tie')
            break;
    }
}

//spock
function spockVs(cpu) {
    switch (cpu) {
        case 'rock':
        case 'scissor':
            youWin('yes')
            break;
        case 'paper':
        case 'lizard':
            youWin('no')
            break;
        default:
            youWin('tie')
            break;
    }
}


//outcome
//win
function youWin(msg) {
    if (msg === 'yes') {
        outcomeElem.textContent = 'You Win!'
        playerArea.classList.add('wins')
        cpuArea.classList.add('loses')
        scoreElem.textContent = score++

    } if (msg === 'no') {
        outcomeElem.textContent = 'You Lost!'
        playerArea.classList.add('loses')
        cpuArea.classList.add('wins')

    } if (msg === 'tie') {
        outcomeElem.textContent = 'Tied Try Again.'
        playerArea.classList.add('tie')
        cpuArea.classList.add('tie')
    }
}