/*
    We used javascript because we felt like a website was the best way to 
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram. 
*/



document.getElementById("rewards").addEventListener("click", claimReward);

function claimReward() {
    window.open("./rewardsPopup.html");
}