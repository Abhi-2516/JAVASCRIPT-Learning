const testimonials = [
    {
        author:{
            name: "Abhi",
            image: 'author-01.jpg',

        },
        text: 'hajksdlf asmndfbkjas v,asdh x,aksjdh fbmnx,mnasdb iljkasd ckljawghkjahf uias bnl;jasdh fknmad flkjashdbfm, axj bnxṁ,vnp9aweh fm,Z b  nkjasdhflkZuflks cmnzvfjklasdu;hfmlkz cmzx voiweurlksn v,m  jkl ,mhfoisdnvm, ik',
        date: '15 april 2025',

    },
    {
        author:{
            name: "ansh",
            image: 'author-02.jpg',

        },
        text: 'hajksdlf asmndfbkjas v,asdh x,aksjdh fbmnx,mnasdb iljkasd ckljawghkjahf uias bnl;jasdh fknmad flkjashdbfm, axj bnxṁ,vnp9aweh fm,Z b  nkjasdhflkZuflks cmnzvfjklasdu;hfmlkz cmzx voiweurlksn v,m  jkl ,mhfoisdnvm, ik',
        date: '15 april 2025',

    },
    {
        author:{
            name: "veer",
            image: 'author-03.jpg',

        },
        text: 'hajksdlf asmndfbkjas v,asdh x,aksjdh fbmnx,mnasdb iljkasd ckljawghkjahf uias bnl;jasdh fknmad flkjashdbfm, axj bnxṁ,vnp9aweh fm,Z b  nkjasdhflkZuflks cmnzvfjklasdu;hfmlkz cmzx voiweurlksn v,m  jkl ,mhfoisdnvm, ik',
        date: '15 april 2025',

    },
    {
        author:{
            name: "kushal",
            image: 'author-04.jpg',

        },
        text: 'hajksdlf asmndfbkjas v,asdh x,aksjdh fbmnx,mnasdb iljkasd ckljawghkjahf uias bnl;jasdh fknmad flkjashdbfm, axj bnxṁ,vnp9aweh fm,Z b  nkjasdhflkZuflks cmnzvfjklasdu;hfmlkz cmzx voiweurlksn v,m  jkl ,mhfoisdnvm, ik',
        date: '15 april 2025',

    },
]

const a = document.getElementById('testimonials-container');

const makecard = testimonials=> {
    return `<div class="testimonial-card"> 
    <img src="${testimonials.author.image}">
    <h2>${testimonials.author.name} </h2>
    <p>${testimonials.text}</p>
    <date>Written on ${testimonials.date}</date>
</div>`

};
let count = 0;

const next = ()=>{
    if(count<testimonials.length-1){
        count+=1;
    }
    updatepage();
}
const prev = ()=>{
    if(count>0){
        count-=1;
    }
    updatepage();
}

const updatepage = ()=>{
    let markup = makecard(testimonials[count]);
    if(testimonials.length>1){
        markup+= `<nav>
           <button onClick = "prev()">Prev</button>
            <button onClick = "next()">Next</button>
            

            </nav>`
    }

    a.innerHTML= markup;

     
};

updatepage();