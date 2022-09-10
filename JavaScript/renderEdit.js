//getting values from results2 html
let One = document.getElementById('storyOne');

function makeWords () {

    let wordOne = localStorage.getItem('Build');
    let wordBank = JSON.parse(wordOne);
    console.log(wordBank);

    let firstStory = localStorage.getItem('sentenceOne');
    let secondStory = localStorage.getItem('sentenceTwo');
    let thirdStory = localStorage.getItem('sentenceThree');
    let fourthStory = localStorage.getItem('sentenceFour');

    One.textContent = firstStory + ' ' + wordBank.inOne + ' ' + secondStory + ' ' + wordBank.inTwo + ' ' + thirdStory + ' ' + wordBank.inThree + ' ' + fourthStory + ' ' + wordBank.inFour;
}
makeWords();
