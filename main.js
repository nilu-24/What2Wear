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
            document.getElementById("img_head").src = "./clothes/beanie.png"

            document.getElementById("pant").innerHTML = "Pants: Woolen pants with thermals";
            document.getElementById("img_pants").src = "./clothes/woolenpants.png"

            document.getElementById("torso").innerHTML = "Torso: Winter Jacket";
            document.getElementById("img_torso").src = "./clothes/winter-jacket.png"

            document.getElementById("shoes").innerHTML = "Shoes: Boots";
            document.getElementById("img_footwear").src = "./clothes/boots.png"

        } else if (temp < 6.67 ){
            document.getElementById("head").innerHTML= "Head: Beanie";
            document.getElementById("img_head").src = "./clothes/beanie.png"

            document.getElementById("pant").innerHTML = "Pants: Woolen pants with thermals";
            document.getElementById("img_pants").src = "./clothes/woolenpants.png"

            document.getElementById("torso").innerHTML = "Torso: Light to medium coat";
            document.getElementById("img_torso").src = "./clothes/overcoat.png"

            document.getElementById("shoes").innerHTML = "Shoes: Boots";
            document.getElementById("img_footwear").src = "./clothes/boots.png"

        } else if (temp < 17.8) {
            document.getElementById("head").innerHTML= "Head: No need!";
            document.getElementById("img_head").src = "./clothes/no_need.png"

            document.getElementById("pant").innerHTML = "Pants: Jeans";
            document.getElementById("img_pants").src = "./clothes/jeans.png"

            document.getElementById("torso").innerHTML = "Torso: Fleece";
            document.getElementById("img_torso").src = "./clothes/fleece.png"

            document.getElementById("shoes").innerHTML = "Shoes: Boots";
            document.getElementById("img_footwear").src = "./clothes/boots.png"

        }else if (temp <26.1) {
            document.getElementById("head").innerHTML= "Head: Whatever you want!";
            document.getElementById("img_head").src = "./clothes/no_need.png"

            document.getElementById("pant").innerHTML = "Pants: Chinos";
            document.getElementById("img_pants").src = "./clothes/chinos.png"

            document.getElementById("torso").innerHTML = "Torso: Short sleeves";
            document.getElementById("img_torso").src = "./clothes/tshirt.png"

            document.getElementById("shoes").innerHTML = "Shoes: Tennis shoes";
            document.getElementById("img_footwear").src = "./clothes/tennisshoes.png"

        } else  {
            document.getElementById("head").innerHTML= "Head: Straw hat";
            document.getElementById("img_head").src = "./clothes/hat.png"
            
            document.getElementById("pant").innerHTML = "Pants: Shorts";
            document.getElementById("img_pants").src = "./clothes/shorts.png"

            document.getElementById("torso").innerHTML = "Torso: Short sleeves";
            document.getElementById("img_torso").src = "./clothes/tshirt.png"

            document.getElementById("shoes").innerHTML = "Shoes: Sandals";
            document.getElementById("img_footwear").src = "./clothes/sandals.png"

        }
    })

    
}