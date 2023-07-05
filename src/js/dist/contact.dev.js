"use strict";

function submissionmMessage() {
  /*
   Get Response from SERVER using AJAX.
   */

  /* document.getElementById("success").style.display = "block";
   const div = document.createElement("div");
   div.innerHTML="Success";
  // console.log(body);
   document.getElementById("contactform").style.display="none";
   const form = document.getElementById("form");
   document.form.appendChild(div);*/
  var elemDiv = document.createElement("div");
  elemDiv.innerHTML = "Submitted succesfully";
  elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;font-soze:20px';
  document.getElementById("form").appendChild(elemDiv);
  document.getElementById("contactform").style.display = "none";
}