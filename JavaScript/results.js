let dogOrigin = localStorage.getItem('Dog');
let catOrigin = localStorage.getItem('Cat');
let halloweenOrigin = localStorage.getItem('Halloween');
//get the items and makes them booleans instead of strings
let dog = JSON.parse(dogOrigin);
let cat = JSON.parse(catOrigin);
let halloween = JSON.parse(halloweenOrigin);
let pOne = document.getElementById('One');

function origin (){
    //checking if our origins are true
    if(dog === true){
        //if we came from dog
        let dogwords = localStorage.getItem('Dogword');
        let values = JSON.parse(dogwords);

        //change <p> to the dog story and dog variables
        pOne.textContent = `You won't believe what my pet ${values.inOne} ${values.inTwo} did last ${values.inThree} ! After a long day of ${values.inFour} at ${values.inFive} , I came home to find out what he/she had ${values.inSix} all over the new ${values.inSeven}. I just bought it last ${values.inEight}, and it's already ${values.inNine}. I have no idea what I'm going to do about this. I do know, however, that I need to punish my pet! I was considering ${values.inTen} him/her, but I felt that was a bit ${values.inEleven}. Maybe I should let it slide and try to calm down by eating my comfort food ${values.inTwelve} ${values.inThirteen}.`;

        console.log('dog is true');
        dog = false;
        let stringDog = JSON.stringify(dog);
        localStorage.setItem('Dog', stringDog);

    }else if (cat === true){
        //if we came from cat
        let catwords = localStorage.getItem('Catword');
        let value = JSON.parse(catwords);

        //change <p> to cat story and cat variables
        pOne.textContent = `My cat, ${value.catOne} is the best kitten ever! Her Mom was a tabby cat and her dad was a ${value.catTwo}, so she looks more like a(n) ${value.catThree} ${value.catFour}. Her favorite food is ${value.catFive}, but only if you dye it ${value.catSix}. One of our favorite games is to ${value.catSeven} in my bedroom (except she always wins). Yesterday, I felt ${value.catEight} because I thought she had run away... but it turns out she went to ${value.catNine} all day because we were out of ${value.catTen}. What a thoughtful kitten!`;

        console.log('cat is true');
        cat = false;
        let stringCat = JSON.stringify(cat);
        localStorage.setItem('Cat', stringCat);
    }
    else if (halloween === true){
        //if we came from halloween
        let halloweenWords = localStorage.getItem('HalloweenWords');
        let values = JSON.parse(halloweenWords);

        //Charles create string literals for halloween
        pOne.textContent =`I can't believe it's already ${values.inOne} ! I can't wait to put on my ${values.inTwo} and visit every ${values.inThree} in my neighborhood. This year, I am going to dress up as (a) ${values.inFour}  with ${values.inFive} . Before I ${values.inSix} I make sure to grab my ${values.inSeven} to hold all of my ${values.inEight} . Finally, all of my ${values.inNine} are ready to go! ${values.inNine}`;

        console.log('halloween is true');
        halloween = false;
        let stringHallo = JSON.stringify(halloween);
        localStorage.setItem('Halloween', stringHallo);
    }
}

origin();
