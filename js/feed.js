

/*
    We used javascript because we felt like a website was the best way to
    convey the idea of the app. Javascript classes are functions, so it was difficult for us
    to create formal classes from our class diagram.
*/

function like(x) {
  x.classList.toggle("fa-thumbs-down");
  return 5;
}

module.exports = {like: like};

//lets user set a picture
function setPic(pic)
{
  var image = pic;
  if(image == null)
  {
    return 1;
  }
  return 2;
}
//module.exports = {setPic: setPic};


/*
sets the biography of a user
@returns 2 if a biography is succesfully set

*/
function setBio(words)
{
  var bio = words;
  if(typeof bio !== 'string')
  {
    return "not a valid bio";
  }
  if(bio.length > 10)
  {
    return "too many characters";
  }
  return 2;
}

function emailValidity(email)
{

}

module.exports = {setBio: setBio, 
  setPic: setPic, emailValidity: emailValidity};