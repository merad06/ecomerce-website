var slideImg = document.getElementById("slideImg")
var images = new Array(
    "/images/categ1.png",
    "/images/categ2.png",
    "/images/decor3.png");
var long = images.length
var i = 0
function slider(){
    if(i> long-1){
        i = 0
    }
    slideImg.src= images[i]
    i++
    setTimeout('slider()',3000)
}
slider()
