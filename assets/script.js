// set locations
var APIkey= "346fa36c7fb173393b353dd518347322"
var queryone= "https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&units=imperial&appid="+ APIkey;
var querylocation= "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + APIkey;
fetch({
   
}).then(function(response) {

    console.log("current data ");
    console.log(response);

});

fetch({
   
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
        .format("M/DD/YYYY")})</span> <img id ="weatherimg" src="${img}"/>
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
$(".fiveday").append(`<div class="cards"></div>`);

extenddata?.daily?.map(day, index);{
    if(index > 0 && index <6){
      $(".cards").append(
          `<div class ="forecast" id="{'part'+ index}">
                <h3> ${moment.unix(day.dt).format("M/DD/YYYY")} </h3>
                <div><img id="weatherimg" src="https://openweathermap.org/img/wn/${
                day.weather[0].icon
              }.png"/>
              </div>
              <p>Temp: ${day.temp.day + " &deg;F"}</p>
              <p>Humidity: ${day.humidity + "%"}</p>
            `
      ); 
    };
};
function uviEvent(uvi){
    if(uvi < 4) {
        return "UV index Favorable";
    } else if (uvi >= 4 && 10){
        return "UV index Moderate"
    }else if (uvi >11){
        return "UV index Extreme"
    }else{
        return "UV index Undefined"
    }
}
function history(){
    var cityHis = JSON.parse(localStorage.getItem("input"));
    if(!$(".searchHistory")?.length && cityHist?.length) {
        $(".searchColumn").append(`<div class="searchist"></div>`);
    }

    $(".searchist").html("");
    for(
        var counter = 0;
        counter < cityHis?.length;
        counter++ 
    ){
        var place =cityHis[counter];
        $(".searchist").append(
           `<button id="placeBtn${counter}"> ${place}</button>`
        );
    }
    $(".searchist").on("click", `#placeBtn${counter}`, function(){
        createQuery (place);
        localStorage.setItem("place", JSON.stringify(place));
    });
}