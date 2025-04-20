
const  a = document.querySelectorAll('a');
const s = document.querySelectorAll('section');


const remove = ()=>{
    a.forEach(link => link.parentElement.classList.remove('active'));

};

const hide = () =>{
    s.forEach(section =>section.classList.add('hidden'));
}

a.forEach(link=>{
    link.addEventListener('click',()=>{
        remove();
        hide();
        link.parentElement.classList.add('active');
        const sec = document.querySelector(link.hash);
        sec.classList.remove('hidden')


    });
})