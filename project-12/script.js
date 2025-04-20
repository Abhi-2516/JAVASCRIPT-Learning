const dataarray = [
    {
        title: "What is my name ?",
        detail: "ASK YOUR MOM !!"
    },
    {
        title: "What I do ?",
        detail: "You won't know as you sleep at that time"
    },
    {
        title: "What i achived ?",
        detail: "look into mirror boy"
    }
];
const m =  data =>{
    return `<details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    
    </details>`
};

document.getElementById('faq-container').innerHTML =dataarray.map(dataitem => m(dataitem)).join('');

