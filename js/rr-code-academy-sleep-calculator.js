"use strict"

const getSleepHours = day =>{
    if(day === 'monday'){
        return 5;
    }
    else if(day === 'tuesday'){
        return 6;
    }
    else if(day === 'wednesday'){
        return 5;
    }
    else if(day === 'thursday'){
        return 6;
    }
    else if(day === 'friday'){
        return 5;
    }
    else if(day === 'saturday'){
        return 8;
    }
    else if(day === 'sunday'){
        return 9;
    }
    else{
        return "Error!";

    }
};

const getActualSleepHours = () =>
    getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep');
    }else if (actualSleepHours > idealSleepHours){
        console.log("You've got " +(idealSleepHours - actualSleepHours) +" more sleep than needed");
    }else if (actualSleepHours < idealSleepHours){
        console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours )
            + " hours less that you should have this week");
    }  else{
        console.log("Error, you need to recheck your hours");
    }

};
calculateSleepDebt();

// if (actualSleepHours === idealSleepHours){
//    console.log('You got the perfect amount of sleep');
// }else if (actualSleepHours > idealSleepHours){
//     console.log("You got more sleep than needed");
// }else{
//     console.log("You need to get some more rest");
// }
