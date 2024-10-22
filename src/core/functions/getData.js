import { weekdays } from "../utils/constants";

const currentDate = new Date();
const weekdayIndex = currentDate.getDay();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0');
const year = currentDate.getFullYear();

export const weekdayName = weekdays[weekdayIndex];
export const formattedDate = `${month}/${day}/${year}`;
