// tackle attack needs to -30 to health when clicked
function tackleAttack(){
    // first, user clicks attack (need to Add Event Listener on page)
    let enemyHealth = enemyPoke.health;
    let userHealth = selection.health;
    // We attack so enemy health decreases
    let remainEHealth = enemyHealth - 30;
    // return remainEHealth
    if (remainEHealth > 0){
        console.log(`What happened?`);
    }
    return remainEHealth
};

function attackmove(){
    // if (computer health is less than or equal to 0 then user wins);
    let enemyHealth = remainEHealth;
    if(enemyHealth <= 0){
        document.body.insertAdjacentHTML("afterbegin", `<h1>CONGRATULATIONS</h1>`)
    } else {
    // otherwise computer enemy attacks
        userHealth - 40;
        // user health decreases
    }
    // if user health <=0 then computer wins
    if (userHealth <= 0) {
        document.body.insertAdjacentHTML("afterbegin", "<h1>FAINTED</h1>")    
    }
    // otherwise user clicks attack and REPEAT
}

// thunder attack needs to -120 to health when clicked
function thunderAttack(){
    
}

// flame attack needs to -80 to health when clicked
function flameAttack(){

}

// rest needs to +50 to health when clicked
function rest(){
    
}

let selectionJson = Cookies.get(`pokemonSelection`);
let selection = JSON.parse(selectionJson);


let enemyPoke = {
    name: `Mew`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`,
    health: `200`,
    attackOptions: [`Tackle`, `Psychic`, `Psybeam`, `Rest`]
}

// inserting selected pokemon character into battle
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h2>${selection.name} </h2>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<img src="${selection.img}" alt="Pokemone Eevee"</>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h3>${selection.health} </h3>`);

// event listeners for attack & rest buttons
document.getElementById(`tackle`).addEventListener(`click`, tackleAttack);
document.getElementById(`thunder`).addEventListener(`click`, thunderAttack);
document.getElementById(`flamethrower`).addEventListener(`click`, flameAttack);
document.getElementById(`rest`).addEventListener(`click`, rest);


let enemyHealth = enemyPoke.health;
let userHealth = selection.health;
let remainEHealth = enemyHealth - 30;
document.getElementById(`health`).insertAdjacentHTML(`beforeend`, `<p>${remainEHealth}</p>`);