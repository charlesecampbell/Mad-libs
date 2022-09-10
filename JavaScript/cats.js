let userInputs = { input1:'', input2:'', input3:'', input4:'', input5:'', input6:'', input7:'', input8:'', input9:'', input10:''};
let tag = document.getElementById('result-btn');
//setting a variable to store where the user is coming from
let catOrigin = false;
// getting all the users inputs
let wordOne = document.getElementById('input1');
let wordTwo = document.getElementById('input2');
let wordThree = document.getElementById('input3');
let wordFour = document.getElementById('input4');
let wordFive = document.getElementById('input5');
let wordSix = document.getElementById('input6');
let wordSeven = document.getElementById('input7');
let wordEight = document.getElementById('input8');
let wordNine = document.getElementById('input9');
let wordTen = document.getElementById('input10');
//makes new obj for storing values
let bank = new Object();

//The user has hit Submit. Collects data from the form.
function submitInputs() {
    userInputs.input1 = document.getElementById('input1').value;
    userInputs.input2 = document.getElementById('input2').value;
    userInputs.input3 = document.getElementById('input3').value;
    userInputs.input4 = document.getElementById('input4').value;
    userInputs.input5 = document.getElementById('input5').value;
    userInputs.input6 = document.getElementById('input6').value;
    userInputs.input7 = document.getElementById('input7').value;
    userInputs.input8 = document.getElementById('input8').value;
    userInputs.input9= document.getElementById('input9').value;
    userInputs.input9= document.getElementById('input10').value;
}

//Collects any data from the form.
submitInputs();

tag.addEventListener('click', function(){
    catOrigin = true;

    bank.catOne = wordOne.value;
    bank.catTwo = wordTwo.value;
    bank.catThree = wordThree.value;
    bank.catFour = wordFour.value;
    bank.catFive = wordFive.value;
    bank.catSix = wordSix.value;
    bank.catSeven = wordSeven.value;
    bank.catEight = wordEight.value;
    bank.catNine = wordNine.value;
    bank.catTen = wordTen.value;

    let origin = JSON.stringify(catOrigin);
    localStorage.setItem('Cat', origin);

    let words = JSON.stringify(bank);
    localStorage.setItem('Catword', words);

    window.location.href = 'results.html';
});
