function showNav() {
  document.getElementById("dropdownn").classList.toggle("show");
}
const closeButton = document.getElementsByClassName("nav-close")
const dropdownn = document.getElementById("dropdownn")
closeButton.onclick = function closeNav() {
    if (dropdownn.classList.contains ("show")) {
        dropdownn.classList.remove("show")
    }
}