//.value captures the user input
let loginbtn=document.getElementById("button");

loginbtn.addEventListener("submit", function(event){

  event.preventDefault()//prevents the default form submission(form validation,form verification)
  let username=document.getElementById("uname").value;
  let email=document.getElementById("uemail").value;

})
//form validation-a
//form submission-b
//form redirection-c
//regular expression-grup d(yours truly)
//event object