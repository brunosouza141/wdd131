const hamburger = document.querySelector("#hamburger");
const list = document.querySelector(".nav-list");
const gamesh1 = document.querySelector("h1");
const adventureGames = [
  {
    id: 1023,
    name: "Tomb Raider (2013)",
    year_launched: 2013,
    community_review: 8.7,
    description: "An action-adventure game following Lara Croft’s origin story as she survives on a mysterious island filled with danger and ancient secrets.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/203160/Tomb_Raider/"
  },
  {
    id: 2489,
    name: "Uncharted 4: A Thief's End",
    year_launched: 2016,
    community_review: 9.3,
    description: "Join Nathan Drake on his final adventure, filled with breathtaking landscapes, lost treasures, and a story of brotherhood and redemption.",
    platforms: ["ps4"],
    purchase_link: "https://store.playstation.com/en-us/product/UP9000-CUSA00341_00-UNCHARTED4000001"
  },
  {
    id: 3791,
    name: "The Witcher 3: Wild Hunt",
    year_launched: 2015,
    community_review: 9.8,
    description: "Play as Geralt of Rivia, a monster hunter navigating a vast open world of war, magic, and morally complex choices.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    id: 4812,
    name: "Life is Strange",
    year_launched: 2015,
    community_review: 8.9,
    description: "A story-driven adventure where you play as Max, a teenager who discovers she can rewind time and must face emotional moral choices.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/"
  },
  {
    id: 5573,
    name: "Firewatch",
    year_launched: 2016,
    community_review: 8.4,
    description: "Explore the Wyoming wilderness as a fire lookout while uncovering a mysterious story of trust, isolation, and human connection.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/383870/Firewatch/"
  },
  {
    id: 6027,
    name: "Horizon Zero Dawn",
    year_launched: 2017,
    community_review: 9.1,
    description: "In a post-apocalyptic world ruled by machines, Aloy embarks on a quest to uncover her origins and restore balance to the land.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/"
  },
  {
    id: 7439,
    name: "Red Dead Redemption 2",
    year_launched: 2018,
    community_review: 9.7,
    description: "Experience the decline of the Wild West through Arthur Morgan’s eyes in a vast and emotional open-world adventure.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
  },
  {
    id: 8192,
    name: "Assassin's Creed Odyssey",
    year_launched: 2018,
    community_review: 8.5,
    description: "Set in ancient Greece, embark on an epic journey as a mercenary uncovering the truth about your family and destiny.",
    platforms: ["xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/"
  },
  {
    id: 9301,
    name: "Days Gone",
    year_launched: 2019,
    community_review: 8.6,
    description: "Ride through a post-apocalyptic world filled with hordes of zombies, exploring the bonds of survival and loyalty.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/1259420/Days_Gone/"
  },
  {
    id: 1045,
    name: "Outer Wilds",
    year_launched: 2019,
    community_review: 9.4,
    description: "Explore a handcrafted solar system trapped in a time loop, unraveling mysteries hidden within ancient alien ruins.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/753640/Outer_Wilds/"
  },
  {
    id: 1157,
    name: "God of War (2018)",
    year_launched: 2018,
    community_review: 9.6,
    description: "Join Kratos and his son Atreus on a mythological journey through Norse realms filled with gods, monsters, and emotion.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/1593500/God_of_War/"
  },
  {
    id: 1288,
    name: "The Last of Us Part I",
    year_launched: 2022,
    community_review: 9.5,
    description: "A gripping survival story of Joel and Ellie as they journey across a post-pandemic America filled with danger and loss.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/"
  },
  {
    id: 1399,
    name: "Subnautica",
    year_launched: 2018,
    community_review: 8.8,
    description: "Dive into an alien ocean world full of wonders, danger, and discovery as you fight to survive after crash-landing.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/264710/Subnautica/"
  },
  {
    id: 1444,
    name: "A Plague Tale: Innocence",
    year_launched: 2019,
    community_review: 8.7,
    description: "Follow Amicia and her brother Hugo through a grim medieval France plagued by disease, soldiers, and swarms of rats.",
    platforms: ["ps4", "xbox", "pc"],
    purchase_link: "https://store.steampowered.com/app/752590/A_Plague_Tale_Innocence/"
  },
  {
    id: 1532,
    name: "Detroit: Become Human",
    year_launched: 2018,
    community_review: 9.0,
    description: "Shape the destiny of three androids in a future where machines begin to awaken to consciousness and moral freedom.",
    platforms: ["ps4", "pc"],
    purchase_link: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/"
  },
];



hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("open");
    list.classList.toggle("open");
    gamesh1.style.alignSelf = "flex-start";
    gamesh1.style.paddingTop = "10px";  
});

let imagesContainer = document.getElementById("images-container");
let title = document.getElementById("title");

function createGamesGrid(gamesList){
  imagesContainer.innerHTML = "";
  gamesList.forEach(function(game){
    let imageCard = document.createElement("div");
    imageCard.setAttribute("id", "game-div")
    imageCard.setAttribute("class", "image-card");
    imagesContainer.appendChild(imageCard);
    let h2 = document.createElement("h2");
    h2.textContent = game.name;
    h2.style.display = "none";
    imageCard.appendChild(h2);
    let image = document.createElement("img");
    image.setAttribute("src", "images/" + game.id + ".webp") 
    image.setAttribute("alt", game.name)
    image.setAttribute("loading", "lazy")
    imageCard.appendChild(image);
    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "hide");
    let gameDescription = document.createElement("p");
    gameDescription.textContent = game.description;
    let divDetails = document.createElement("div");
    let reviewStrong = document.createElement("strong");
    reviewStrong.textContent = "Review:";
    let reviewI = document.createElement("i");
    reviewI.textContent = game.community_review;
    let releasedStrong = document.createElement("strong");
    releasedStrong.textContent = "Released:";
    let releasedI = document.createElement("i");
    releasedI.textContent = game.year_launched;
    let platformsStrong = document.createElement("strong");
    platformsStrong.textContent = "Platforms:";
    let platformsI = document.createElement("i");
    let buyLink = document.createElement("a");
    buyLink.setAttribute("href", game.purchase_link)
    buyLink.setAttribute("target", "_blank")
    buyLink.textContent = "Click here to buy";
    platformsI.textContent = game.platforms;
    divDetails.appendChild(reviewStrong);
    divDetails.appendChild(reviewI);
    divDetails.appendChild(releasedStrong);
    divDetails.appendChild(releasedI);
    divDetails.appendChild(platformsStrong);
    divDetails.appendChild(platformsI);
    divDetails.appendChild(buyLink);
    textDiv.appendChild(gameDescription);
    textDiv.appendChild(divDetails);
    imageCard.appendChild(textDiv);

    imageCard.addEventListener("click", () => {
      textDiv.classList.toggle("show");
      divDetails.classList.toggle("show");
      h2.classList.toggle("show-block");
      textDiv.classList.toggle("hide");
    });
  });
};

const allIndex = document.getElementById("all");
const ps4Index = document.getElementById("ps4");
const xboxIndex = document.getElementById("xbox");
const pcIndex = document.getElementById("pc");

createGamesGrid(adventureGames);
allIndex.addEventListener("click", () => {
    title.textContent = "All";
    createGamesGrid(adventureGames);
});

ps4Index.addEventListener("click", () => {
    title.textContent = "PS4";
    createGamesGrid(adventureGames.filter(game => game.platforms.includes("ps4")));
});
xboxIndex.addEventListener("click", () => {
  title.textContent = "Xbox";
    createGamesGrid(adventureGames.filter(game => game.platforms.includes("xbox")));
});
pcIndex.addEventListener("click", () => {
  title.textContent = "PC";
    createGamesGrid(adventureGames.filter(game => game.platforms.includes("pc")));
});

// const gameDiv = document.getElementById("game-div");
// const hiddenItems = document.getElementsByClassName("hide")
// Array.from(hiddenItems).forEach(item => {
//   item.addEventListener("click", () => {
//     console.log(item);
//     item.classList.toggle("show");
//   });
// });

