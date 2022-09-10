let subBtn = document.getElementById('halloweenBtn');
//makes a varbial to store the location of the user
let halloweenOrigin = false;
//gets the text from the input
let wordOne = document.getElementById('input1');
let wordTwo = document.getElementById('input2');
let wordThree = document.getElementById('input3');
let wordFour = document.getElementById('input4');
let wordFive = document.getElementById('input5');
let wordSix = document.getElementById('input6');
let wordSeven = document.getElementById('input7');
let wordEight = document.getElementById('input8');
let wordNine = document.getElementById('input9');
//makes new obj for storing values
let bank = new Object();


subBtn.addEventListener('click', function(){
    halloweenOrigin = true;

    bank.inOne = wordOne.value;
    bank.inTwo = wordTwo.value;
    bank.inThree = wordThree.value;
    bank.inFour = wordFour.value;
    bank.inFive = wordFive.value;
    bank.inSix = wordSix.value;
    bank.inSeven = wordSeven.value;
    bank.inEight = wordEight.value;
    bank.inNine = wordNine.value;

    let words = JSON.stringify(bank);
    localStorage.setItem('HalloweenWords', words);

    let origin = JSON.stringify(halloweenOrigin);
    localStorage.setItem('Halloween', origin);

    window.location.href = 'results.html';
});
