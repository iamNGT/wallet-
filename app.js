
let title = document.getElementById('title');

title.innerHTML = "Avaliable Budget on " + (new Date()).toDateString();

let money = document.getElementById('money');
let price1 = document.querySelector('.showincome .price');
let price2 = document.querySelector('.showexpenses .price');
let selectSign = document.getElementById('selectOption');
let cost = document.getElementById('cost');
let name = document.getElementById('name');
const tr_income = document.querySelector('.income');
const tr_expense = document.querySelector('.expenses');


var formular = document.getElementById('form');

let expensePercent = document.getElementById('percent');

formular.addEventListener('submit',function(e) {
    e.preventDefault();

    let objectForm = {
        project: name.value,
        price: cost.value,
        select: selectSign.value
    };
    
    const incomes = [];
    const expenses = [];
    
    if(selectSign.value == '+'){
        
        price1.innerHTML  = Number(price1.innerText)  + Number(cost.value);   
        incomes.push(objectForm);

      for(const income of incomes){
          const inValue = document.createElement('div');
          tr_income.appendChild(inValue);
          inValue.classList.add('tr-income');
          const projName = document.createElement('span');
          inValue.appendChild(projName);
          projName.innerHTML = income.project;

          const priceValue = document.createElement('span');
          inValue.appendChild(priceValue);
          priceValue.classList.add('tblin-price');
          priceValue.innerHTML =income.select + income.price;
         
      }

      
    } else{
        price2.innerHTML = Number(price2.innerText)  + Number(cost.value); 
        expenses.push(objectForm);

        for(const expense of expenses){
            const inValue = document.createElement('div');
            tr_expense.appendChild(inValue);
            inValue.classList.add('tr-income');
            const projName = document.createElement('span');
            inValue.appendChild(projName);
            projName.innerHTML = expense.project;
  
            const priceValue = document.createElement('span');
            inValue.appendChild(priceValue);
            priceValue.classList.add('tblex-price');
            priceValue.innerHTML = expense.select + expense.price;
           
        }
    }

    money.innerHTML = Number(price1.innerText) - Number(price2.innerText);

    if(price2.innerText != 0){
        expensePercent.innerHTML = Math.ceil((Number(price2.innerText) * 100)/Number(price1.innerText)) + "%";
        expensePercent.classList.add('percentDesign');
    }

})

