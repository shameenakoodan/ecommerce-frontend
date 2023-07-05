function signUpMessage() {
  const email1 = document.signup.email.value; 
  const email2 = document.signup.email2.value;
  if(email1 === email2){
    document.getElementById("signup").style.display="none";
    document.getElementById("success").style.display="block";
  }
  else{
    document.signup.email2.value="";
    document.signup.email2.placeholder="Emails don't match";
    document.signup.email2.style.borderColor ="red";
  }
}
  