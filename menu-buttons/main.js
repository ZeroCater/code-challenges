var linkList = document.getElementsByClassName("link");

// Adds click listener to all elements with class of 'link'
for (var i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', lorem);
}
// Toggles the dropdown on click event
function lorem (event) {
  var el = event.target;

for (var i = 0; i < linkList.length; i++) {
    if (linkList[i].contains(el)){
      linkList[i].classList.toggle('is-active')
    }
  }
}

