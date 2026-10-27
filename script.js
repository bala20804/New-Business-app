alert("hii");

let menuIcon = document.getElementById("mobileicon");
let Menus = document.getElementById("menuItem");


menuIcon.addEventListener("click", () => {

    Menus.classList.toggle("open");

    if (Menus.classList.contains("open")) {
        menuIcon.classList.add("bi-x-circle-fill");
        menuIcon.classList.remove("bi-menu-up");
    } 
    else {
        menuIcon.classList.add("bi-menu-up");
        menuIcon.classList.remove("bi-x-circle-fill");
    }
});



let myFormData = document.getElementById("myform");

myFormData.addEventListener("submit", (userData) => {

    userData.preventDefault();

   
    let userName = document.getElementById("clientname").value.trim();
    let userMobile = document.getElementById("clientmobile").value.trim();
    let userEmail = document.getElementById("clientemail").value.trim();
    let userMessage = document.getElementById("cmessages").value.trim();

    
    let Errname = document.getElementById("nameErr");
    let Errmobile = document.getElementById("mobileErr");
    let Erremail = document.getElementById("emailErr");
    let Errmessage = document.getElementById("messageErr");

    let isValid = true;
    if (!userName) {
        Errname.textContent = "Please fill the name";
        isValid = false;
    } 
    else {
        Errname.textContent = "";
    }
    const mobilePattern = /^[789][0-9]{9}$/;

    if (!userMobile) {
        Errmobile.textContent = "Please fill the mobile number";
        isValid = false;
    } 
    else if (!mobilePattern.test(userMobile)) {
        Errmobile.textContent = "Please enter a valid 10-digit mobile number";
        isValid = false;
    } 
    else {
        Errmobile.textContent = "";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!userEmail) {
        Erremail.textContent = "Please fill the email";
        isValid = false;
    } 
    else if (!emailPattern.test(userEmail)) {
        Erremail.textContent = "Please enter a valid email";
        isValid = false;
    } 
    else {
        Erremail.textContent = "";
    }
    if (!userMessage) {
        Errmessage.textContent = "Please fill the feedback";
        isValid = false;
    } 
    else {
        Errmessage.textContent = "";
    }
    if (isValid) {

        const userInfo = {
            username: userName,
            userMobile: userMobile,
            userEmail: userEmail,
            userMessage: userMessage
        };

        console.log(userInfo);

        alert("Data saved in console");

        myFormData.reset();
    }

});