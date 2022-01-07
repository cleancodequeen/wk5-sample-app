let ulEl = document.querySelector("#list-items");
let inputEl = document.querySelector("#input-field");
let buttonEl = document.querySelector("#btn");
let supplyName = document.querySelector("input[name='text-input']").value;

console.log(supplyName);


let addSupply = function (event) {
    event.preventDefault();
    console.log(event.target.value);
    // let addLi = document.createElement('li');
    
    console.log(supplyName);
}

buttonEl.addEventListener("click", addSupply);