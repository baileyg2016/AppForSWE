

/*
    We used javascript because we felt like a website was the best way to
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram.
*/

function like(x) {
  x.classList.toggle("fa-thumbs-down");
  return 5;
}

exports.like = like;


function setPic(pic)
{
  var image = pic;
  // document.getElementById("profilePic").innerHTML = "";
  return 2;
}
module.exports = {setPic: setPic};
