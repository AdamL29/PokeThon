// tackle attack needs to -30 to health when clicked
function tackleAttack(){
    // first, user clicks attack (need to Add Event Listener on page)
    // We attack so enemy health decreases
    enemyHealth = enemyHealth - 30;
    HTag.innerText = `${enemyHealth}`;
    if (enemyHealth > 0){
        console.log(`What happened?`);
        userHealth = userHealth - 40;
        // setTimeout(attackUser, 2000);
    } else if (enemyHealth <= 0){
        HTag.innerText = `FAINTED`;
        console.log(`Fainted`);
    }
    return enemyHealth
};

// user attacked, wait 2 seconds show new health, 

// enemy attacks, wait 2 seconds show new health, 
// before next choice

// thunder attack needs to -120 to health when clicked
function thunderAttack(){
    // first, user clicks attack (need to Add Event Listener on page)
    // We attack so enemy health decreases
    enemyHealth = enemyHealth - 120;
    HTag.innerText = `${enemyHealth}`;
    if (enemyHealth > 0){
        console.log(`What happened?`);
    } else if (enemyHealth <= 0){
        HTag.innerText = `FAINTED`;
        console.log(`Fainted`);
    }
    return enemyHealth
}

// flamethrower attack needs to -80 to health when clicked
function flameAttack(){
    // first, user clicks attack (need to Add Event Listener on page)
    // We attack so enemy health decreases
    enemyHealth = enemyHealth - 80;
    HTag.innerText = `${enemyHealth}`;
    if (enemyHealth > 0){
        console.log(`What happened?`);
    } else if (enemyHealth <= 0){
        HTag.innerText = `FAINTED`;
        console.log(`Fainted`);
    }
    return enemyHealth
}

// quick attack needs to -40 to health when clicked
function quickAttack(){
    // first, user clicks attack (need to Add Event Listener on page)
    // We attack so enemy health decreases
    enemyHealth = enemyHealth - 40;
    HTag.innerText = `${enemyHealth}`;
    if (enemyHealth > 0){
        console.log(`What happened?`);
    } else if (enemyHealth <= 0){
        HTag.innerText = `FAINTED`;
        console.log(`Fainted`);
    }
    return enemyHealth
}

function attackUser(){
    if(enemyHealth > 0){
        userHealth = userHealth - 40;
    }
    return userHealth
}
// setTimeout(attackUser, 2000);


let selectionJson = Cookies.get(`pokemonSelection`);
let selection = JSON.parse(selectionJson);

let enemyPoke = {
    name: `Mew`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`,
    health: `200`,
}

// inserting selected pokemon character into battle
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<img src="${selection.img}" alt="Pokemon"</>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h2>${selection.name} </h2>`);
document.getElementById(`charSelect`).insertAdjacentHTML(`afterbegin`, `<h3>HP: ${selection.health} </h3>`);


// event listeners for attack & rest buttons
document.getElementById(`tackle`).addEventListener(`click`, tackleAttack);
document.getElementById(`thunder`).addEventListener(`click`, thunderAttack);
document.getElementById(`flamethrower`).addEventListener(`click`, flameAttack);
document.getElementById(`quickAttack`).addEventListener(`click`, quickAttack);


let enemyHealth = enemyPoke.health;
let userHealth = selection.health;
// enemyHealth = enemyHealth - 30;

let HTag = document.getElementById(`health`);
// .innerHTML(`<p>${enemyHealth}</p>`);

let userSavedStat = `${userHealth}`;
let enemySavedStat = `${enemyHealth}`;

Cookies.set(`userBattleProgress`, userSavedStat);
Cookies.set(`enemyBattleProgress`, enemySavedStat);