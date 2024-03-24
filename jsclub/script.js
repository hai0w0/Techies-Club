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
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})