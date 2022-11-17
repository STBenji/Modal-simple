const modal = document.getElementById('modal')
const bgmodal = document.getElementById('main-modal')
const openmodal = document.getElementById('btn-modal')
const closemodal = document.getElementById('close-btn-modal')


openmodal.addEventListener('click', () => {

    modal.classList.add ('modal-active')
    bgmodal.classList.add('main-modal')

});

closemodal.addEventListener('click', () => {

    modal.classList.remove ('modal-active')
    bgmodal.classList.remove('main-modal')

});

// bgmodal.addEventListener('click',  () => {

//     modal.classList.remove ('modal-active')
//     bgmodal.classList.remove('main-modal')

// });
window.onkeyup = function (event) {
    if (event.keyCode == '27') {
        modal.classList.remove ('modal-active')
        bgmodal.classList.remove('main-modal')
    }
}
