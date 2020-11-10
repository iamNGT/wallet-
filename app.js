
let title = document.getElementById('title');

title.innerHTML = "Avaliable Budget on " + (new Date()).toDateString();

let main = document.querySelector('.main');

let showresult = document.createElement('div');

// main.appendChild(showresult);


let money = document.getElementById('money');
let price1 = document.querySelector('.showincome .price');
let price2 = document.querySelector('.showexpenses .price');
let selectSign = document.getElementById('selectOption');
let cost = document.getElementById('cost');
let name = document.getElementById('name');

var formular = document.getElementById('form');



formular.addEventListener('submit',function(e) {
    e.preventDefault();

    let objectForm = {
        project: name.value,
        price: cost.value,
        select: selectSign.value
    };
    
    if(selectSign.value == '+'){
        
        price1.innerHTML  = Number(price1.innerText)  + Number(cost.value);
      
    } else{
        price2.innerHTML ="- "+ +cost.value; 
    }
})