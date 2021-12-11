// 화면 조정시 모바일 메뉴 나타남
$(window).resize(function () {
  if (window.innerWidth >= 768) {
    $("#headernav").show();
  }
});

// 모바일 메뉴 효과 (제이쿼리)
$(function () {
  $(".mobile").click(function () {
    $("#headernav").slideToggle("slow");
  });
});

// 로고 클릭 시 웹 브라우저 새로고침
document.querySelector('.home').onclick = function () {
  location.reload();
}

// 게임소개 컨텐츠 상수 선언
const container = document.getElementById('image3dbones');
const clicktest1 = document.getElementById('click1');
const clicktest2 = document.getElementById('click2');
const clicktest3 = document.getElementById('click3');
const textbox1 = document.getElementById('asidewrapbox1');
const textbox2 = document.getElementById('asidewrapbox2');
const textbox3 = document.getElementById('asidewrapbox3');
const imageChange1 = document.getElementById('img1');
const imageChange2 = document.getElementById('img2');
const imageChange3 = document.getElementById('img3');

// 반응형 - 게임소개 컨텐츠 스크립트(PC)
if (window.matchMedia("(min-width: 1024px) and (max-width:1920px)").matches) {
  clicktest1.addEventListener("click", clickevent1);
  function clickevent1() {
    container.style.transform = "translateY(100px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(1.2)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(0.8)";
    clicktest2.style.transition = "all .5s ease-in-out";
    clicktest3.style.transform = "scale(0.8)";
    clicktest3.style.transition = "all .5s ease-in-out";
    imageChange1.style.display = "block";
    imageChange2.style.display = "none";
    imageChange3.style.display = "none";
    textbox1.style.display = "block";
    textbox2.style.display = "none";
    textbox3.style.display = "none";
  }

  clicktest2.addEventListener("click", clickevent2);
  function clickevent2() {
    container.style.transform = "translateY(0px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(0.8)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(1.2)";
    clicktest2.style.transition = "all .5s ease-in-out";
    clicktest3.style.transform = "scale(0.8)";
    clicktest3.style.transition = "all .5s ease-in-out";
    imageChange1.style.display = "none";
    imageChange2.style.display = "block";
    imageChange3.style.display = "none";
    textbox1.style.display = "none";
    textbox2.style.display = "block";
    textbox3.style.display = "none";
  }

  clicktest3.addEventListener("click", clickevent3);
  function clickevent3() {
    container.style.transform = "translateY(-100px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(0.8)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(0.8)";
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

  window.onload = function () {
    clickevent1();
  }

} else {
  clicktest1.removeEventListener("click", clickevent1);
  clicktest2.removeEventListener("click", clickevent2);
  clicktest3.removeEventListener("click", clickevent3);
}

// 반응형 - 게임소개 컨텐츠 스크립트(모바일)
if (window.matchMedia("(max-width: 380px)").matches) {
  clicktest1.addEventListener("click", mobileEvent1);
  function mobileEvent1() {
    container.style.transform = "translateX(100px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(1.0)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(0.8)";
    clicktest2.style.transition = "all .5s ease-in-out";
    clicktest3.style.transform = "scale(0.8)";
    clicktest3.style.transition = "all .5s ease-in-out";
    imageChange1.style.display = "block";
    imageChange2.style.display = "none";
    imageChange3.style.display = "none";
    textbox1.style.display = "block";
    textbox2.style.display = "none";
    textbox3.style.display = "none";
  }

  clicktest2.addEventListener("click", mobileEvent2);
  function mobileEvent2() {
    container.style.transform = "translateX(0px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(0.8)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(1.0)";
    clicktest2.style.transition = "all .5s ease-in-out";
    clicktest3.style.transform = "scale(0.8)";
    clicktest3.style.transition = "all .5s ease-in-out";
    imageChange1.style.display = "none";
    imageChange2.style.display = "block";
    imageChange3.style.display = "none";
    textbox1.style.display = "none";
    textbox2.style.display = "block";
    textbox3.style.display = "none";
  }

  clicktest3.addEventListener("click", mobileEvent3);
  function mobileEvent3() {
    container.style.transform = "translateX(-100px)";
    container.style.transition = "all .9s ease";
    clicktest1.style.transform = "scale(0.8)";
    clicktest1.style.transition = "all .5s ease-in-out";
    clicktest2.style.transform = "scale(0.8)";
    clicktest2.style.transition = "all .5s ease-in-out";
    clicktest3.style.transform = "scale(1.0)";
    clicktest3.style.transition = "all .5s ease-in-out";
    imageChange1.style.display = "none";
    imageChange2.style.display = "none";
    imageChange3.style.display = "block";
    textbox1.style.display = "none";
    textbox2.style.display = "none";
    textbox3.style.display = "block";
  }

  window.onload = function () {
    mobileEvent1();
  }

} else {
  clicktest1.removeEventListener("click", mobileEvent1);
  clicktest2.removeEventListener("click", mobileEvent2);
  clicktest3.removeEventListener("click", mobileEvent3);
}