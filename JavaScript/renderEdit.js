//getting variable tags from results2 html
let tagOne = document.getElementById('inOne');
let tagTwo = document.getElementById('inTwo');
let tagThree = document.getElementById('inThree');
let tagFour = document.getElementById('inFour');

//getting values from results2 html
let One = document.getElementById('storyOne');
let Two = document.getElementById('storyTwo');
let Three = document.getElementById('storyThree');
let Four = document.getElementById('storyFour');
// let storyOne = document.getElementById('storyOne');

function makeWords () {

    // let wordBank = JSON.parse();
    // console.log(wordBank);
    let wordOne = localStorage.getItem('Build');
    let wordBank = JSON.parse(wordOne);
    console.log(wordBank);
    
    let firstStory = localStorage.getItem('sentenceOne');
    let secondStory = localStorage.getItem('sentenceTwo');
    let thirdStory = localStorage.getItem('sentenceThree');
    let fourthStory = localStorage.getItem('sentenceFour');

    One.textContent = firstStory;
    Two.textContent = secondStory;
    Three.textContent = thirdStory;
    Four.textContent = fourthStory;

    tagOne.textContent = wordBank.inOne;
    tagTwo.textContent = wordBank.inTwo;
    tagThree.textContent = wordBank.inThree;
    tagFour.textContent = wordBank.inFour;
}

makeWords();

