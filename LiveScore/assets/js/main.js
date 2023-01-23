/* For header */ 
var menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach(x => {
    x.addEventListener("click", () => {
        menuItems.forEach(x => {
            x.classList.remove("active");            
        })
        x.classList.add("active");
    })

})


/* Save user email when he signs up on newsletter */

var emailInput = document.getElementById("inputEmail");
var inputSubmit = document.getElementById("inputSubmit");
var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

inputSubmit.addEventListener("click",  () => {
    
    if (regex.test(emailInput.value)) {
        localStorage.setItem("email", emailInput.value)
        alert("Emaili juaj eshte ruajtur me sukses , do te informoheni per qdo lajm te ri ne pjesen e futbollit.")
    }
    else {
        alert("Ju lutemi shikoni per gabime ne emailin tuaj");
    }
  
})


/* Date */

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();


var dateTodaySpan = document.getElementById("dateToday");
dateTodaySpan.innerHTML = "  " + (month+1) + "/" + day + "/" + year;
