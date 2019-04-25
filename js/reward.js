/*
    We used javascript because we felt like a website was the best way to 
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram. 
*/

if (process.env.NODE_ENV !== 'test') {
    document.getElementById("rewards").addEventListener("click", claimReward);
}

function claimRewards() {
    if (window.open("./rewardsPopup.html") != null) {
        console.log(true)
        return true;
    }
    else {
        return false;
    }
}

module.exports = claimRewards;