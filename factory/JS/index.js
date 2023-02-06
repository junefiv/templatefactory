/*hero-scripit*/

let slide1 = document.getElementsByClassName("slide_section")[0];
let slide2 = document.getElementsByClassName("slide_section")[1];
let slide3 = document.getElementsByClassName("slide_section")[2];


window.addEventListener("scroll",function(){
  let value = window.scrollY;
  console.log("scroll", value);

  if(value < 511){
    slide1.style.animation = "appearLeft 2s ease-out forwards";
  }else{
    slide1.style.animation = "disappearRight 2s ease-out";
  }

  if(value < 911){
    slide3.style.animation = "appearLeft 2s ease-out forwards";
  }else{
    slide3.style.animation = "disappearRight 2s  ease-out";
  }

  if(value <730){
    slide2.style.animation = "appearRight 2s ease-out forwards";
  }else{
    slide2.style.animation = "disappearLeft 2s  ease-out";
  }


});

var index = 0;   //이미지에 접근하는 인덱스
window.onload = function(){
    slideShow1();
}

function slideShow1() {
var i;
var x = document.getElementsByClassName("ppt_preview");  //slide1에 대한 dom 참조
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
}
index++;
if (index > x.length) {
    index = 1;  //인덱스가 초과되면 1로 변경
}   
x[index-1].style.display = "inline-block";  //해당 인덱스는 block으로
setTimeout(slideShow1, 4000);   //함수를 4초마다 호출

}
