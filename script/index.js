var menutoggle = document.getElementById("menutoggle")
var menu_mobile = document.getElementById("menu-mobile")

menutoggle.onclick = function () {
    if (menu_mobile.style.display == "flex") {
        menutoggle.src = "assets/shared/icon-hamburger.svg"
        menu_mobile.style.display = "none"
    } else {
        menutoggle.src = "assets/shared/icon-close.svg"
        menu_mobile.style.display = "flex"
    }
}