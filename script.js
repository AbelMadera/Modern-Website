/* Declaring Variables */
const btn = document.getElementById('btn');
const light = document.getElementById('light')

/* Toggle Function */
function toggleBtn(){
    btn.classList.toggle('active')
    light.classList.toggle('on')
}

/* Event Listener */
btn.addEventListener('click', toggleBtn)