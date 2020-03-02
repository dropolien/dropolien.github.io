function showLetter() {
  var letterEl = document.getElementById("letter")
  
}

function handleScroll(e) {
  var scrollTop = window.scrollY
  var letterEl = document.getElementById("letter")

    if (scrollTop > 10) {
      letterEl.classList.add("letter--shown")
    } else {
      letterEl.classList.remove("letter--shown")
    }
}

window.addEventListener('scroll', handleScroll);