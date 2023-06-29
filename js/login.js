const form = document.querySelector('[data-login="form"]')
const input = document.querySelector('[data-login="input"]')
const button = document.querySelector('[data-login="button"]')

const validateInput = ({ target }) => {

    if (target.value.length >= 3) {
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = event => {
    event.preventDefault()

    localStorage.setItem('player', input.value)
    window.location = '../pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)