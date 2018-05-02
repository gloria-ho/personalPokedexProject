// wait until page has completely loaded to execute logic
$(document).ready(function() {

	// define trainer class to store pokemon object
	class Trainer {
		constructor(name, lvl, exp) {
			this.name = name;
			this.lvl = lvl;
			this.exp = exp;
			this.myPokemon = [];
		}	
		// method to return an array of trainer's pokemon
		all() {
			return this.myPokemon;
		}
		// method to search for and return a pokemon object with data
		get(name) {
			for (let i = 0; i < this.myPokemon.length; i++){
	 			let pokemonName = this.myPokemon[i].name;
	 			if(pokemonName == name) {
	 				return this.myPokemon[i];
 				}
			}
			return false;
		}
	}

	// define the pokemon class
	class Pokemon {
		constructor(name, id, img, hp, attack, defense, abilities) {
			this.name = name;
			this.id = id;
			this.img = img;
			this.hp = hp;
			this.attack = attack;
			this.defense = defense;
			this.abilities = abilities;
		}
	}

	// function to get data and push it to trainer object
	function loadInfo(name, id) {
		let apiOriginal = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
		let apiGitHub = 'https://raw.githubusercontent.com/silverdragonia/personalPokedexProject/master/api/' + id + '.json';
		// get api data
		axios.get(apiOriginal)
		// once loaded, run function and push result
		.then(response => {
			let abilitiesApi = response.data.abilities;
			let abilitiesArr = [];
			for (let i = 0; i < abilitiesApi.length; i++) {
				abilitiesArr.push(abilitiesApi[i].ability.name);
			}
			let info = {
				'name': response.data.name,
				'id': response.data.id,
				'img': response.data.sprites.front_shiny,
				'hp': response.data.stats[5].base_stat,
				'attack': response.data.stats[4].base_stat,
				'defense': response.data.stats[3].base_stat,
				'abilities': abilitiesArr
			}
			silverdragonia.myPokemon.push(info);
		})
		// catch if data doesn't load, show warning, deactivate button
		.catch(error => {
			$('#goBtnImg').attr('src', 'img/pokeballError.png');
			$('#goBtn').attr('disabled', 'disabled');
			$('#goBtnText').text('Oh no, error loading data! Please try again later.');
		});
	}

	// function to call bio data from different source to display
 	function loadBio(name) {
	 	let apiUrl = 'https://raw.githubusercontent.com/silverdragonia/personalPokedexProject/master/api/bio.json';
	 	axios.get(apiUrl)
	 	.then(response => {
	 		// look for pokemon name and display data
	 		for (let i = 0; i < response.data.length; i++) {
	 			if (response.data[i].name == name) {
	 				let evolvesInto = response.data[i].evolves_into;
		 			let	bioText = response.data[i].bio;
		 			evolution.text(capitalize(evolvesInto));
		 			bio.text(bioText);
	 			}
	 		}
	 	})
	 	// catch if data doesn't load, show warning, deactivate button
	 	.catch(error => {
			$('#' + name + 'Img').attr('src','img/error.png');
			$('#' + name + 'Btn').attr('disabled', 'disabled');
			$('#' + name + 'Text').text('Error, please try again later!');
			$('#info').hide();
		});
	 };

	// define new trainer and pokemon objects
	let silverdragonia = new Trainer('silverdragonia', 10, 9000);
	let bulbasaur = new Pokemon('bulbasaur', 1);
	let charmander = new Pokemon('charmander', 4);
	let squirtle = new Pokemon('squirtle', 7);
	
	// call function to get pokemon data and push to trainer object
	loadInfo(bulbasaur,1);
	loadInfo(charmander,4);
	loadInfo(squirtle,7);

	let goBtn = $('#goBtn');
	let intro = $('#intro');
	let trainerName = $('#trainerName');
	let trainerLvl = $('#trainerLvl');
	let trainerExp = $('#trainerExp');
	let trainerImg = $('#trainerImg');
	let bulbasaurBtn = $('#bulbasaurBtn');
	let charmanderBtn = $('#charmanderBtn');
	let squirtleBtn = $('#squirtleBtn');
	let name = $('#pokemonName');
	let bio = $('#bio');
	let hp = $('#hp');
	let attack = $('#attack');
	let defense = $('#defense');
	let abilities = $('#abilities');
	let evolution = $('#evolution');
	let img = $('#img');
	let statImg = $('#statImg');
	let closeBtn = $('#closeBtn');
	let pokemonSelect = $('#pokemonSelect');
	let info = $('.info');
	let trainerRow = $('#trainerRow');
	
	// function to return capitalized results for diplay
	function capitalize(str) {
    	return str.charAt(0).toUpperCase() + str.slice(1);
	}
	
	// function to updates html display with pokemon info
	function updateHtml(pokemon){
		let myPokemon = silverdragonia.get(pokemon);
		name.text(capitalize(myPokemon.name));
		statImg.attr('src', 'img/' + pokemon + 'Bg.jpg');
		img.attr('src', myPokemon.img);
		hp.text(myPokemon.hp);
		attack.text(myPokemon.attack);
		defense.text(myPokemon.defense);
		abilities.text(myPokemon.abilities);
		info.show(1500).css('display', 'flex');
	}

	// function to call both get functions using one name
	// if not ready, warn user to try again
	function displayData(pokemon) {
		let targetIcon = '#' + pokemon + 'Img';
		let targetText = '#' + pokemon + 'Text';
		$(targetIcon).attr('src', 'img/loadingWheel.gif').css('maxWidth', '76px');
		$(targetText).text('Not ready! Please try again...');
		updateHtml(pokemon);
		loadBio(pokemon);
		$(targetIcon).attr('src', 'img/' + pokemon + '.png');
		$(targetText).text(capitalize(pokemon));
	};

	// listen for go button click at intro
	goBtn.click(function() {
		// load trainer info
		trainerName.text(capitalize(silverdragonia.name));
		trainerLvl.text(silverdragonia.lvl);
		trainerExp.text(silverdragonia.exp);
		trainerImg.attr('src', 'img/trainer.gif');
		// hide intro and display pokedex
		trainerRow.show(3000);
		intro.fadeOut(500);
		pokemonSelect.fadeIn(3500).css('display', 'flex');
	});
	
	// listen for pokemon button clicks and run functions
	bulbasaurBtn.click(function() {
		displayData('bulbasaur');
	});
	charmanderBtn.click(function() {
		displayData('charmander');
	});
	squirtleBtn.click(function() {
		displayData('squirtle');
	});

	// listen for close button click and hide display
	closeBtn.click(function() {
		info.hide(1000);
	});

});