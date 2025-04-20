let a = document.getElementById('increment');
let b = document.getElementById('decrement');
let c = document.querySelector('p >span');
let d = document.getElementById('o');
let e = document.querySelector('.e');
let h = document.getElementById('q');

e.style.display = 'none';
a.addEventListener('click' , ()=>{
    c.textContent = parseInt(c.textContent) + 1;
});
b.addEventListener('click', ()=>{
    c.textContent = parseInt(c.textContent) - 1;
});
d.addEventListener('click',()=>{
    if(parseInt(c.textContent) % 2 == 0){
        h.textContent = "even";
    }
    else{
        h.textContent = "odd";
    }

    e.style.display = "block";
})