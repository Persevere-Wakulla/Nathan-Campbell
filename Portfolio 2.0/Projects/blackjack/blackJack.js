const deckOfCards = [
    {
        suit: 'hearts',
        value: 2,
        img: './SVG-cards-1.3/2_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 3,
        img: './SVG-cards-1.3/3_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 4,
        img: './SVG-cards-1.3/4_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 5,
        img: './SVG-cards-1.3/5_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 6,
        img: './SVG-cards-1.3/6_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 7,
        img: './SVG-cards-1.3/7_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 8,
        img: './SVG-cards-1.3/8_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 9,
        img: './SVG-cards-1.3/9_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 10,
        img: './SVG-cards-1.3/10_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'K',
        img: './SVG-cards-1.3/king_of_hearts.svg'
    },
    {
        suit: 'hearts',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_hearts.svg'
    },
    {
        suit: 'diamonds',
        value: 2,
        img: './SVG-cards-1.3/2_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 3,
        img: './SVG-cards-1.3/3_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 4,
        img: './SVG-cards-1.3/4_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 5,
        img: './SVG-cards-1.3/5_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 6,
        img: './SVG-cards-1.3/6_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 7,
        img: './SVG-cards-1.3/7_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 8,
        img: './SVG-cards-1.3/8_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 9,
        img: './SVG-cards-1.3/9_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 10,
        img: './SVG-cards-1.3/10_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'K',
        img: './SVG-cards-1.3/king_of_diamonds.svg'
    },
    {
        suit: 'diamonds',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_diamonds.svg'
    },
    {
        suit: 'clubs',
        value: 2,
        img: './SVG-cards-1.3/2_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 3,
        img: './SVG-cards-1.3/3_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 4,
        img: './SVG-cards-1.3/4_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 5,
        img: './SVG-cards-1.3/5_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 6,
        img: './SVG-cards-1.3/6_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 7,
        img: './SVG-cards-1.3/7_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 8,
        img: './SVG-cards-1.3/8_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 9,
        img: './SVG-cards-1.3/9_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 10,
        img: './SVG-cards-1.3/10_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'K',
        img: './SVG-cards-1.3/king_of_clubs.svg'
    },
    {
        suit: 'clubs',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_clubs.svg'
    },
    {
        suit: 'spades',
        value: 2,
        img: './SVG-cards-1.3/2_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 3,
        img: './SVG-cards-1.3/3_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 4,
        img: './SVG-cards-1.3/4_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 5,
        img: './SVG-cards-1.3/5_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 6,
        img: './SVG-cards-1.3/6_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 7,
        img: './SVG-cards-1.3/7_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 8,
        img: './SVG-cards-1.3/8_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 9,
        img: './SVG-cards-1.3/9_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 10,
        img: './SVG-cards-1.3/10_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'J',
        img: './SVG-cards-1.3/jack_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'Q',
        img: './SVG-cards-1.3/queen_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'K',
        img: './SVG-cards-1.3/king_of_spades.svg'
    },
    {
        suit: 'spades',
        value: 'A',
        img: './SVG-cards-1.3/ace_of_spades.svg'
    },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
};

// shuffled cards
shuffleArray(deckOfCards)
let myDeck = shuffleArray(deckOfCards)

// hands
let dealerCards = []
let playerCards = []
let handOne = []
let handTwo = []

// play areas
const dealer = document.getElementById('dealer')
const player = document.getElementById('play')
const center = document.getElementById('center')
const thePot = document.getElementById('pot')
const myBet = document.getElementById('my-bet')
const myBank = document.getElementById('money')
const message = document.getElementById('message')

// buttons
const dealBtn = document.getElementById('start')
const hitBtn = document.getElementById('hit')
const stayBtn = document.getElementById('stay')
const dblBtn = document.getElementById('dbl-down')
const splitBtn = document.getElementById('split')
const gambling = document.querySelector('.bank')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const betIt = document.getElementById('place')

// events
dealBtn.addEventListener('click', handleDealing)
hitBtn.addEventListener('click', handleHit)
stayBtn.addEventListener('click', handleStay)
dblBtn.addEventListener('click', handleDbl)
plusBtn.addEventListener('click', add)
minusBtn.addEventListener('click', subtract)
betIt.addEventListener('click', placeBet)

//faces
const faces = ['J', 'Q', 'K']

// gambling
let winnings = 0
thePot.textContent = winnings
let bank = 10000
myBank.textContent = bank
let betting = 0
myBet.textContent = betting

// plus
function add() {
    if (betting >= bank - 50) {
        plusBtn.removeEventListener('click', add)
        plusBtn.classList.add('non-btn')
    } else {
        plusBtn.addEventListener('click', add)
        plusBtn.classList.remove('non-btn')
        bank -= 100
        betting += 100
        myBet.textContent = betting
        myBank.textContent = bank
    }
}

// minus
function subtract() {
    if (betting < 50) {
        minusBtn.removeEventListener('click', subtract)
        minusBtn.classList.add('non-btn')
        bank += 0
    } else {
        minusBtn.addEventListener('click', subtract)
        minusBtn.classList.remove('non-btn')
        bank += 100
        betting -= 100
        myBet.textContent = betting
        myBank.textContent = bank
    }
}

// place bet
function placeBet() {
    winnings += betting
    betting = 0
    thePot.textContent = winnings
    myBank.textContent = bank
    myBet.textContent = betting
}

//deal handler
function handleDealing() {
    if (winnings === 0) {
        alert('You must place a bet!')
    }
    else {
        // reset
        replaceCards(dealerCards, dealer)
        replaceCards(playerCards, player)
        if (handOne.length){
            replaceCards(handOne, leftSide)
            replaceCards(handTwo, rightSide)
        }

        shuffleArray(deckOfCards)
        myDeck = shuffleArray(deckOfCards)
        message.textContent = ''
        // button control
        dealBtn.removeEventListener('click', handleDealing)
        hitBtn.addEventListener('click', handleHit)
        stayBtn.addEventListener('click', handleStay)
        dblBtn.addEventListener('click', handleDbl)
        splitBtn.removeEventListener('click', splits)
        dealBtn.classList.add('non-btn')
        splitBtn.classList.add('non-btn')
        hitBtn.classList.remove('non-btn')
        stayBtn.classList.remove('non-btn')
        dblBtn.classList.remove('non-btn')
        plusBtn.classList.remove('non-btn')
        minusBtn.classList.remove('non-btn')
        betIt.classList.remove('non-btn')

        // deal
        for (let i = 0; i < 2; i++) {
            playerCards.push(myDeck.shift())
            dealerCards.push(myDeck.shift())
        }
        createCard(playerCards, player)
        createCard(dealerCards, dealer)

        faceValue(playerCards)
        faceValue(dealerCards)

        if (playerCards[0].value === playerCards[1].value) {
            splitBtn.classList.remove('non-btn')
            splitBtn.addEventListener('click', splits)
        }

        // flip dealer card
        dealer.firstElementChild.firstElementChild.classList.add('flipped')

        // blackjack?
        if (countScore(dealerCards) === 21) {
            youLose()
        }
        if (countScore(playerCards) === 21 && countScore(dealerCards) === 21) {
            push()
        }
        if (countScore(playerCards) === 21) {
            winDouble()
        }
    }
}

// card creation
function createCard(arr, section) {
    arr.forEach((card) => {
        // create the card
        let myScene = document.createElement('div')
        let myCard = document.createElement('div')
        let myFront = document.createElement('div')
        let myBack = document.createElement('div')
        let myFace = document.createElement('img')
        let myDesign = document.createElement('div')
        // assign img src
        myFace.src = card.img
        //classes
        myScene.classList.add('scene')
        myCard.classList.add('card')
        myFront.classList.add('card_face', 'front')
        myBack.classList.add('card_face', 'back')
        myDesign.classList.add('design')
        // append
        myBack.append(myDesign)
        myFront.append(myFace)
        myCard.append(myFront)
        myCard.append(myBack)
        myScene.append(myCard)
        section.append(myScene)
    })
}



// hit me
function handleHit(arr, section) {
    // who click?
    if (this === hitBtn) {
        arr = playerCards
        section = player
    }
    section.replaceChildren([])
    // one card
    arr.push(myDeck.shift())
    // create it
    createCard(arr, section)
    // change up the values
    faceValue(arr)
    countScore(arr)
    changeAce(arr)

    //busted
    if (countScore(playerCards) > 21) {
        youBust()
    }
}

//stay
function handleStay() {
    //buttons off
    hitBtn.removeEventListener('click', handleHit)
    stayBtn.removeEventListener('click', handleStay)
    dblBtn.removeEventListener('click', handleDbl)
    hitBtn.classList.add('non-btn')
    dblBtn.classList.add('non-btn')
    stayBtn.classList.add('non-btn')

    // dealer hits
    while (countScore(dealerCards) < 17) {
        handleHit(dealerCards, dealer)
        faceValue(dealerCards)
        changeAce(dealerCards)
    }

    // dealer bust
    if (countScore(dealerCards) > 21) {
        houseBust()
        return
    }

    // dealer stays
    if (countScore(dealerCards) >= 17) {
        compare(playerCards)
    }
}

//double down
function handleDbl() {
    //btns off
    hitBtn.removeEventListener('click', handleHit)
    stayBtn.removeEventListener('click', handleStay)
    hitBtn.classList.add('non-btn')
    stayBtn.classList.add('non-btn')
    // bet x2
    winnings *= 2
    bank -= winnings * 2
    myBank.textContent = bank
    thePot.textContent = winnings
    // one card
    handleHit(playerCards, player)
    handleStay()
}

// split
function splits() {
    console.dir(player)
    // remove the cards, buttons, and the pot
    center.replaceChildren([])
    player.replaceChildren([])
    player.classList.remove('flex')
    hitBtn.style.display = 'none'
    stayBtn.style.display = 'none'

    // divide the pair and make 2 hands
    handOne.push(playerCards.shift())
    handTwo.push(playerCards.shift())
    // handOne.push(myDeck.shift())
    // handTwo.push(myDeck.shift())

    // make two areas
    const leftSide = document.createElement('div')
    const rightSide = document.createElement('div')
    leftSide.style.display = 'flex'
    rightSide.style.display = 'flex'
    player.append(leftSide)
    player.append(rightSide)

    // re-deal
    createCard(handOne, leftSide)
    handleHit(handOne, leftSide)
    createCard(handTwo, rightSide)
    handleHit(handTwo, rightSide)

    // two banks
    let bank1 = winnings
    let bank2 = winnings
    bank -= winnings

    // new pots
    const potLeft = document.createElement('div')
    const potRight = document.createElement('div')
    const leftCash = document.createElement('p')
    const rightCash = document.createElement('p')
    potLeft.append(leftCash)
    potRight.append(rightCash)
    center.append(potLeft)
    center.append(potRight)
    center.style.display = 'flex'
    leftCash.textContent = bank1
    rightCash.textContent = bank2

    //new buttons
    const leftBtns = document.createElement('div')
    const rightBtns = document.createElement('div')

    //left
    const leftHit = document.createElement('button')
    const leftStay = document.createElement('button')
    const leftDblDwn = document.createElement('button')
    leftHit.classList.add('game-btn')
    leftStay.classList.add('game-btn')
    leftDblDwn.classList.add('game-btn')
    leftHit.textContent = 'Hit'
    leftStay.textContent = 'Stay'
    leftDblDwn.textContent = 'Double Down'
    leftBtns.append(leftHit)
    leftBtns.append(leftStay)
    leftBtns.append(leftDblDwn)
    leftSide.append(leftBtns)

    // right
    const rightHit = document.createElement('button')
    const rightStay = document.createElement('button')
    const rightDblDwn = document.createElement('button')
    rightHit.classList.add('non-btn')
    rightStay.classList.add('non-btn')
    rightDblDwn.classList.add('non-btn')
    rightHit.textContent = 'Hit'
    rightStay.textContent = 'Stay'
    rightDblDwn.textContent = 'Double Down'
    rightBtns.append(rightHit)
    rightBtns.append(rightStay)
    rightBtns.append(rightDblDwn)
    rightSide.append(rightBtns)

    // events
    // left
    leftHit.addEventListener('click', () => {
        handleHit(handOne, leftSide)
    })

    leftDblDwn.addEventListener('click', () => {
        //btns off
        leftHit.classList.add('non-btn')
        leftStay.classList.add('non-btn')
        // bet x2
        bank1 *= 2
        bank -= bank1
        myBank.textContent = bank
        leftCash.textContent = bank1
        // one card
        handleHit(handOne, leftSide)
    })

    leftStay.addEventListener('click', () => {
        leftHit.classList.add('non-btn')
        leftStay.classList.add('non-btn')
        leftDblDwn.classList.add('non-btn')

        //right
        rightHit.classList.remove('non-btn')
        rightStay.classList.remove('non-btn')
        rightDblDwn.classList.remove('non-btn')
        rightHit.classList.add('game-btn')
        rightStay.classList.add('game-btn')
        rightDblDwn.classList.add('game-btn')
    
        rightStay.addEventListener('click', () => {
            compare(handOne)
            compare(handTwo)
        })
        rightHit.addEventListener('click', () => {
            handleHit(handTwo, rightSide)
        })
        rightDblDwn.addEventListener('click', () => {
            //btns off
            rightHit.classList.add('non-btn')
            rightStay.classList.add('non-btn')
            // bet x2
            bank2 *= 2
            bank -= bank2
            myBank.textContent = bank
            rightCash.textContent = bank2
            // one card
            handleHit(handTwo, rightSide)
            handleStay()
        })
    })
}

//utilities
//calculate
function countScore(arr) {
    let score = arr.reduce((total, current) => total + current.value, 0)
    return score
}

//face value
function faceValue(arr) {
    let aces = 0
    arr.map((card) => {
        if (faces.includes(card.value)) {
            card.value = 10
        }
        if (card.value === 'A') {
            card.value = 11
            aces++
        }
        if (aces > 1) {
            arr[1].value = 1
        }
    })
}

//change ace
function changeAce(arr) {
    arr.map((card) => {
        if (card.value === 11 && countScore(arr) > 21) {
            card.value = 1
        }
    })
}

function replaceCards(arr, section) {
    section.replaceChildren([])
    while (arr.length) {
        deckOfCards.push(arr.pop())
    }
}

// comparisons
function compare(arr) {
    if (countScore(arr) === countScore(dealerCards)) {
        push()
    }
    if (countScore(arr) > countScore(dealerCards)) {
        youWin()
    }
    if (countScore(arr) < countScore(dealerCards)) {
        youLose()
    }
}

// win, lose, or push
function youWin() {
    message.textContent = 'You Win!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    let total = bank + (winnings * 2.5)
    myBank.textContent = total
    bank = total
    winnings = 0
    thePot.textContent = winnings
    return
}

function winDouble() {
    message.textContent = '21! Double your money!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    let total = bank + (winnings * 4)
    myBank.textContent = total
    bank = total
    winnings = 0
    thePot.textContent = winnings
    return
}

function youLose() {
    message.textContent = 'You Lost!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    winnings = 0
    thePot.textContent = winnings
    return
}

function push() {
    message.textContent = 'Push!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    winnings * 4
    thePot.textContent = winnings
    return
}

function youBust() {
    message.textContent = 'You Bust!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    winnings = 0
    thePot.textContent = winnings
    return
}

function houseBust() {
    message.textContent = 'House Busts!'
    dealBtn.addEventListener('click', handleDealing)
    dealBtn.classList.remove('non-btn')
    dealer.firstElementChild.firstElementChild.classList.remove('flipped')
    let total = bank + (winnings * 2.5)
    myBank.textContent = total
    bank = total
    winnings = 0
    thePot.textContent = winnings
    return
}