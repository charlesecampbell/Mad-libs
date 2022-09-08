
let userInputs = { input1:'', input2:'', input3:'', input4:'', input5:'', input6:'', input7:'', input8:'', input9:'', input10:''};


// let theStory = "<h1>Halloween</h1><p>I can't believe it's already <span id=\"output1\"></span> I can't wait to put on my <span id=\"output2\"></span> and visit <span id=\"output3\"></span> in my neighboor hood, this year, I am going to dress up as a <span id=\"output4\"></span> with <span id=\"output5\"></span>  Before i <span id=\"output6\"></span> I make sure to grab my <span id=\"output7\"></span><span id=\"output8\"></span> <span id=\"output9\"></span>. to hold all of my <span id=\"output10\"></span>  Finally, all of my <span id=\"output11\"></span>, <span id=\"output12\"></span>, are ready to go.</p>";


// let theStory2 = "<h1>Cat</h1>";
function submitInputs() { //The user has hit Submit. Collects data from the form.
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
// gets the <p> for the story
let showStory = document.getElementById('make-story');
// variables that hold the h3 values in the page editor-results
let valOne = document.getElementById('usrOne');
let valTwo = document.getElementById('usrTwo');
let valThree = document.getElementById('usrThree');
let valFour = document.getElementById('usrFour');
// hides the story until the usr pushes a button
//get's usr input from the editor results page
let inputOne = document.getElementById('inOne');
let inputTwo = document.getElementById('inTwo');
let inputThree = document.getElementById('inThree');
let inputFour = document.getElementById('inFour');
//set an empty object for storing the editor results input page
let editResult = new Object();

// manipulates the <h3> and <p> to have the user input from the previous page
function render(){
    //gets the object from local storage and parses it back into an object
    let newValue = localStorage.getItem('drop');
    let obj = JSON.parse(newValue);
    // set the value of the <h3> to whatever the corresponding value is in the object
    valOne.textContent = 'Type in a ' + obj.choiceOne;
    valTwo.textContent = 'Type in a ' + obj.choiceTwo;
    valThree.textContent = 'Type in a ' + obj.choiceThree;
    valFour.textContent = 'Type in a ' + obj.choiceFour;
}

// When button is pushed it will show the rendered story
showStory.addEventListener('click', function(){
    // document.getElementById('renderd-story').style.visibility = 'visible';

    //Sets the value of the <p> to the users input on the editor-results page
    editResult.inOne = inputOne.value;
    editResult.inTwo = inputTwo.value;
    editResult.inThree = inputThree.value;
    editResult.inFour = inputFour.value;

    let type = JSON.stringify(editResult);
    localStorage.setItem('Build', type);

    window.location.href = 'results2.html';
});
render();
// end render section
// createMadLibs(); //Calls the function to write the story.

submitInputs(); //Collects any data from the form.
