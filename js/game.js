const grid = document.querySelector('[data-game="grid"]')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
]

const createElement = (tag, className) => {
    
    const element = document.createElement(tag) 
    element.className = className

    return element  
}

const createCard = (character) => {

    const card = createElement('div', 'card')
    const front  = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../images/${character}.png)`
    
    card.appendChild(front)
    card.appendChild(back)

    return card
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters]
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - .5)

    shuffledArray.forEach(character => {

        const card = createCard(character)
        grid.appendChild(card)
    })
}

loadGame()