const driver = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => {
    return driver.slice(0,2);
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = () => {
    return driver.slice(2, 4);
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier){
    return function(){
       return multiplier ** 2
    }
}
const fareMultiplier = createFareMultiplier(2)
const fareQuintupler = createFareMultiplier(5);
fareMultiplier();
fareQuintupler();

const fareDoubler = fare => fare * 2;
fareDoubler(10);
const fareTripler = fare => fare * 3
fareTripler(12);

function selectDifferentDrivers(driver, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}
selectDifferentDrivers(driver, returnFirstTwoDrivers);

function selectDifferentDrivers(driver, returnLastTwoDrivers){
    return returnLastTwoDrivers();
}
selectDifferentDrivers(driver, returnLastTwoDrivers);