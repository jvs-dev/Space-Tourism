let jsondata = {
    "crew": [
        {
            "name": "Douglas Hurley",
            "image": "./assets/crew/image-douglas-hurley.png",
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "image": "./assets/crew/image-mark-shuttleworth.png",
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "image": "./assets/crew/image-victor-glover.png",
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "image": "./assets/crew/image-anousheh-ansari.png",
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]
}

var menutoggle = document.getElementById("menutoggle")
var menu_mobile = document.getElementById("menu-mobile")

let crew_btn1 = document.getElementById("crew_btn1")
let crew_btn2 = document.getElementById("crew_btn2")
let crew_btn3 = document.getElementById("crew_btn3")
let crew_btn4 = document.getElementById("crew_btn4")
let section_h3 = document.getElementById("section_h3")
let section_h1 = document.getElementById("section_h1")
let section_p = document.getElementById("section_p")
let crew_img = document.getElementById("crew_img")


function load_crew() {
    if (crew_btn1.classList.contains("active")) {
        section_h3.textContent = jsondata.crew[0].role
        section_h1.textContent = jsondata.crew[0].name
        section_p.textContent = jsondata.crew[0].bio
        crew_img.src = jsondata.crew[0].image
    }
    if (crew_btn2.classList.contains("active")) {
        section_h3.textContent = jsondata.crew[1].role
        section_h1.textContent = jsondata.crew[1].name
        section_p.textContent = jsondata.crew[1].bio
        crew_img.src = jsondata.crew[1].image
    }
    if (crew_btn3.classList.contains("active")) {
        section_h3.textContent = jsondata.crew[2].role
        section_h1.textContent = jsondata.crew[2].name
        section_p.textContent = jsondata.crew[2].bio
        crew_img.src = jsondata.crew[2].image
    }
    if (crew_btn4.classList.contains("active")) {
        section_h3.textContent = jsondata.crew[3].role
        section_h1.textContent = jsondata.crew[3].name
        section_p.textContent = jsondata.crew[3].bio
        crew_img.src = jsondata.crew[3].image
    }
}

crew_btn1.onclick = function () {
    crew_btn1.classList.add("active")
    crew_btn2.classList.remove("active")
    crew_btn3.classList.remove("active")
    crew_btn4.classList.remove("active")
    load_crew()
}

crew_btn2.onclick = function () {
    crew_btn1.classList.remove("active")
    crew_btn2.classList.add("active")
    crew_btn3.classList.remove("active")
    crew_btn4.classList.remove("active")
    load_crew()
}

crew_btn3.onclick = function () {
    crew_btn1.classList.remove("active")
    crew_btn2.classList.remove("active")
    crew_btn3.classList.add("active")
    crew_btn4.classList.remove("active")
    load_crew()
}

crew_btn4.onclick = function () {
    crew_btn1.classList.remove("active")
    crew_btn2.classList.remove("active")
    crew_btn3.classList.remove("active")
    crew_btn4.classList.add("active")
    load_crew()
}

load_crew()









menutoggle.onclick = function () {
    if (menu_mobile.style.display == "flex") {
        menutoggle.src = "assets/shared/icon-hamburger.svg"
        menu_mobile.style.display = "none"
    } else {
        menutoggle.src = "assets/shared/icon-close.svg"
        menu_mobile.style.display = "flex"
    }
}