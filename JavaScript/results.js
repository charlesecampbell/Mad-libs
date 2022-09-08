let dogOrigin = localStorage.getItem('Dog');
let catOrigin = localStorage.getItem('Cat');
let halloweenOrigin = localStorage.getItem('Halloween');
//get the items and makes them booleans instead of strings
let dog = JSON.parse(dogOrigin);
let cat = JSON.parse(catOrigin);
let halloween = JSON.parse(halloweenOrigin);
let pOne = document.getElementById('One');
let pTwo = document.getElementById('Two');
let pThree = document.getElementById('Three');
let pFour = document.getElementById('Four');
let pFive = document.getElementById('Five');
let pSix = document.getElementById('Six');
let pSeven = document.getElementById('Seven');
let pEight = document.getElementById('Eight');
let pNine = document.getElementById('Nine');
let pTen = document.getElementById('Ten');
let pEleven = document.getElementById('Eleven');
let pTwelve = document.getElementById('Twelve');
let pThirteen = document.getElementById('Thirteen');
let pFourteen = document.getElementById('Fourteen');
let pFifteen = document.getElementById('Fifteen');
let pSixteen = document.getElementById('Sixteen');
let pSeventeen = document.getElementById('Seventeen');
let pEighteen = document.getElementById('Eighteen');
let pNineteen = document.getElementById('Nineteen');
let pTwenty = document.getElementById('Twenty');
let pTwentyOne = document.getElementById('TwentyOne');
let pTwentyTwo = document.getElementById('TwentyTwo');
let pTwentyThree = document.getElementById('TwentyThree');
let pTwentyFour = document.getElementById('TwentyFour');
// let pTwentyFive = document.getElementById('TwentyFive');
// let pTwentySix = document.getElementById('TwentySix');
// let pTwentySeven = document.getElementById('TwentySeven');


function origin (){
    //checking if our origins are true
    if(dog === true){
        //if we came from dog
        let dogwords = localStorage.getItem('Dogword');
        let values = JSON.parse(dogwords);

        pOne.textContent = 'You won\'t believe what my pet ';
        pTwo.textContent = values.inOne;
        pThree.textContent = values.inTwo;
        pFour.textContent = ' did last';
        pFive.textContent = values.inThree;
        pSix.textContent = '! After a long day of';
        pSeven.textContent = values.inFour;
        pEight.textContent = 'at';
        pNine.textContent = values.inFive;
        pTen.textContent = ', I came home to find what he/she had';
        pEleven.textContent = values.inSix;
        pTwelve.textContent = 'all over the new';
        pThirteen.textContent = values.inSeven;
        pFourteen.textContent = '. I had just bought it last';
        pFifteen.textContent = values.inEight;
        pSixteen.textContent = ', and it\'s already';
        pSeventeen.textContent = values.inNine;
        pEighteen.textContent = '. I have no idea what I\'m going to do about this. I do know, however, that I need to punish my pet! I was considering';
        pNineteen.textContent = values.inTen;
        pTwenty.textContent = 'him/her, but I felt that was a bit';
        pTwentyOne.textContent = values.inEleven;
        pTwentyTwo.textContent = '. Maybe I should let it slide and try to calm down by eating my comfort food';
        pTwentyThree.textContent = values.inTwelve;
        pTwentyFour.textContent = values.inThirteen;
        //change <p> to the dog story and dog variables

        console.log('dog is true');
        dog = false;
        let stringDog = JSON.stringify(dog);
        localStorage.setItem('Dog', stringDog);

    }else if (cat === true){
        //if we came from cat


        let catwords = localStorage.getItem('Catword');
        let value = JSON.parse(catwords);

        pOne.textContent = 'My cat, ';
        pTwo.textContent = value.catOne;
        pThree.textContent = 'is the best kitten ever! Her Mom was a tabby cat and her dad was a ';
        pFour.textContent = value.catTwo;
        pFive.textContent = 'so she looks more like a(n) ';
        pSix.textContent = value.catThree;
        pSeven.textContent = value.catFour;
        pEight.textContent = 'Her favorite food is ';
        pNine.textContent = value.catFive;
        pTen.textContent = ', but only if you dye it ';
        pEleven.textContent = value.catSix;
        pTwelve.textContent = '. One of our favorite games is to ';
        pThirteen.textContent = value.catSeven;
        pFourteen.textContent = 'in my bed room (except she always wins). Yesterday I felt ';
        pFifteen.textContent = value.catEight;
        pSixteen.textContent = 'because I thought she had run away... but it turns out she went to ';
        pSeventeen.textContent = value.catNine;
        pEighteen.textContent = 'all day because we were out of ';
        pNineteen.textContent = value.catTen;
        pTwenty.textContent = '. What a thoughtful kitten!';

        //change <p> to cat story and cat variables

        console.log('cat is true');
        cat = false;
        let stringCat = JSON.stringify(cat);
        localStorage.setItem('Cat', stringCat);

    }
    else if (halloween === true){
        //if we came from halloween
        let halloweenWords = localStorage.getItem('HalloweenWords');
        let values = JSON.parse(halloweenWords);

        pOne.textContent ='I can\'t believe it\'s already';
        pTwo.textContent = values.inOne;
        pThree.textContent = '! I can\'t wait to put on my';
        pFour.textContent = values.inTwo;
        pFive.textContent = 'and visit every';
        pSix.textContent = values.inThree;
        pSeven.textContent = 'in my neighborhood. This year, I am going to dress up as (a)';
        pEight.textContent = values.inFour;
        pNine.textContent = ' with';
        pTen.textContent = values.inFive;
        pEleven.textContent = values.inSix;
        pTwelve.textContent = '. Before I';
        pThirteen.textContent = values.inSeven;
        pFourteen.textContent = 'I make sure to grab my';
        pFifteen.textContent = values.inEight;
        pSixteen.textContent = values.inNine;
        pSeventeen.textContent = 'to hold all of my';
        pEighteen.textContent = '';
        pNineteen.textContent = '. Finally, all of my';
        pTwenty.textContent = '';
        pTwentyOne.textContent = 'are ready to go!';

        //change <p> Halloween story and halloween variables

        console.log('halloween is true');
        halloween = false;
        let stringHallo = JSON.stringify(halloween);
        localStorage.setItem('Halloween', stringHallo);
    }
}

origin();
