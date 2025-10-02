const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

let productList = document.getElementById("product-name");
let formSelector = document.querySelector("form");

products.forEach(product=> {
    let productOption = document.createElement("option");
    productOption.setAttribute("value", product.id);
    productOption.textContent = product.name;
    productList.appendChild(productOption);
});

formSelector.addEventListener("submit", ()=> {
    event.preventDefault();
    let counter =  JSON.parse(localStorage.getItem('formSubmissionCounter'));
    if (counter != null){
        ++counter;
    }
    else{
        counter = 1;
    }
    localStorage.setItem('formSubmissionCounter', JSON.stringify(counter));
    console.log(counter);
})

