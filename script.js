//TESTING TO SEE IF JAVASCRIPT FILE & HTML ARE PROPERLY LINKED
console.log("HTML & JAVA ARE PROPERLY LINKED!!")

//CALLING MY TIME NOW FUNCTION TO ACTION
timeNow();
console.log("timeNow:", timeNow);

displayWeatherTimeIcons();
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
const todaysDate = moment().format("MMMM D,  YYYY");
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

function displayWeatherTimeIcons() {

    //THIS VARIBALE STORS THE HOUR ID
    const hourId = parseInt(moment().hour());
    console.log("hourId:", hourId);

    //HOUR FOR LOOP 
    for (let hour = 0; hour <= 24; hour++) {
        //variable hour = 9am; less than 6pm; hour increase each time)

        const hourEl = moment().hour(hour);
        console.log("hourEl:", hourEl)

        const hourIndex = parseInt(hourEl.format("h"));
        console.log("hourIndex:", hourIndex);

        //CREATE A ROW TO WRAP EVERYTHING IN
        const card = $('<div class="card"></div>');

        const cardHeader = $('<div class="cardTitle"></div>');

        const hourSpan = $('<span class="hour" style="color:#ffffff;font-size:15px;font-weight: bold;font-family:Poppins, sans-serif;">' + formatAMPM(hour) + "</span>");
        console.log("hour:", hour);

        cardHeader.append(hourSpan);

        const cardBody = $('<div class="box"></div>');

        const iconSpan = $('<span class="icon"></span>');

        const iconId = "icon-temp-" + hour;
        console.log("iconId:", iconId);

        iconSpan.attr("id", iconId);
        console.log("iconSpan:", iconSpan);

        cardBody.append(iconSpan);

        const cardFooter = $('<div class="cardFooter"></div>');

        const timeTempSpan = $('<span class="temp"></span>');
        // console.log("temp:", temp);

        timeTempSpan.attr("data-iconspan", hour);
        console.log(cardFooter);

        cardFooter.append(timeTempSpan);

        card.append(cardHeader);
        card.append(cardBody);
        card.append(cardFooter);

        $(".horizontal-scroll").append(card);
    };


};