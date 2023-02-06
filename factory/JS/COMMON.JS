/*header banner*/

const typedTextSpan = document.querySelector(".typed-banner");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "문서 작업의 해결사",
  "보고서를 손쉽게",
  "업무의 서식",
  "레포트 작업시간 단축",
  "사업의 도우미",
  "조별과제의 팀원",
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//템플릿 개수 카운트
const amount = document.getElementsByClassName("item_on").length;
console.log(amount);

document.getElementsByClassName("tmpea")[0].innerHTML = amount;
