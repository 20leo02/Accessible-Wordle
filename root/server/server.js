$(document).ready(function () {
    // make array list that will hold words. Text file is scanned and
    // put into this array
    var wordList = [];

    createWordList();
    console.log(wordList);
    function createWordList() {
        wordList.add("hello");
        wordList.add("world");
        wordList.remove("hello");
    }

    // document.addEventListener("change", function(){
    //     let fileReader = new FileReader();
    //     fileReader.onload = function(event){
    //         let contents = event.target.result;
    //         wordList = contents.split("\n");
    //         console.log(wordList)
    //     };
    //     fileReader.readAsText(this.files[0]);
    // });
    console.log(wordList)


    // pick a word from the word bank
    // var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    // console.log(word)

    // When the submit button is clicked

    //put onclick here
})