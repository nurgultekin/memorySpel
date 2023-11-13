import { cards } from "./cards.js";
const gameEl = document.getElementById("game");
let lastCard;
let lastCardEl;

// 1. En array med alla kort-objekt är importerade och ligger i cards. Med forEach Lägg till en property
//    showing: false till varje kort för att hålla reda på om kortet visas eller inte.

cards.forEach(card => {
    card.showing = false;
  });



// 2. Skapa en funktion createCard. Som tar ett card-objekt och ett index som input och skapar
//    ett img element och lägger till det på sidan i gameEl. Gör så här:
// - skapa ett ett img-element med document.createElement("img")
// - sätt attribut med setAttribute på img-elementet ange tex:
//    imgElement.setAttrubut("src", "images/backside.png") för baksidan på kortet.
//    om card.showing är true använd `images/${card.file}` annars använd "images/backside.png"
// - lägg till width och height till imgElementet
//    width ska vara 100 och height ska vara 145
// - lägg till id = index på card elementet så att du kommer åt det senare
// - använd appendChild för att lägga till kortet till gameEl

function createCard(index, image) {
    const imgElement = document.createElement("img");
     imgElement.setAttribute("src", cardshowing ? `images/${card.file}`: "images/backside.png"); // The ? is the ternary operator. It's a shorthand way of writing an if-else statement in a single line.
     //images/${card.file} is the value if the condition (card.showing) is true. If card.showing is true, it sets the image source to the card's image.
     //":" separates the true and false conditions. If false, then it will show "images/backside.png."
     imgElement.setAttribute("width", 100);
     imgElement.setAttribute("height", 140);
     imgElement.setAttribute("id", index);
     


}
  

// 3. Använd for-loop eller forEach för att loopa igenom alla cards och anropa funktionen
//    createCard med varje kort och varje index (i). Nu ska alla kort synas på sidan.
//    Om du använder forEach måste du lägga till i som andra paremeter i arrow-function.
//    Då räknar i:et från 0 och uppåt
// Loop through all cards and call the createCard function
cards.forEach((card, index) => {
    createCard(card, index);
  });



// 4. Lägg till addEventListner på korten i funktionen createCard. När man klickar ska
//    kortet ändras från showing: false till showing:true


// 5 Använd en global variabel lastCard och lastCardEl för att hålla reda på vilket kort man klickade på senast.
//   kolla när man klickar på ett kort om det har samma värde som lastCard (card.num)

// 6 (Ganska svårt) Få ihop hela spelet med det du skrivit ovan.
