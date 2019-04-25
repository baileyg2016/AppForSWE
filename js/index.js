/*
    We used javascript because we felt like a website was the best way to
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram.
*/
if (process.env.NODE_ENV !== 'test') {
    $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
}
if (process.env.NODE_ENV !== 'test') {
    document.getElementById("login").addEventListener("click", test);
    document.getElementById("create").addEventListener("click", test);
}
function test(form) {
    window.open("./feedLogin.html");
    // alert("getting the click");
}



function like(x) {
    x.classList.toggle("fa-thumbs-down");
}

if (process.env.NODE_ENV !== 'test') {
    document.getElementById("info").innerHTML = "";
}

//sets the image

function setPic(pic)
{
  var image = pic;
  document.getElementById("profilePic").innerHTML = "";
  return 2;
}
module.exports = setPic;


function setCaption(cap)
{
    var caption = cap;
    document.getElementById("caption").innerHTML = "Caption saved!";
    if(cap == null)
    {
        return 2;
    }
    return 3;
}
module.exports = setCaption;




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
      if (process.env.NODE_ENV !== 'test') {
        document.getElementById("solo").addEventListener("click", goToProfile);
      }

function goToProfile() {
    alert("Getting the click");
    window.open("./soloProfile.html");

}


var el1 = document.getElementById("login");
if (el1) {
   el1.addEventListener("click", login);
}
var el2 = document.getElementById("create");
if (el2) {
   el2.addEventListener("click", create);
}

var userCount = 0;
var users = Array(5);

function login(form) {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if (username == '' || password == '' || !validateUser(username, password)) {
         document.getElementById('alert').innerHTML = 'Enter a valid Username and Password';
      }      
      else {
         window.open("file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html");
      }
}

function create(form) {
   var validEmail = false;
   var validPassword = false;
   var firstName;
   if (document.getElementById('firstName')) {
      firstName = document.getElementById('firstName').value;
   }
   var lastName;
   if (document.getElementById('lastName')) {
       lastName = document.getElementById('lastName').value;
   }
   var displayName;
   if (document.getElementById('DisplayName')) {
      var displayName = document.getElementById('DisplayName').value;
   }   
   var email;
   if (document.getElementById('email')) {
      email = document.getElementById('email').value;
      validEmail = validateEmail(email);
   }

   var password;
   if (document.getElementById('passwordC')) {
      passowrd = document.getElementById('passwordC').value;
      validPassword = validatePassword(password);
   }
      
   if (!validEmail || !validPassword || firstName == '' || lastName == '' || displayName == '') {
      if (document.getElementById('alertC')) {
         document.getElementById('alertC').innerHTML = 'Enter a valid informaiton';
      }
   }
   else {
      createUser(firstName, lastName, displayName, password, email, userCount);
      printUsers();
      window.open("file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html");
     
   }
}

function getUsers() {
   return users;
}

function getCount() {
   return userCount;
}

function setCount(x) {
   userCount = x;
}

function reset() {
   setCount(0);    
}

function printUsers() {
   for (i = 0; i < userCount; i++) {
      console.log(users[i].fullName());
      console.log(users[i].dispName);
   }
}

function createUser(firstName, lastName, displayName, password, email) {
    var person = {
         first: firstName,
         last : lastName,
         dispName : displayName,
         pass     : password,
         mail     : email,
         id       : userCount,
         fullName : function() {
         return this.first + " " + this.last;
         },
         getid : function() {
            return this.id;
         },
         getMail : function() {
            return this.mail;
         },
         getDisp : function() {
            return this.dispName;
         }
      };
   this.getUsers()[userCount++] = person;
   
   //return person;
}

function validateEmail(x) {
   //Make sure it has an @
   var amp = false;
   for (var i = 0; i < x.length; i++) {
      if(x.charAt(i) == "@") {
         amp = true;
      }
   }
    //Make sure it is not a repeat email
   for (i = 0; i < userCount; i++) {
      //console.log(getUsers()[i].mail + " vs " + x);
      if (users[i].mail == x) {
         return false;
      }
   }
   return amp;
}

function validatePassword(x) {
   return x.length >= 4
}

function validateUser(x, y) {
   for (i = 0; i < userCount; i++) {
      if (users[i].dispName == x && users[i].pass == y) {
         //console.log("Valid user")
         return true;
      }
   }
   return false;   
}


 var el3 = document.getElementById("info");
 if (el3) {
    el3.innerHTML = "";
 }
 
 module.exports = {
   getUsers : getUsers, 
   getCount : getCount,
   setCount : setCount,
   reset : reset,
   users : users,
   login : login,
   create : create,
   getCount : getCount,
   printUsers : printUsers,
   createUser : createUser,
   validateEmail : validateEmail,
   validatePassword : validatePassword,
   validateUser : validateUser
};