let typeOne = document.getElementById('inOne');
let typeTwo = document.getElementById('inTwo');
let typeThree = document.getElementById('inThree');
let typeFour = document.getElementById('inFour');
let sub = document.getElementById('usr-sub');
let dropOne = document.getElementById('dropOne');
let dropTwo = document.getElementById('dropTwo');
let dropThree = document.getElementById('dropThree');
let dropFour = document.getElementById('dropFour');
let choices = new Object();


sub.addEventListener('click', function () {
    let checkOne = false;
    let checkTwo = false;

    localStorage.setItem('sentenceOne', typeOne.value);
    localStorage.setItem('sentenceTwo', typeTwo.value);
    localStorage.setItem('sentenceThree', typeThree.value);
    localStorage.setItem('sentenceFour', typeFour.value);

    choices.choiceOne = document.getElementById('dropOne').value;
    choices.choiceTwo = document.getElementById('dropTwo').value;
    choices.choiceThree = document.getElementById('dropThree').value;
    choices.choiceFour = document.getElementById('dropFour').value;

    let choice = JSON.stringify(choices);
    localStorage.setItem('drop', choice);
    console.log('Values stored');

    if (dropOne.value === '') {
        dropOne.required = true;
    } else if (dropTwo.value === '') {
        dropTwo.required = true;
    } else if (dropThree.value === '') {
        dropThree.required = true;
    } else if (dropFour.value === '') {
        dropFour.required = true;
    } else {
        checkOne = true;
        dropOne.required = false;
        dropTwo.required = false;
        dropThree.required = false;
        dropFour.required = false;
        // window.location.href = 'editor-results.html';
    }

    if (typeOne.value === '') {
        typeOne.required = true;
    } else if (typeTwo.value === '') {
        typeTwo.required = true;
    } else if (typeThree.value === '') {
        typeThree.required = true;
    } else if (typeFour.value === '') {
        typeFour.required = true;
    } else {
        checkTwo = true;
        typeOne.required = false;
        typeTwo.required = false;
        typeThree.required = false;
        typeFour.required = false;
        // typeOne.required = false;
        // window.location.href = 'editor-results.html';
    }

    if (checkOne === true && checkTwo === true) {
        window.location.href = 'editor-results.html';
    }
});

