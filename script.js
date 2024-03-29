const intelligences = document.querySelector(".intelligence");
const strengths = document.querySelector(".strength");
const person = document.querySelector(".person");
const speeds = document.querySelector(".speed");
const durabilitys = document.querySelector(".durability");
const energyprojections = document.querySelector(".energyProjection");
const fightingskills = document.querySelector(".fightingSkills");
const select = document.querySelector(".select");
const stats = document.forms[0];
const player = document.querySelector(".player");
const intelligences2 = document.querySelector(".intelligence2");
const strengths2 = document.querySelector(".strength2");
const person2 = document.querySelector(".person2");
const speeds2 = document.querySelector(".speed2");
const durabilitys2 = document.querySelector(".durability2");
const energyprojections2 = document.querySelector(".energyProjection2");
const fightingskills2 = document.querySelector(".fightingSkills2");
const next = document.querySelector(".next");
const hide = document.querySelector(".hide");
const outcome = document.querySelector(".outcome");
const handsize = document.querySelector(".handsize")
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const win = document.querySelector(".win");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");

hide.style.display = "none"

class Card{
    constructor(name,  intelligence, strength, speed, durability, energyProjection, fightingSkills, link){
        this._name = name;
        this._intelligence = intelligence;
        this._strength = strength;
        this._speed = speed;
        this._durability = durability;
        this._energyProjection = energyProjection;
        this._fightingSkills = fightingSkills;
        this._link = link;
    }
    
    get name(){
        return this._name;
    }
    get intelligence(){
        return this._intelligence;
    }
    get strength(){
        return this._strength;
    }
    get speed(){
        return this._speed;
    }
    get durability(){
        return this._durability;
    }
    get energyProjection(){
        return this._energyProjection;
    }
    get fightingSkills(){
        return this._fightingSkills;
    } 
    get link(){
        return this._link;
    }
}

const iceman = new Card("Iceman", 2, 3, 3, 4, 5, 4, "images/iceman.jpg")
const toad = new Card("Toad", 3, 4, 3, 3, 1, 3, "images/toad.jpg")
const magneto = new Card("Magneto", 5, 2, 5, 2, 6, 4, "images/magneto.png")
const deadpool = new Card("Deadpool", 2, 4, 7, 4, 1, 6, "images/deadpool.jpg")
const mystique = new Card("Mystique", 4, 2, 2, 4, 1, 5, "images/mystique.jpg")
const rogue = new Card("Rogue", 3, 5, 5, 6, 1, 3, "images/rogue.jpg")
const juggernaut = new Card("Juggernaut", 2, 7, 2, 7, 1, 4, "images/juggernaut.jpg")
const apocalypse = new Card("Apocalypse", 6, 7, 5, 6, 3, 3, "images/apocalypse.jpg")
const shadowKing = new Card("Shadow King", 3, 1, 7, 7, 5, 1, "images/shadowKing.jpg")
const profX = new Card("Prof. X", 5, 2, 2, 2, 5, 3, "images/profX.jpg")
const wolverine = new Card("wolverine", 2, 4, 2, 4, 1, 7, "images/wolverine.jpg")
const cyclops = new Card("Cyclops", 3, 2, 2, 2, 5, 4, "images/cyclops.jpg")
const phoenix = new Card("Phoenix", 3, 2, 7, 7, 7, 4, "images/phoenix.jpg")
const nightcrawler = new Card("Nightcrawler", 3, 2, 7, 2, 1, 3, "images/nightcrawler.jpg")
const colossus = new Card("Colossus", 2, 6, 2, 6, 1, 4, "images/colossus.jpg")
const storm = new Card("Storm", 2, 2, 3, 2, 5, 4, "images/storm.jpg")
const jubilee = new Card("Jubilee", 2, 2, 2, 2, 1, 3, "images/jubilee.jpg")
const emmaFrost = new Card("Emma Frost", 4, 4, 2, 5, 5, 3, "images/emmaFrost.jpg")
const angel = new Card("Archangel", 3, 2, 3, 2, 1, 4, "images/angel.jpg")
const beast = new Card("Beast", 5, 4, 3, 4, 1, 4, "images/beast.png")
const havok = new Card("Havok", 3, 2, 2, 3, 5, 3, "images/havok.jpg")
const quicksilver = new Card("Quicksilver", 3, 4, 5, 3, 1, 4, "images/quicksilver.jpg")
const banshee = new Card("Banshee", 3, 2, 4, 3, 5, 4, "images/banshee.jpg")
const sunfire = new Card("Sunfire", 2, 2, 4, 5, 4, 4, "images/sunfire.jpg")
const shadowcat = new Card("Shadowcat", 4, 2, 2, 3, 1, 5, "images/shadowcat.jpg")
const psylocke = new Card("Psylocke", 2, 3, 2, 3, 5, 6, "images/psylocke.jpg")
const dazzler = new Card("Dazzler", 3, 2, 3, 3, 4, 3, "images/dazzler.jpg")
const gambit = new Card("Gambit", 2, 2, 2, 2, 2, 4, "images/gambit.jpg")
const bishop = new Card("Bishop", 2, 3, 7, 3, 4, 4, "images/bishop.jpg")
const sabretooth = new Card("Sabretooth", 2, 3, 2, 4, 1, 6, "images/sabretooth.jpg")


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

let characters = [iceman, toad, magneto, deadpool, mystique, rogue, juggernaut, apocalypse, shadowKing, profX, wolverine, cyclops, phoenix, nightcrawler, colossus, storm, jubilee, emmaFrost, angel, beast, havok, quicksilver, banshee, sunfire, shadowcat, psylocke, dazzler, gambit, bishop, sabretooth]
let drawPile = []

shuffle(characters)

let playerOneHand = characters.slice(0,15)
let playerTwoHand = characters.slice(15,31)
let currentPlayer = playerOneHand
let currentPlayerName ="Player 1"
let opponentPlayer = playerTwoHand
image1.src = playerOneHand[0].link;
image2.src = playerTwoHand[0].link;

intelligences.textContent = playerOneHand[0].intelligence;
strengths.textContent = playerOneHand[0].strength;
person.textContent = playerOneHand[0].name;
speeds.textContent = playerOneHand[0].speed;
durabilitys.textContent = playerOneHand[0].durability;
energyprojections.textContent = playerOneHand[0].energyProjection;
fightingskills.textContent = playerOneHand[0].fightingSkills;
player.textContent = currentPlayerName;

intelligences2.textContent = `Intelligence: ${playerTwoHand[0].intelligence}`;
strengths2.textContent = `Strength: ${playerTwoHand[0].strength}`;
person2.textContent = playerTwoHand[0].name;
speeds2.textContent = `Speed: ${playerTwoHand[0].speed}`;
durabilitys2.textContent = `Durability: ${playerTwoHand[0].durability}`;
energyprojections2.textContent = `Energy Projection: ${playerTwoHand[0].energyProjection}`;
fightingskills2.textContent = `Fighting Skills: ${playerTwoHand[0].fightingSkills}`;

let stat1;
let stat2;

select.addEventListener("click", () => {
    for (i=0; i<stats.length ;i++){        
        if (stats[i].checked){
           if (i == 0 ){
               stat1 = playerOneHand[0].intelligence;
               stat2 = playerTwoHand[0].intelligence;
           }
           else if (i == 1){
               stat1 = playerOneHand[0].strength;
               stat2 = playerTwoHand[0].strength;
           }
           else if (i == 2){
               stat1 = playerOneHand[0].speed;
               stat2 = playerTwoHand[0].speed;
           }
           else if (i == 3){
               stat1 = playerOneHand[0].durability;
               stat2 = playerTwoHand[0].durability;
           }
           else if (i == 4){
               stat1 = playerOneHand[0].energyProjection;
               stat2 = playerTwoHand[0].energyProjection;
           }
           else if (i == 5){
               stat1 = playerOneHand[0].fightingSkills;
               stat2 = playerTwoHand[0].fightingSkills;
           }
        }
    }
    hide.style.display = "block"
      
})

next.addEventListener("click", () => {
    check()
    switch1()
}) 

function compare (playerOneStat, playerTwoStat) {
    
    let shuffleTwo = playerTwoHand[0]
    let shuffleOne = playerOneHand[0]
    if (playerOneStat > playerTwoStat && playerOneHand.length+drawPile.length == 29){
        outcome.textContent = "Player One wins"
    }
        
    else if (playerOneStat > playerTwoStat) {
        outcome.textContent = `player one uses ${playerOneHand[0].name} with a power of ${playerOneStat} to beat player two's ${playerTwoHand[0].name} with a power of ${playerTwoStat}`
        playerOneHand.push(shuffleOne)        
        playerOneHand.push(shuffleTwo)
        playerOneHand = playerOneHand.concat(drawPile)
        drawPile = []
        currentPlayer = playerOneHand
        currentPlayerName = "Player 1"
        opponentPlayer = playerTwoHand
    }
    
    else if  (playerTwoStat > playerOneStat) {
        outcome.textContent = `player two uses ${playerTwoHand[0].name} with a power of ${playerTwoStat} to beat player one's ${playerOneHand[0].name} with a power of ${playerOneStat}`
        playerTwoHand.push(shuffleOne)
        playerTwoHand.push(shuffleTwo)
        playerTwoHand = playerTwoHand.concat(drawPile)
        drawPile = []
        currentPlayer = playerTwoHand
        currentPlayerName = "Player 2"
        opponentPlayer = playerOneHand
        
    }
    else if (playerOneStat == playerTwoStat){
        outcome.textContent = `Draw. ${playerTwoHand[0].name} has the same value as ${playerOneHand[0].name}`
        drawPile.push(shuffleOne)
        drawPile.push(shuffleTwo)
        
    }
    else {
        alert("broken")
    }
    playerOneHand.shift()
    playerTwoHand.shift()

    intelligences.textContent = currentPlayer[0].intelligence;
    strengths.textContent = currentPlayer[0].strength;
    person.textContent = currentPlayer[0].name;
    speeds.textContent = currentPlayer[0].speed;
    durabilitys.textContent = currentPlayer[0].durability;
    energyprojections.textContent = currentPlayer[0].energyProjection;
    fightingskills.textContent = currentPlayer[0].fightingSkills;
    player.textContent = currentPlayerName;
    image1.src = currentPlayer[0].link;
    handsize.textContent = currentPlayer.length;

    intelligences2.textContent = `Intelligence: ${opponentPlayer[0].intelligence}`;
    strengths2.textContent = `Strength: ${opponentPlayer[0].strength}`;
    person2.textContent = opponentPlayer[0].name;
    speeds2.textContent = `Speed: ${opponentPlayer[0].speed}`;
    durabilitys2.textContent = `Durability: ${opponentPlayer[0].durability}`;
    energyprojections2.textContent = `Energy Projection: ${opponentPlayer[0].energyProjection}`;
    fightingskills2.textContent = `Fighting Skills: ${opponentPlayer[0].fightingSkills}`;
    hide.style.display = "none";
    image2.src = opponentPlayer[0].link;

    
}

function check () {
    console.log(playerOneHand.length)
    if (playerOneHand.length == 0 || playerTwoHand.length == 30){
        outcome.textContent = "Player Two wins"
    }
    else if (playerTwoHand.length == 0 || playerOneHand.length == 30){
        outcome.textContent = "Player One wins"
    }
    else {
        compare(stat1, stat2)
    }
}

function switch1 () {
    if (currentPlayer == playerOneHand){
        item2.style.order = 0;
        item3.style.order = 0;
    }
    else if (currentPlayer == playerTwoHand){
        item2.style.order = 2;
        item3.style.order = 1;
    }
}