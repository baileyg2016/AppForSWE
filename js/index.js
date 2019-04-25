/*
    We used javascript because we felt like a website was the best way to
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram.
*/


document.getElementById("login").addEventListener("click", test);
document.getElementById("create").addEventListener("click", test);

function test(form) {
    window.open("./feedLogin.html");
    // alert("getting the click");
}



function like(x) {
    x.classList.toggle("fa-thumbs-down");
}


document.getElementById("info").innerHTML = "";

//sets the image

function setPic(pic)
{
  var image = pic;
  document.getElementById("profilePic").innerHTML = "";
  return 2;
}


function setCaption(cap)
{
    var caption = cap;
    document.getElementById("caption").innerHTML = "Caption saved!";
    return 3;
}




function saveEdits() {

    //get the editable element
    var editElem = document.getElementById("edit");

    //get the edited element content
    var userVersion = editElem.innerHTML;

    //save the content to local storage
    localStorage.userEdits = userVersion;

    //write a confirmation to the user
    document.getElementById("update").innerHTML="Edits saved!";

    }

    function checkEdits() {

      //find out if the user has previously saved edits
      if(localStorage.userEdits!=null)
      document.getElementById("edit").innerHTML = localStorage.userEdits;
      }

document.getElementById("solo").addEventListener("click", goToProfile);

function goToProfile() {
    alert("Getting the click");
    window.open("file:///Users/BaileySpell/Documents/OneDrive%20-%20Virginia%20Tech/Spring2019/software%20engineering/FinalCode/soloProfile.html");

}
