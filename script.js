let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

var letterEl = document.getElementById("letter")

function handleScroll(e) {
  var scrollTop = window.scrollY
  var letterEl = document.getElementById("letter")

    if (scrollTop > 10) {
      letterEl.classList.add("letter--shown")
    } else {
      // letterEl.classList.remove("letter--shown")
    }
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('click', function () {
  var letterEl = document.getElementById("letter")
  letterEl.classList.add("letter--shown")
})