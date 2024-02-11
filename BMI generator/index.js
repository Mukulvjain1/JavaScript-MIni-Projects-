let form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    let height=parseInt(document.querySelector("#height").value)
    let weight=parseInt(document.querySelector("#weight").value)
    let results=document.querySelector('#results')
    if (height==='' || height < 0 || isNaN(height)){
        results.innerHTML=`Enter a Valid height the height is ${height}`
        
    } else  if (weight==='' || weight<0 ||isNaN(weight)){
        results.innerHTML=`Enter a Valid weight the weight is ${weight}`
    } else{
        const BMI=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${BMI}</span>`;
        if (BMI<18.6){
        results.innerHTML=`<span> You are Under Weight BMI is ${BMI}</span>`;
        }
        else if(BMI>=18.6 && BMI<24.9){
            results.innerHTML=`<span> You are at Normal Range  and your BMI is ${BMI}</span>`;
        }
        else{
            results.innerHTML=`<span> You are Over Weight  BMI is ${BMI}</span>`;
            }
    }
})

// console.log(`BMI is ${BMI}`)