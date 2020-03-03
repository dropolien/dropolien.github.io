var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

var closeEl = document.querySelector(".letter__close");
var letterEl = document.querySelector(".letter");

function handleScroll(e) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    letterEl.classList.add("letter--shown");
    letterEl.classList.remove("js-letter-open");
  } else {
    // letterEl.classList.remove("letter--shown")
  }
}

window.addEventListener("scroll", handleScroll);

letterEl.addEventListener("click", function() {
  letterEl.classList.add("letter--shown");
});

closeEl.addEventListener("click", function(e) {
  letterEl.classList.toggle("letter--shown");
  e.stopPropagation();
});

var myForm = document.forms.myform

myform.addEventListener("submit", function (e) {
  e.preventDefault()
  var canForm = document.forms.new_signature
  if(!canForm["form-first_name"]) return
  canForm["form-first_name"].value = myForm["name"].value
  canForm["form-last_name"].value = myForm["surname"].value
  canForm["Alder"].value = myForm["age"].value
  canForm["form-email"].value = myForm["email"].value
  document.querySelector(".js-affirmative_optin_radio").checked = true
  canForm.submit()
})