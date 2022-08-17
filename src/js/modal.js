export const  Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('h2'),

    toogleModal() {
        this.wrapper.classList.toggle('open')
    }
}

window.addEventListener('keydown', e => {
    e.key === 'Escape' && Modal.toogleModal()
})

