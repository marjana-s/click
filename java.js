function onClick() {
    let input = prompt('Де ви живете?');
    let div = document.getElementById('box');
    div.innerHTML = input;
}

let button = document.getElementById('btn');

button.addEventListener('click', onClick);