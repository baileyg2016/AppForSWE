
function likePhoto(prevState)
{
    var liked = prevState;
    liked = "true";
    return liked;
}

function likeAfterLike(prevState)
{
  var liked = prevState;
  liked = "false"
  return liked;
}

function likeAfterUnlike(prevState)
{
    var liked = prevState;
    liked = "true"
    return liked;
}

module.exports = {likePhoto, likeAfterLike, likeAfterUnlike};