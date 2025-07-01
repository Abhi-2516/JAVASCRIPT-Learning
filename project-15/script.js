const question = [
    {
        label:"burger",
        rating:0,
    },
    {
        label : "pizza",
        rating:0
    },
    {
        label : "pasta",
        rating:0
    },
    {
        label : "noodles",
        rating:0
    },
    {
        label : "sushi",
        rating:0

    }
];

const stored = JSON.parse(localStorage.getItem("question"));
const questions = stored || question;

const makestarrating = questionindex => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = questionindex.label;
    container.appendChild(label);
    container.appendChild(makestars(5,questionindex));

    return container;

}

const makestars =(maxvalue,questionindex)=>{
    const starContainer =  document.createElement("div");

    for (let i = 1; i < maxvalue; i++) {
        const star = document.createElement("span");
        starContainer.appendChild(star);
        if(i < questionindex.rating){
            star.classList.add("filled");
        }
        else{
            star.classList.add("empty");
        }
        star.addEventListener("click", () => {
            for (let j = 0; j < maxvalue; j++) {
                if(j<i){
                    starContainer.children[j].classList.add("filled");
                }
                else{
                    starContainer.children[j].classList.remove("filled");
                    starContainer.children[j].classList.add("empty");

                  
                }
            }
            questionindex.rating = i;
            localStorage.setItem("stored",JSON.stringify(questions));

        })
    }

    return starContainer;
}

const ratingelement = document.getElementById("ratings");

questions.forEach(question => {

    ratingelement.appendChild(makestarrating(question));

})