const form = document.querySelector('form');
//this usecase will give an empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let str = "";
        if(bmi < 18.6){
            str = "Underweight";
        }else if(bmi >= 18.6 && bmi <= 24.9){
            str = "Normal Weight";
        }else {
            str = "Overweight"
        }
        results.innerHTML = `<span>The BMI is : ${bmi} <br> You are ${str} </span>`
    }

})