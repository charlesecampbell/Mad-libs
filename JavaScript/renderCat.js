//getting variable tags from cat html
let tagOne = document.getElementById('catOne');
let tagTwo = document.getElementById('catTwo');
let tagThree = document.getElementById('catThree');
let tagFour = document.getElementById('catFour');
let tagFive = document.getElementById('catFive');
let tagSix = document.getElementById('catSix');
let tagSeven = document.getElementById('catSeven');
let tagEight = document.getElementById('catEight');
let tagNine = document.getElementById('catNine');

//getting values from cat html
function makeWords () {

    let wordOne = localStorage.getItem('Catword');
    let wordBank = JSON.parse(wordOne);
    console.log(wordBank);

    tagOne.textContent = wordBank.catOne;
    tagTwo.textContent = wordBank.catTwo;
    tagThree.textContent = wordBank.catThree;
    tagFour.textContent = wordBank.catFour;
    tagFive.textContent = wordBank.catFive;
    tagSix.textContent = wordBank.catSix;
    tagSeven.textContent = wordBank.catSeven;
    tagEight.textContent = wordBank.catEight;
    tagNine.textContent = wordBank.catNine;
}
makeWords();
