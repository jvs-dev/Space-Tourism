var jsondata = {
    "destinations": [
        {
            "name": "Moon",
            "image": "assets/destination/image-moon.png",
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "image": "assets/destination/image-mars.png",
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "image": "assets/destination/image-europa.png",
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "image": "assets/destination/image-titan.png",
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ]
}
var menutoggle = document.getElementById("menutoggle")
var menu_mobile = document.getElementById("menu-mobile")
/*buttons*/
var button_moon = document.getElementById("button_moon")
var button_mars = document.getElementById("button_mars")
var button_europa = document.getElementById("button_europa")
var button_titan = document.getElementById("button_titan")
/*informations*/
var destination_img = document.getElementById("destination_img")
var destination_h1 = document.getElementById("destination_h1")
var destination_p = document.getElementById("destination_p")
var p_distance = document.getElementById("p_distance")
var p_travel_time = document.getElementById("p_travel_time")


function load_informations() {
    if (button_moon.classList.contains("active")) {
        destination_img.src = jsondata.destinations[0].image
        destination_h1.textContent = jsondata.destinations[0].name
        destination_p.textContent = jsondata.destinations[0].description
        p_distance.textContent = jsondata.destinations[0].distance
        p_travel_time.textContent = jsondata.destinations[0].travel
    }
    if (button_mars.classList.contains("active")) {
        destination_img.src = jsondata.destinations[1].image
        destination_h1.textContent = jsondata.destinations[1].name
        destination_p.textContent = jsondata.destinations[1].description
        p_distance.textContent = jsondata.destinations[1].distance
        p_travel_time.textContent = jsondata.destinations[1].travel
    }
    if (button_europa.classList.contains("active")) {
        destination_img.src = jsondata.destinations[2].image
        destination_h1.textContent = jsondata.destinations[2].name
        destination_p.textContent = jsondata.destinations[2].description
        p_distance.textContent = jsondata.destinations[2].distance
        p_travel_time.textContent = jsondata.destinations[2].travel
    }
    if (button_titan.classList.contains("active")) {
        destination_img.src = jsondata.destinations[3].image
        destination_h1.textContent = jsondata.destinations[3].name
        destination_p.textContent = jsondata.destinations[3].description
        p_distance.textContent = jsondata.destinations[3].distance
        p_travel_time.textContent = jsondata.destinations[3].travel
    }
}
button_moon.onclick = function () {
    click_update(button_moon)
}
button_mars.onclick = function () {
    click_update(button_mars)
}
button_europa.onclick = function () {
    click_update(button_europa)
}
button_titan.onclick = function () {
    click_update(button_titan)
}

function click_update(button_onclick) {
    button_moon.classList.remove("active")
    button_mars.classList.remove("active")
    button_europa.classList.remove("active")
    button_titan.classList.remove("active")
    button_onclick.classList.add("active")
    load_informations()
}

window.addEventListener("load", load_informations())















menutoggle.onclick = function () {
    if (menu_mobile.style.display == "flex") {
        menutoggle.src = "assets/shared/icon-hamburger.svg"
        menu_mobile.style.display = "none"
    } else {
        menutoggle.src = "assets/shared/icon-close.svg"
        menu_mobile.style.display = "flex"
    }
}