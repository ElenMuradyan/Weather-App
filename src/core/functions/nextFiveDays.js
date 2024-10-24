import { weekdays } from "../utils/constants";
import { weekdayIndex } from "./getData";

let daysArray = [];

const nextFivedaysFunction = () => {
daysArray = daysArray.concat(weekdays.slice(weekdayIndex));
if(daysArray.length<5){
    const missingElemSum = 5 - daysArray.length
    daysArray =  daysArray.concat(weekdays.slice(0, missingElemSum))
}
return daysArray
};
nextFivedaysFunction()

export {
    daysArray
}