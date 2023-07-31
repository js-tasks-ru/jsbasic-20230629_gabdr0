function hideSelf() {
  const hideSelfButton = document.querySelector(".hide-self-button");

  hideSelfButton.addEventListener( "click", function(evt) {
    this.hidden = "true";
  } );
}
