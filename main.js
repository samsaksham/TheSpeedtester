window.addEventListener('load',init());

let  time = 10;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'het','cat','manual','Going','joke','statue','coctail',
    'john','America','jaiho','europe','javascipt','hero','echo','revolver','nutrition','river','developer',
    'generate','runaway','Highway','Space','master','chile','Child','Sibling','define','Science','Physics'
];


function init() {
    showWord(words);
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * word.length);

    currentWord.innerHTML = words[randIndex];
}
