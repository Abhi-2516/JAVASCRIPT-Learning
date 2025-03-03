const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const r = document.querySelector('#results')

    if(h=== ''|| h<0||isNaN(h)){
        results.innerHTML = 'dahng se likh le bhia height deni h bs'
    }
   else if(w=== ''|| w<0||isNaN(w)){
        results.innerHTML = 'dahng se likh le bhia weight deni h bs'
    }
    else{
        const bmi = (w/((h*h)/10000)).toFixed(2)
        if(bmi<18){
            results.innerHTML = `Your BMI is : <span>${bmi}</span> ||  UnderWeight Eat Bulky Food`

        }
        else if(bmi>18 && bmi<25){
            results.innerHTML = `Your BMI is : <span>${bmi}</span> || Healthy  Eat normal food and focuso on strenght gainbing`

        }
        else{
            results.innerHTML = `Your BMI is : <span>${bmi}</span> || Mote bkl thoda poet km kr le `
        }

       
    }



})