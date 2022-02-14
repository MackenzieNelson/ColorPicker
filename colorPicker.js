function convertFromRGB() {
  var rho;
  var gamma;
  var beta;
  var luminence;
  
  var redRGB;
  var blueRGB;
  var greenRGB;
  var backgroundRGB;
  
  var currentColor = document.getElementById("selected");
  
  var redValue = parseFloat(document.getElementById("red").value);
  var greenValue = parseFloat(document.getElementById("green").value);
  var blueValue = parseFloat(document.getElementById("blue").value);
  
  var scalar =(1/(redValue + greenValue + blueValue));
  
  rho =  scalar * redValue;
  gamma = scalar * greenValue;
  beta = scalar * blueValue;
  luminence = Math.max(redValue, greenValue, blueValue);
  alert(luminence);
  
  document.getElementById("redConvertedValue").innerHTML = "Red Converted Value: " + redValue;
  document.getElementById("greenConvertedValue").innerHTML = "Green Converted Value: " + greenValue;
  document.getElementById("blueConvertedValue").innerHTML = "Blue Converted Value: " + blueValue;
  document.getElementById("luminenceValue").innerHTML = "Luminence Value: " + luminence;
  
  redRGB = parseFloat(redValue * 255);
  greenRGB = parseFloat(greenValue * 255);
  blueRGB = parseFloat(blueValue * 255);
  
  backgroundRGB = "rgb(" + redRGB + "," + greenRGB + "," + blueRGB + ")"
  
  currentColor.style.backgroundColor = backgroundRGB;
   
}
