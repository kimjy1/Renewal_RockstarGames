document.querySelector('.home').onclick = function () {
  location.reload();
}

window.onload = function () {
  clickevent1();
}

const container = document.getElementById('image3dbones');

const clicktest1 = document.getElementById('click1');
clicktest1.addEventListener("click", clickevent1);
function clickevent1() {
  container.style.alignContent = "flex-end";
  clicktest1.style.transform = "scale(1.2)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(0.9)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(0.9)";
  clicktest3.style.transition = "all .55s ease-in-out";
}

const clicktest2 = document.getElementById('click2');
clicktest2.addEventListener("click", clickevent2);
function clickevent2() {
  container.style.alignContent = "center";
  clicktest1.style.transform = "scale(0.9)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(1.2)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(0.9)";
  clicktest3.style.transition = "all .5s ease-in-out";
}

const clicktest3 = document.getElementById('click3');
clicktest3.addEventListener("click", clickevent3);
function clickevent3() {
  container.style.alignContent = "flex-start";
  clicktest1.style.transform = "scale(0.9)";
  clicktest1.style.transition = "all .5s ease-in-out";
  clicktest2.style.transform = "scale(0.9)";
  clicktest2.style.transition = "all .5s ease-in-out";
  clicktest3.style.transform = "scale(1.2)";
  clicktest3.style.transition = "all .5s ease-in-out";
}