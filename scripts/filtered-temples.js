const hamburger = document.querySelector("#hamburger");
const list = document.querySelector(".nav-list");
const templeh1 = document.querySelector("h1");
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Brasília Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, USA",
    dedicated: "1921, November, 29",
    area: 75000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs, Georgia",
    dedicated: "1983, June, 4",
    area: 34500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
  // Add more temple objects here...
];


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("open");
    list.classList.toggle("open");
    templeh1.style.alignSelf = "flex-start";
    templeh1.style.paddingTop = "10px";  
});

let imagesContainer = document.getElementById("images-container");
let title = document.getElementById("title");

function createTemplesGrid (templesList){
  imagesContainer.innerHTML = "";
  templesList.forEach(function(temple){
    let imageCard = document.createElement("div");
    imageCard.setAttribute("class", "image-card");
    imagesContainer.appendChild(imageCard);
    let h2 = document.createElement("h2");
    h2.textContent = temple.templeName;
    imageCard.appendChild(h2);
    let textDiv = document.createElement("div");
    let templeLocationI = document.createElement("i");
    templeLocationI.textContent = "Location: ";
    let templeLocationP = document.createElement("p");
    templeLocationP.textContent = temple.location;
    let templeDedicatedI = document.createElement("i");
    templeDedicatedI.textContent = "Dedicated: ";
    let templeDedicatedP = document.createElement("p");
    templeDedicatedP.textContent = temple.dedicated;
    let templeSizeI = document.createElement("i");
    templeSizeI.textContent = "Size: ";
    let templeSizeP = document.createElement("p");
    templeSizeP.textContent = temple.area;
    textDiv.appendChild(templeLocationI);
    textDiv.appendChild(templeLocationP);
    textDiv.appendChild(templeDedicatedI);
    textDiv.appendChild(templeDedicatedP);
    textDiv.appendChild(templeSizeI);
    textDiv.appendChild(templeSizeP);
    imageCard.appendChild(textDiv);
    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl)
    image.setAttribute("alt", temple.templeName)
    image.setAttribute("loading", "lazy")
    imageCard.appendChild(image);

  }); 
};



const homeIndex = document.getElementById("home");
const newIndex = document.getElementById("new");
const oldIndex = document.getElementById("old");
const largeIndex = document.getElementById("large");
const smallIndex = document.getElementById("small");

createTemplesGrid(temples);
homeIndex.addEventListener("click", () => {
    createTemplesGrid(temples);
});

newIndex.addEventListener("click", () => {
    title.textContent = "New";
    createTemplesGrid(temples.filter(temple => Number(temple["dedicated"].split(",")[0]) >= 2000));
});
oldIndex.addEventListener("click", () => {
  title.textContent = "Old";
    createTemplesGrid(temples.filter(temple => Number(temple["dedicated"].split(",")[0]) <= 1900));
});
largeIndex.addEventListener("click", () => {
  title.textContent = "Large";
    createTemplesGrid(temples.filter(temple => temple.area >= 90000));
});
smallIndex.addEventListener("click", () => {
  title.textContent = "Small";
    createTemplesGrid(temples.filter(temple => temple.area <= 10000));
});