// get id
let inp = document.getElementById("amount");
let btn = document.getElementById("btn");
let result = document.getElementById("results");
let select1 = document.getElementById("currency-one");
let select2 = document.getElementById('currency-two')


// function calculate for rate and fetch api ...


function calculate(e) {
  let s1 = select1.value;
  let s2 = select2.value;
  fetch(`https://v6.exchangerate-api.com/v6/29e64a6eff0f5fb96a548131/latest/${s1}`).then((res) => res.json()).then((data) => {
    console.log(data.conversion_rates)
    let r = data.conversion_rates[s2]
    result.innerText = `${inp.value} ${s1}= ${r*inp.value} ${s2}`;
  })

}


//event listening


btn.addEventListener('click', calculate);








//api key
//G06fB0tu6La3KM8Y94aslcoJsSJ6lSAW
