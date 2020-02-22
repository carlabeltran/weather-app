//TESTING TO SEE IF JAVASCRIPT FILE & HTML ARE PROPERLY LINKED
console.log("HTML & JAVA ARE PROPERLY LINKED!!")
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
//VARIABLES & DOM ELEMENTS
/////////////////////////////////////////////////////////////////////
//DISPLAYS THE DAY
const todaysDate = moment().format("MMMM Do, YYYY")
console.log("todaysDate:", todaysDate);

//DISPLAYS THE CURRENT TIME AM/PM
const currentTime = moment().format("h:mm a");
console.log("currentTime:", currentTime);

//DISPLAYS THE CURRENT HOUR AM / PM
const currentHour = moment().format("h A");
console.log("currentHour:", currentHour);

//DISPLAYS THE CURRENT HOUR AM / PM
const currentWeekday = moment().format("dddd");
console.log("currentWeekday:", currentWeekday);
// const currentWeatherStatus;


$(".time").text(currentTime);

$(".weekday").text(currentWeekday);

$(".date").text(todaysDate);



