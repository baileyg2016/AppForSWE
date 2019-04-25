/*
    We used javascript because we felt like a website was the best way to 
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram. 
*/


document.getElementById("login").addEventListener("click", test);
document.getElementById("create").addEventListener("click", test);

function test(form) {
    window.open("file:///Users/BaileySpell/Documents/OneDrive%20-%20Virginia%20Tech/Spring2019/software%20engineering/FinalCode/feedLogin.html");
    // alert("getting the click");
}



function like(x) {
    x.classList.toggle("fa-thumbs-down");
}


document.getElementById("solo").addEventListener("click", goToProfile);

function goToProfile() {
    alert("Getting the click");
    window.open("file:///Users/BaileySpell/Documents/OneDrive%20-%20Virginia%20Tech/Spring2019/software%20engineering/FinalCode/soloProfile.html");
}