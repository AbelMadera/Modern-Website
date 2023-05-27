const btn = document.getElementById('btn');

function toggleBtn(){
    btn.classList.toggle('active')
}

btn.addEventListener('click', toggleBtn)