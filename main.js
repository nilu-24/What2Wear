//getting the location input
function getLocation(){
    const location = document.getElementById("location")
    console.log(location.value)
//API
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+location.value+"&appid=c9dbfe419caaad8dfe99e90d39c81b98")
.then(response=>response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp:" + Number(data.list[8*i].main.temp - 273.15).toFixed(1)+ "°";
        document.getElementById("day" + (i+1) + "Feel").innerHTML = "Feel:" + Number(data.list[8*i].main.feels_like - 273.15).toFixed(1)+ "°";
        document.getElementById("day" + (i+1) + "Con").innerHTML = String(data.list[8*i].weather[0].main);
        document.getElementById("img"+(i+1)).src = "http://openweathermap.org/img/wn/"+String(data.list[8*i].weather[0].icon)+"@2x.png";
        document.getElementById("day"+(i+1)).innerHTML = String(data.list[8*i].dt_txt).split(' ').shift();
    }
})

}