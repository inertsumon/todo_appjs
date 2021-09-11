
const email = document.getElementById("inputEmail3");
const password = document.getElementById("inputPassword3");

document.getElementById("sign-in").addEventListener("click", function login () {
    
    if (email.value == "asad@gmail.com" && password.value == "asad") {
         window.location.href = "todo.html";
        
        console.log("success");		

    }
    else {
        console.log("bal")
    }
})
const signUpBTN = document.getElementById("sign-up").addEventListener("click", function() {
    
    const signupArea = document.getElementById("signup");
         
       signupArea.style.display = "block";
})

//show today time
setInterval(currentTime, 1000);

function currentTime() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       
    document.getElementById("today").innerText = `Date: ${date}    Time: ${time}`;   
}
