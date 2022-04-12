// // GIVEN a weather dashboard with form inputs
// // WHEN I search for a city
// // THEN I am presented with current and future conditions for that city and that city is added to the search history
// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// // WHEN I view the UV index
// // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// // WHEN I view future weather conditions for that city
// // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city

// * Satisfies all of the above acceptance criteria plus the following:

//     * Uses the OpenWeather API to retrieve weather data. :refer to 06-code-drill 01-api- 03- weather-api

//     * Uses `localStorage` to store persistent data.
var APIkey= "346fa36c7fb173393b353dd518347322"
var queryone= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid="+ APIkey;
var querylocation= "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid="+ APIkey;

$.ajax({
    url: queryone,
    method: "GET"
}).then(function(response) {

    console.log("current data ");
    console.log(response);

});

$.ajax({
    url:querylocation,
    method: "GET"
}).then(function(extenddata){
    console.log("location data ");
    console.log(extenddata);
})
$(".citybtn").on("click",function(button){
    button.preventDefault();
    createQuery();
    var input =$("#city").val();
    var cityArrray= JSON.parse(localStorage.getItem("input")) || [];
    cityArrray.push(input);
    localStorage.setItem("input", JSON.stringify(cityArrray));
})
var weatherimg = extenddata.current.weather[0].icon;
var img ="https://openweathermap.org/img/wn/"+ weatherimg + ".png";

$(".reportColumn").html("");

$(".reportColumn").append(
    '<div class="currentForecast"></div>'
);

$(".currentForecast").append(
    `<h2 class="atmCity">
        ${data.name} <span class="atmDate">(${
        moment.unix(extenddata?.current?.dt)
        .format("MM/DD/YYYY")})</span> <img id ="weatherimg" src="${img}"/>
    </h2>`
);

$(".currentforecast").append(
    `<p class= "winds"> Wind Speed 
    ${
        extenddata.current.wind_speed +"mph"
    }</p>`
);

$(".currentforecast").append(
    `<p class="temp">
    ${extenddata.current.temp + "&deg;F"}
    </p>`
);

$(".currentforecast").append(
    `<p class= "humidity">
    ${extenddata.current.humidity + "%"}
    </p>`
);

$(".currentforecast").append(
    `<p UV index:< span class= "${uviEvent(extenddata.current.uvi)}">
    ${extenddata.current.uvi}</span>></p>`
);

$(".reportColumn").append(`<div class="fiveday"></div>`);
$(".fiveday").append(`<h2>Five Day Forecast</h2>`);
$(".fiveday").append(<div class="cards"></div>);

