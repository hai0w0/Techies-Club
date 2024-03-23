var navBar = document. getElementById("navBar");
function showMenu(){
    navBar.style.right = "0";
}
function hideMenu(){
    navBar.style.right = "-200px";
}
var anchorLinks = document.querySelectorAll(".navbar a");
anchorLinks.forEach(function(anchorLink) {
    anchorLink.addEventListener("click", hideMenu);
});