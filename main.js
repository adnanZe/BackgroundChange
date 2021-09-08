function randomChangeBgColor(){
  // store all random numbers for red, green, blue and transparency(alpha)
  let redOne = Math.floor(Math.random() * 256);
  let greenOne = Math.floor(Math.random() * 256);
  let blueOne = Math.floor(Math.random() * 256);
  let alphaOne = Math.random() * 1;

  let redTwo = Math.floor(Math.random() * 256);
  let greenTwo = Math.floor(Math.random() * 256);
  let blueTwo = Math.floor(Math.random() * 256);
  let alphaTwo = Math.random() * 1;

  // store random number for angle of direction (if number equal with 0deg is equivalent for "to top", 90deg is equivalent for "to right" and so on)

  let degNumber = Math.floor(Math.random() * 360);

  // insert with DOM from JS to HTML/CSS: property and rgba values
  document.body.style.background = 'linear-gradient(' + degNumber +'deg, rgba(' + redOne + ', ' + greenOne + ', ' + blueOne + ', ' + alphaOne + '), rgba(' + redTwo + ', ' + greenTwo + ', ' + blueTwo + ', ' + alphaTwo + ')' ;
}
