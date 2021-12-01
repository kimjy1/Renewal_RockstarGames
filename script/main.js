// 로고 클릭 시 웹 브라우저 새로고침
document.querySelector('.home').onclick = function () {
  location.reload();
}

// 웹 브라우저 시작 시 함수 실행
window.onload = function () {
  clickevent1();
}

// 게임소개 컨텐츠 중 가운데 스크립트 시작
const container = document.getElementById('image3dbones');
const clicktest1 = document.getElementById('click1');
const imageChange1 = document.getElementById('img1');
const textbox1 = document.getElementById('asidewrapbox1');
const textbox2 = document.getElementById('asidewrapbox2');
const textbox3 = document.getElementById('asidewrapbox3');

clicktest1.addEventListener("click", clickevent1);
function clickevent1() {
  container.style.alignContent = "flex-end";
  clicktest1.style.transform = "scale(1.2)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(0.9)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(0.9)";
  clicktest3.style.transition = "all .5s ease-in-out";
  imageChange1.style.display = "block";
  imageChange2.style.display = "none";
  imageChange3.style.display = "none";
  textbox1.style.display = "block";
  textbox2.style.display = "none";
  textbox3.style.display = "none";
}

const clicktest2 = document.getElementById('click2');
const imageChange2 = document.getElementById('img2');
clicktest2.addEventListener("click", clickevent2);
function clickevent2() {
  container.style.alignContent = "center";
  clicktest1.style.transform = "scale(0.9)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(1.2)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(0.9)";
  clicktest3.style.transition = "all .5s ease-in-out";
  imageChange1.style.display = "none";
  imageChange2.style.display = "block";
  imageChange3.style.display = "none";
  textbox1.style.display = "none";
  textbox2.style.display = "block";
  textbox3.style.display = "none";
}

const clicktest3 = document.getElementById('click3');
const imageChange3 = document.getElementById('img3');
clicktest3.addEventListener("click", clickevent3);
function clickevent3() {
  container.style.alignContent = "flex-start";
  clicktest1.style.transform = "scale(0.9)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(0.9)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(1.2)";
  clicktest3.style.transition = "all .5s ease-in-out";
  imageChange1.style.display = "none";
  imageChange2.style.display = "none";
  imageChange3.style.display = "block";
  textbox1.style.display = "none";
  textbox2.style.display = "none";
  textbox3.style.display = "block";
}
// 게임소개 컨텐츠 중 가운데 스크립트 시작

