// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("navBtn");
const links = document.getElementById("navLinksID");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("shownav");
});
