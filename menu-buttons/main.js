var linkList = document.getElementsByClassName("link");

// Adds click listener to all elements with class of 'link'
for (var i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', lorem);
}

