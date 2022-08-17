import {
    Modal
} from './modal.js';
import {
    calculateIMC
} from './utils.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = e => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const result = calculateIMC(weight, height)

    displayResultMessage(result)
}

btnClose.addEventListener('click', handleCloseClick)

function handleCloseClick(e) {
    e.preventDefault()

    inputHeight.value = ''
    inputWeight.value = ''

    Modal.toogleModal()
}

function displayResultMessage(result) {
    Modal.toogleModal()
    Modal.message.innerHTML = `Seu IMC e ${result}`
}