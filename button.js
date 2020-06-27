// function myFunction() {
//   console.log("button Clicked")
// // var x = document.createElement("BUTTON");
// // var t = document.createTextNode("Click me");
// // x.appendChild(t);
// // document.body.appendChild(x);
//
// var x = document.getElementById("pilotText");
//   if (x.innerHTML === "Welcome onboard! Sit down and position yourself well and relax. We're about to take off") {
//     x.innerHTML = "After flying for a while, you might have arrived at your desination.";
//   } else {
//     x.innerHTML = "Welcome onboard! Sit down and position yourself well and relax. We're about to take off";
// }

function changeText() {
  console.log("button Clicked")

  var x = document.getElementById("pilotText");
  var y = document.getElementById("passengerOffboard");

  // if (x.innerHTML === "Welcome onboard! <br> <br> Sit down and position yourself well. <br> We're about to take off") {
  //   x.innerHTML = "I have arrived at my destination";
  // }

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    document.body.style.backgroundColor = 'rgb(255, 253, 247)';
  }
}
