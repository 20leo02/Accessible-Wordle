let secretWord = "";
let utterance = new SpeechSynthesisUtterance();

function handleKeyPress(event) {
    utterance.text = event.key;
    window.speechSynthesis.speak(utterance);
}

function getSecretWord() {
    const jsonData = require('.Accessible-Wordle/root/server/words.json');
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    secretWord = jsonData[randomIndex];
    console.log(secretWord);
}

$(function(){
    getSecretWord();
    document.addEventListener('keypress', handleKeyPress);

    // function checkWord(word) {
    //     if (word === secretWord) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

})