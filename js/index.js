$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


document.getElementById("login").addEventListener("click", test);
document.getElementById("create").addEventListener("click", test);

function test(form) {
    window.open("file:///Users/BaileySpell/Documents/OneDrive%20-%20Virginia%20Tech/Spring2019/software%20engineering/FinalCode/feedLogin.html");
    // alert("getting the click");
}



function like(x) {
    x.classList.toggle("fa-thumbs-down");
  }


document.getElementById("info").innerHTML = "";

//sets the image
var image = "https://www.google.com/imgres?imgurl=https://vignette.wikia.nocookie.net/edwikia/images/e/e6/Ed%2527s_Full_Shot.png/revision/latest?cb%3D20130218123223&imgrefurl=http://ed.wikia.com/wiki/Ed&h=252&w=174&tbnid=6h84UgKvpfp0GM&q=ed+from+ed+edd+and+eddy&tbnh=111&tbnw=77&usg=AI4_-kTHuQlt9CAjvR1nLXmS3ZsKWQOTug&vet=1&docid=o-8_ydHBB3pLnM&itg=1&sa=X&ved=2ahUKEwievIy8_-nhAhVqUN8KHS3JBWMQ_h0wAXoECAsQBA";
function setPic(pic) 
{
  image = pic;
  return 2;

}