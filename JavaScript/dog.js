let userInputs = { input1:'', input2:'', input3:'', input4:'', input5:'', input6:'', input7:'', input8:'', input9:'', input10:''};
let dogBtn = document.getElementById('dog-button');
let origin = false;
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
let wordTen = document.getElementById('input10');
let wordEleven = document.getElementById('input11');
let wordTwelve = document.getElementById('input12');
let wordThirteen = document.getElementById('input13');
//makes new obj for storing values
let bank = new Object();

dogBtn.addEventListener('click', function(){
    origin = true;

    bank.inOne = wordOne.value;
    bank.inTwo = wordTwo.value;
    bank.inThree = wordThree.value;
    bank.inFour = wordFour.value;
    bank.inFive = wordFive.value;
    bank.inSix = wordSix.value;
    bank.inSeven = wordSeven.value;
    bank.inEight = wordEight.value;
    bank.inNine = wordNine.value;
    bank.inTen = wordTen.value;
    bank.inEleven = wordEleven.value;
    bank.inTwelve = wordTwelve.value;
    bank.inThirteen = wordThirteen.value;

    let words = JSON.stringify(bank);
    let boolean = JSON.stringify(origin);
    let dogOrigin = localStorage.setItem('Dog', boolean);
    localStorage.setItem('Dogword', words);
    console.log(dogOrigin);

    window.location.href = 'results.html';
});

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
}

//Collects any data from the form.
submitInputs();
