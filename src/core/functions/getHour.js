let currentTimeClock=0;

const getHour = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    currentTimeClock = `${hours}:${minutes}`;
};
getHour();
setInterval(getHour, 60000);

export{
    currentTimeClock,
}