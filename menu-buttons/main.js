var linkList = document.getElementsByClassName("link");

// Adds click listener to all elements with class of 'link'
for (var i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', lorem);
}

// Toggles the dropdown on click event
function lorem (event) {
  var el = event.target;

for (var i = 0; i < linkList.length; i++) {
    if (linkList[i].contains(el)) {
      linkList[i].classList.toggle('is-active')
    } else {
      linkList[i].classList.remove('is-active');
    }
  }
}

// Removes the dropdown menu by clicking anywhere on the window
window.onclick = function(event) {
  var el = event.target;
  if (!el.matches('a')) {
    for (var i = 0; i < linkList.length; i++) {
      if (linkList[i].classList.contains('is-active')){
        linkList[i].classList.remove('is-active');
      }
    }
  }
};

