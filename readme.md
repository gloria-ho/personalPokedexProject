# Personal Pokedex

## Goal:

To create a pokemon trainer showcase website that displays information focused around 3 pokemon chosen by the student using AJAX to retrieve said data. This project is focused on client side technologies.

### Github Page:
http://gh-personal-pokedex.herokuapp.com/index.html

## Built With:
* Object Oriented JavaScript
* External APIs
* AJAX
* jQuery
* HTML5
* Sass
* Bootstrap

## Features
* Animated buttons
* Eyecatching, responsive design
* Retrieves data from Pokemon API
* Throws error warning when Pokemon API does not load correctly



### Learning Objectives:

Upon successful completion of this project, the student will demonstrate their understanding of Object Oriented Javascript, APIs, AJAX, grid systems, UI/UX and deployment via Github Pages.

### Instructions:

Welcome to the poke showcase! If you are not familiar with Pokemon please skim thru [this website](https://www.pokemon.com/us/). Imagine yourself as an up and coming pokemon trainer. In order to raise brand awareness you have decided to create a website showcasing your pokemon. However, all the pokemon information you need to access is stored in a server. Use the [Pokemon API](https://pokeapi.co/)o gather information regarding your chosen pokemon using ajax calls. This website will house your roster of at least three pokemon and at least four of their statistics to display to other trainers. Please keep your code understandable and clean because this is a precursor the to next project which has you work in a group.

Be creative in your presentation of the information.

### Challenge:

Try showing extra pieces of information such as:

* move related information
	* priority
	* power
	* accuracy
* and have this information be hidden by default and then have it display on a button click
	* use an animation with the reveal

### Completion Requirements:

A completed assignment should:

* represent a fictitious trainer name
* be deployed to Github pages
* have each pokemon stored within a Pokemon object and have properties for
	* hp - integer
	* attacked - integer
	* defense - integer
	* abilities - array of strings
* have all pokemon stored within a container object named after your trainer name
	* accepts no parameters
	* returns an array of Pokemon objects
	* accepts 1 parameter called name
	* returns a Pokemon object housing information for the pokemon it found
	* have a method named all
	* have a method named get
* have relevant information presented on at least 3 different pokemon
* retrieve pokemon information via the Pokemon API
* retrieve information using javascript ajax calls
* display information regarding the pokemon’s:
	* hp
	* attack
	* defense
	* abilities
* use a grid system