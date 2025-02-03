var form=document.getElementById("form")
var username=document.getElementById("username")
var email=document.getElementById("email")
var password=document.getElementById("password")
var cpassword=document.getElementById("cpassword")

form.addEventListener("submit", (e) =>{
   
    if(!validateInput()){;
    e.preventDefault();
    }

})

function validateInput(){
    var usernameVal=username.value.trim()
    var emailVal=email.value.trim()
    var passwordVal=password.value.trim()
    var cpasswordVal=cpassword.value.trim()

    let success=true

    if(usernameVal===''){
        success=false
        setError(username, "Username Eluthu da thambi")
    }
    else{
        setSuccess(username)
    }

    if(emailVal==''){
        success=false
        setError(email, "thambi email mukiyam")
    }
    else if(!validateEmail(emailVal)){
        setError(email,"please illatha mail id podatha pa")

    }
    else{
        setSuccess(email)
    }
    if (passwordVal==''){
        success=false
        setError(password, "password podu thambi")

    }
    else if(password.length<8){
        setError(password, "thambi minimum 8 charcter")
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal ===''){
        success=false
        setError(cpassword, "thambi thirumba password podu")
    }
    else if(cpasswordVal!== passwordVal){
        setError(cpassword, "thirumba porapa correct ah podu pa thambi")
    }
    else{
        setSuccess(cpassword)
    }

    return success;
        
    
}

function setError(element,message){
    var inputGroup= element.parentElement;
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,message){
    var inputGroup= element.parentElement;
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    );
  };

  form.addEventListener("submit", (e) => {
    if (!validateInput()) {  
        e.preventDefault(); // Prevents form submission if validation fails
    } else {
        e.preventDefault(); // Even if validation succeeds, prevent form reset
       
    }
});