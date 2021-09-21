// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2); //function

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2, drivers.length);  //function

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];  //array

const createFareMultiplier = (multiplier) => {    //function
    return function fareMultiplier() {
        return multiplier * 5}
    }

const fareDoubler = (fare) => fare * 2; //function

const fareTripler = (fare) => fare * 3; //function

const selectDifferentDrivers = (arrayOfDrivers, a) => {
    return a(arrayOfDrivers);
}

