
function choiceHandler(event){
    let parent = event.target.parentElement;
    if(parent.id == "pokemon1"){
        let pokemonJson = JSON.stringify(pokemon1);
        Cookies.set(`pokemonSelection`, pokemonJson);
        location.href = `battle.html`;
    } else if(parent.id == "pokemon2"){
        let pokemonJson = JSON.stringify(pokemon2);
        Cookies.set(`pokemonSelection`, pokemonJson);
        location.href = `battle.html`;
    } else if(parent.id == "pokemon3"){
        let pokemonJson = JSON.stringify(pokemon3);
        Cookies.set (`pokemonSelection`, pokemonJson);
        location.href = `battle.html`
    }
}


let pokemon1 = {
    name: `EEVEE`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png`,
    health: 200,
    attackOptions: [`Tackle`, `Thunder`, `Flamethrower`, `Quick Attack`]
}

let pokemon2 = {
    name: `PIKACHU`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png`,
    health: 200,
    attackOptions: [`Tackle`, `Thunder`, `Flamethrower`, `Quick Attack`]
}

let pokemon3 = {
    name: `CYNDAQUIL`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png`,
    health: 200,
    attackOptions: [`Tackle`, `Thunder`, `Flamethrower`, `Quick Attack`]
}

let selection1 = document.getElementById(`pokemon1`);
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);

let selection2 = document.getElementById(`pokemon2`);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);

let selection3 = document.getElementById(`pokemon3`);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);