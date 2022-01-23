
//getting the location input
function getLocation(){
    const location = document.getElementById("location")
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

//Determing what to wear.
function getClothing () {
    const location = document.getElementById("location")
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+location.value+"&appid=c9dbfe419caaad8dfe99e90d39c81b98")
    .then(response => response.json())
    .then(data => {
        temp = Number(data.list[8].main.feels_like - 273.15).toFixed(1)
        

        //check what the actual spelling is
        for(i = 0; i<5; i++) {
            cond = String(data.list[8*i].weather[0].main)
           if (cond == "Rain"){
            document.getElementById("umbrella").innerHTML = "Don't forget to take an umbrella!";
            break;
           }
        }

        if (temp < -3.9) {
            document.getElementById("head").innerHTML= "Head: Beanie";
            document.getElementById("pant").innerHTML = "Pants: Woolen plants with thermals";
            document.getElementById("torso").innerHTML = "Torso: Winter Jacket";
            document.getElementById("shoes").innerHTML = "Shoes: Boots";

        } else if (temp < 6.67 ){
            document.getElementById("head").innerHTML= "Head: Beanie";
            document.getElementById("pant").innerHTML = "Pants: Woolen plants with thermals";
            document.getElementById("torso").innerHTML = "Torso: Light to medium coat";
            document.getElementById("shoes").innerHTML = "Shoes: Boots";

        } else if (temp < 17.8) {
            document.getElementById("head").innerHTML= "Head: No need!";
            document.getElementById("pant").innerHTML = "Pants: Jeans";
            document.getElementById("torso").innerHTML = "Torso: Fleece";
            document.getElementById("shoes").innerHTML = "Shoes: Boots";

        }else if (temp <26.1) {
            document.getElementById("head").innerHTML= "Head: Whatever you want!";
            document.getElementById("pant").innerHTML = "Pants: Chinos";
            document.getElementById("torso").innerHTML = "Torso: Short sleeves";
            document.getElementById("shoes").innerHTML = "Shoes: Tennis shoes";

        } else  {
            document.getElementById("head").innerHTML= "Head: Straw hat";
            document.getElementById("pant").innerHTML = "Pants: Shorts";
            document.getElementById("torso").innerHTML = "Torso: Short sleeves";
            document.getElementById("shoes").innerHTML = "Shoes: Sandals";

        }
    })

    
}