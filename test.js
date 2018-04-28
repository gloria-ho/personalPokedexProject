// $.ajax({url: "https://pokeapi.co/api/v2/pokemon/1/", success: function(result){
//             console.log(result);
//             console.log(result.stats[5].base_stat);
// }});


class Pokemon {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.img = ''; // someURL
		this.hp = 1;
		this.attack = 2;
		this.defense = 3;
		this.abilities = ['a','b','c'];

		// let loadPromise = axios.get('https://pokeapi.co/api/v2/pokemon/' + this.id + '/')
		// .then(function(result) {

		// 	console.log(result.data.stats[5].base_stat);

		// });


		// .then(function(result) {
		// 	console.log(result);
		// 	console.log(this);
			// this.loadData(result);
		// });

	// 	$.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + this.id + '/', success: function(data) {
	// 		this.hp = data.stats[5].base_stat;
	// 		this.attack = data.stats[4].base_stat;
	// 		this.defense = data.stats[3].base_stat;
	// 		console.log(this.hp);
	// 		for (let i = 0; i < data.abilities.length; i++) {
	// 			this.abilities.push(data.abilities[i].ability.name)
	// 		}
	// 	}});
	// }

	loadData(data) {
		// console.log(data)
		// console.log(this);
		// console.log();
		// this.hp = data.data.stats[5].base_stat;
		// this.attack = data.stats[4].base_stat;
		// this.defense = data.stats[3].base_stat;

		// for (let i = 0; i < data.abilities.length; i++) {
		// 	this.abilities.push(data.abilities[i].ability.name);
		// }

		// console.log('this should print too ' + this.hp);
		// console.log(this.hp, this.attack);
	}


	loadAbilities(abilitiesArray) {

	}

	getName(){
		return this.name;
	}
	getImg() {
		return this.imgUrl;
	}
	getHp() {
		return this.hp;
	}
	getAttack() {
		return this.attack;
	}
	getDefense() {
		return this.defense;
	}
	getAbilities() {
		// arr of abilities
		return this.abilities;
	}

};


let bulbasaur = new Pokemon('bulbasaur', 1);
let charmander = new Pokemon('charmander, 4');
let squirtle = new Pokemon('squirtle', 7);



let name = document.querySelector('#pokemonName');
let hp = document.querySelector('#hp');
let attack = document.querySelector('#attack');
let defense = document.querySelector('#defense');
let abilities = document.querySelector('#abilities');
let img = document.querySelector('#img');

let previousButton = document.querySelector('#previousButton');
let nextButton =document.querySelector('#nextButton');


previousButton.addEventListener('click', function() {
	//load previous pokemon info:
	name.innerText = pokemon.getName();
	img.src = pokemon.getImg();
	hp.innerText = pokemon.getHp();
	attack.innerText = pokemon.getAttack();
	defense.innerText = pokemon.getDefense();
	abilities.innerText = pokemon.getAbilities();
})



nextButton.addEventListener('click', function() {
	//load next pokemon
})


/*
 *
 *
 *
 *
 */


// Objects

class Pokemon {
	constructor(stats){
		this.stats = stats;
	}

}
class Trainer {
	constructor(){
		this.myPoke = [];
	}
	all (){
		return this.myPoke;
}
 	get (name){
 		for(let i=0; i < this.myPoke.length; i++){
 			let pokeName = this.myPoke[i].stats.name;
 			if(pokeName === name) {
 				return this.myPoke[i];
 			} else {
 				return "Hey Girl!  I like the way you search, but...that's not a Pokemon!";
 			}
 		}
	} 
 }

let pokeBallZee = new Trainer();

// Wait until Ajax calls are done, when this is TRUE gather data from trainer pokeBallZee. 
// Create a new div to hold the pokemon information and append this information to the new div.
// Finally, append the new div and all it's contents to the container div. 

$.when(jiggly(),wiggly(),iggly()).then(function(jiggy,wiggly,iggly){

			let pokes = pokeBallZee.myPoke;
			for(let i=0; i < pokes.length;i++){
				let name = pokes[i].stats.name;
				let pic = pokes[i].stats.pic;
				let hp = pokes[i].stats.hp;
				let attack = pokes[i].stats.attack;
				let defense = pokes[i].stats.defense;
				let newDiv = $('<div class="hidden slide" id="mypokes"></div>');

		 			$(newDiv).append(`<p class="pokename">${name}</p>`);
		 			$(newDiv).append(`<img src ="${pic}" class="picture">`);
		 			$(newDiv).append(`<p class="hp">HP: ${hp}</p>`);
		 			$(newDiv).append(`<p class="attack">ATTACK: ${attack}</p>`);
		 			$(newDiv).append(`<p class="defense">DEFENSE: ${defense}</p>`);
					$(newDiv).insertAfter('#glass1');
			}
});



// Jigglypuff
function jiggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/39/', 
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
		}
			let puffDaddy = new Pokemon(stats);
			pokeBallZee.myPoke.push(puffDaddy);
		}
	});
}
//WigglyTuff
function wiggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/40/',
	success: function(data){
		let stats = {
				"name" : data.name,
				"pic": data.sprites.front_shiny,
				"hp": data.stats[5].base_stat,
				"attack": data.stats[4].base_stat,
				"defense": data.stats[3].base_stat,			
		}
			let wiggles = new Pokemon(stats);
			pokeBallZee.myPoke.push(wiggles);
		}
	});
}
// IgglyTuff
function iggly() {
	return $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/174/',
	success: function(data){
		let stats = {
			"name" : data.name,
			"pic": data.sprites.front_shiny,
			"hp": data.stats[5].base_stat,
			"attack": data.stats[4].base_stat,
			"defense": data.stats[3].base_stat,
			
		}
			let igglesTuff = new Pokemon(stats);
			pokeBallZee.myPoke.push(igglesTuff);
		}
	});
}

		// iggly();
		// wiggly();
		// jiggly();
		// ajaxCalls();

//EVENTS

// Start counting divs with class of slide at position 1, and change display on click.	
let z = 1;
$('.slideGlass').click(function(){

	let slideDiv = document.getElementsByClassName('slide');
	let noheader = document.getElementsByTagName('h1');
	let nowelcome = document.getElementsByClassName('.welcome');

	$(noheader).remove();
	$(nowelcome).remove('.welcome');
	

	if (z === slideDiv.length){

		z = 1;
		slideDiv[z].style.display = "block"; 
		slideDiv[slideDiv.length-1].style.display = "none";
	} else {
		z++
		slideDiv[z].style.display = "block";

		if(z === 1){

		slideDiv[z].style.display ="block";
		} else {
			slideDiv[z-1].style.display ="none";
			// slideDiv[z+1].style.display="none"; //Don't need this. 
		}
	}
		// slideDiv[z+1].style.display = "none";
})




