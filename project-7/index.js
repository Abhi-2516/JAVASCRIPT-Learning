let a = document.querySelector('button')
let c = document.querySelector('h1 > span')

a.addEventListener('click', function () {

    let b = prompt("enter your name");
     c.textContent = b;

})