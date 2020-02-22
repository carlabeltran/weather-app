//TESTING TO SEE IF JAVASCRIPT FILE & HTML ARE PROPERLY LINKED
console.log("HTML & JAVA ARE PROPERLY LINKED!!")

//CALLING MY TIME NOW FUNCTION TO ACTION
timeNow();
console.log("timeNow:", timeNow);

/////////////////////////////////////////////////////////////////////
//FUNCTION TO UPDATE MY TIME HOURS AND MINUTES
/////////////////////////////////////////////////////////////////////
const updateTime = setInterval(timeNow, 60000);
console.log("updateTime:", updateTime);

//FUNCTION TO UPDATE MY TIME HOURS AND MINUTES
function timeNow() {
    const time = new Date();
    console.log('time:', time)

    const hours = time.getHours();
    console.log("hours:", hours);
    
    const minutes = time.getMinutes();
    console.log("minutes:", minutes);

    const ampm = moment().format("A");

    document.getElementById("time").innerText = hours + ":" + minutes + " " + ampm ;
}

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

//DISPLAYS THE CURRENT TIME
$(".time").text();

//DISPLAYS THE CURRENT WEEKDAY
$(".weekday").text(currentWeekday);

//DISPLAYS THE CURRENT DATE
$(".date").text(todaysDate);





////////////////////////////////////////////////////////////////////
//CREATE A FUNCTION TO FORMAT HOURS && CHANGES THE HOUR DISPLAY FROM MIILTARY TIME TO REGULAR TIME
/////////////////////////////////////////////////////////////////////
function formatAMPM(hour) {
    console.log("format AMPM is working!!");
    
    const ampm = hour >= 12 ? "PM" : "AM";
  //variable ampm equals hours greater than or equal to 
  //variable ampm is storing greater than or equal to 12 ternary operator
  //>= : greater than or equal to
  // ?: ternary operator
                            
    hour = hour % 12;
  //hour equal hours 
  //% :   Modulus (Division Remainder)
    
    hour = hour ? hour : 12;
  //HOURS EQUALS HOURS 
    
    return hour + " " + ampm;
};
//INITIALIZE FORMATAMPM(HOURS)
formatAMPM();
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

function displayWeatherTime() {


    //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
    console.log("currentDay:", currentDay);

    $("#currentTime").text(currentTime);
    
  //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
    console.log("currentTime:", currentTime);
    
  //THIS VARIBALE STORS THE HOUR ID
    var hourId = parseInt(moment().hour());
    console.log("hourId:", hourId);

    //HOUR FOR LOOP 
    for (var hour = 9; hour < 18; hour++) {
        //variable hour = 9am; less than 6pm; hour increase each time)

        var hourEl = moment().hour(hour);
        console.log("hourEl:", hourEl)

        var hourIndex = parseInt(hourEl.format("h"));
        console.log("hourIndex:", hourIndex);




    }


};