//TESTING TO SEE IF JAVASCRIPT FILE & HTML ARE PROPERLY LINKED
console.log("HTML & JAVA ARE PROPERLY LINKED!!");

/////////////////////////////////////////////////////////////////////
//VARIABLES & DOM ELEMENTS
/////////////////////////////////////////////////////////////////////
//DISPLAYS THE DAY
const todaysDate = moment().format("MMMM D, YYYY");
// console.log("todaysDate:", todaysDate);

//DISPLAYS THE CURRENT TIME AM/PM
const currentTime = moment().format("h:mm a");
// console.log("currentTime:", currentTime);

//DISPLAYS THE CURRENT HOUR AM / PM
const currentHour = moment().format("h A");
// console.log("currentHour:", currentHour);

//DISPLAYS THE CURRENT HOUR AM / PM
const currentWeekday = moment().format("dddd");
// console.log("currentWeekday:", currentWeekday);

//UPDATES TIME
const updateTime = setInterval(timeNow, 60000);
// console.log("updateTime:", updateTime);

//CITY
$cityDisplay = $("#city");

//DESCRIPTION
$cityStatus = $(".description");

//ICON
$icon = $("#icon");

//SEARCH BUTTON
$searchButton = $("#searchButton");

//INPUT FIELD
$searchInput = $("#searchTxt");

//WEATHER STAGE
$weatherStage = $(".weatherStage");

//TEMPERTURE
$temp = $(".temp");

//HUMIDITY
$humid = $(".humidity");

//HIGH TEMPERTURE
$hTemp = $(".highTemp");

//LOW TEMPERTURE
$lTemp = $(".lowTemp");

//WIND SPEED
$wind = $(".wind");

//FORECAST STATUS
$forecastStatus = $("#forecastStage");

//API KEY
var apiKey = "&APPID=bb2faf18c9357f761b725ea926a3bde5";

//CURRENT WEATHER URL
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

//FORECAST URL
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

//UV URL
var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?";

//STORING USER INPUT TEXT VALUE FOR API
var queryCity = $searchInput.val();

//CURRENT DATE & TIME
var date = new Date().toLocaleDateString("en-US");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
//ON CLICK SEARCH BUTTON FUNCTION
/////////////////////////////////////////////////////////////////////
$searchButton.on("click", function () {
  //SET USER INPUT (CITY) IN API URL
  queryCity = $searchInput.val();
  //TEST VALUE
  console.log(queryCity);
  $.ajax({
    url: queryUrl + queryCity + "&units=imperial" + apiKey,
    method: "GET"
  }).then(function(data) {
    //VIEW DATA FROM API
    console.log(data);
    //////////////////////////////////
    //STORING DATA IN VARIABLES
    /////////////////////////////////
    //CITY NAME
    var cityName = data.name;
    console.log(cityName);
    console.log(data.name);

    //TEMP FARENHEIT
    var tempF = data.main.temp;
    console.log(tempF);
    console.log("Temperature (F): " + data.main.temp);

    //HUMIDITY
    var humidity = data.main.humidity;
    console.log(humidity)
    console.log("Humidity: " + data.main.humidity);

    //WIND SPEED
    var windSpeed = data.wind.speed;
    console.log(windSpeed);
    console.log(data.wind.speed);

    //WEATHER DESCRIPTION
    var currentDescription = data.description;
    console.log(currentDescription);
    console.log(data.description);

    //FEELS LIKE DESCRIPTION
    var feelsLike = data.main.feels_like;
    console.log(feelsLike);
    console.log(data.main.feels_like);

    //HIGH TEMP
    var highTemp = data.main.temp_max;
    console.log(highTemp);
    
    //LOW TEMP
    var lowTemp = data.main.temp_min;
    console.log(lowTemp);
    
    //ICON
    var iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    
    //ICON
    var icon = $("<img>").attr("src", iconUrl);

    // CITY
    $(".city").text("<div>" + data.name +
      ", " +
      data.sys.country +
      "(" +
      date +
      ")" +
      +"</div>"
    );
    $(".icon").empty();
    $(".icon").append(icon);
    icon.addClass("img1");

    //////////////////////////////////
    //DISPLAYING CURRENT WEATHER STATUS BASED ON USER INPUT
    /////////////////////////////////
    //CITY
    $cityDisplay.text(cityName);
    //CITY DESCRIPTION
    $cityStatus.text(currentDescription);
    //ICON
    $icon.attr("src", iconUrl);
    //TEMP
    $temp.text(tempF + "F");
    //HIGH TEMP
    $hTemp.text(highTemp + "F");
    //LOW TEMP
    $lTemp.text(lowTemp + "C");
    //HUMIDITY
    $humid.text("Humidity: " + humidity + "%");
    //WIND SPEED
    $wind.text("Wind Speed: " + windSpeed + " MPH");

  });
});
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
//FUNCTION TO UPDATE MY TIME HOURS AND MINUTES
/////////////////////////////////////////////////////////////////////
//CALLING MY TIME NOW FUNCTION TO ACTION
timeNow();
// console.log("timeNow:", timeNow);

displayWeatherTimeIcons();

//FUNCTION TO UPDATE MY TIME HOURS AND MINUTES
function timeNow() {
  const time = new Date();
  // console.log('time:', time)

  const hours = time.getHours();
  // console.log("hours:", hours);

  const minutes = time.getMinutes();
  // console.log("minutes:", minutes);

  const ampm = moment().format("A");

  document.getElementById("time").innerText = hours + ":" + minutes + " " + ampm;
}

//DISPLAYS THE CURRENT TIME
$(".time").text(currentTime);

//DISPLAYS THE CURRENT WEEKDAY
$(".weekday").text(currentWeekday);

//DISPLAYS THE CURRENT DATE
$(".date").text(todaysDate);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
//CREATE A FUNCTION TO FORMAT HOURS && CHANGES THE HOUR DISPLAY FROM MIILTARY TIME TO REGULAR TIME
/////////////////////////////////////////////////////////////////////
function formatAMPM(hour) {
  console.log("format AMPM is working!!");

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;

  hour = hour ? hour : 12;
  //HOURS EQUALS HOURS 

  return hour + " " + ampm;
};
//INITIALIZE FORMATAMPM(HOURS)
formatAMPM();
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
//CREATES HOURLY WEATHER CARDS
/////////////////////////////////////////////////////////////////////
function displayWeatherTimeIcons() {

  //THIS VARIBALE STORES THE HOUR ID
  const hourId = parseInt(moment().hour());
  // console.log("hourId:", hourId);

  //HOUR FOR LOOP 
  for (let hour = 0; hour <= 24; hour++) {
    //variable hour = 9am; less than 6pm; hour increase each time)

    const hourEl = moment().hour(hour);
    // console.log("hourEl:", hourEl)

    const hourIndex = parseInt(hourEl.format("h"));
    // console.log("hourIndex:", hourIndex);

    //CREATE A ROW TO WRAP EVERYTHING IN
    const card = $('<div class="card"></div>');

    const cardHeader = $('<div class="cardTitle"></div>');

    const hourSpan = $(
      '<span class="hour" style="color:#182978;font-size:15px;font-weight:bolder;font-family:Poppins, sans-serif;">' +
        formatAMPM(hour) +
        "</span>"
    );
    // console.log("hour:", hour);

    cardHeader.append(hourSpan);

    const cardBody = $('<div class="box"></div>');

    const iconSpan = $('<span class="icon"></span>');

    const iconId = "icon-temp-" + hour;
    // console.log("iconId:", iconId);

    iconSpan.attr("id", iconId);
    // console.log("iconSpan:", iconSpan);

    cardBody.append(iconSpan);

    const cardFooter = $('<div class="cardFooter"></div>');

    const timeTempSpan = $('<span class="temp"></span>');
    // console.log("temp:", temp);

    timeTempSpan.attr("data-iconspan", hour);
    // console.log(cardFooter);

    cardFooter.append(timeTempSpan);

    card.append(cardHeader);
    card.append(cardBody);
    card.append(cardFooter);

    $(".horizontal-scroll").append(card);
  };
};
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////