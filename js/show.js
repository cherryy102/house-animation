const span = document.querySelector('span');
const div = document.querySelectorAll('div');
span.addEventListener('click', function() {
    for (let i = 0; i < div.length; i++) {
        div[i].classList.toggle('active');
    }
})