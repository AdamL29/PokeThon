// attack buttons need to subtract health when clicked
function tackleAttack(){
// first, user clicks attack (need to Add Event Listener on page)
// computer health decreased

// if computer health <=0 then user wins
// otherwise computer enemy attacks
// user health decreases
// if user health <=0 then computer wins
// otherwise user clicks attack and REPEAT
}

// make functions for each attack? 
function thunderAttack(){
    
}

function flameAttack(){

}

let selectionJson = Cookies.get(`pokemonSelection`);
let selection = JSON.parse(selectionJson);


let enemyPoke = {
    name: `Mew`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`,
    health: `200`,
    attackOptions: [`Tackle`, `Psychic`, `Psybeam`, `Rest`]
}

document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h2>${selection.name} </h2>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<img src="${selection.img}" alt="Pokemone Eevee"</>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h3>${selection.health} </h3>`);

// need to add event listener to the Attack buttons: