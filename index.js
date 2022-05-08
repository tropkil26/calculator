const result = document.getElementById('result');
const input = document.getElementById('input');
const buttons = document.getElementsByClassName('btn')

let inputs = '';

Array.from(buttons).forEach(btn => {

    btn.addEventListener('click', function (e) {
        console.log(e.target.innerText)
    })
});