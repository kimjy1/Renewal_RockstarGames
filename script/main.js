document.querySelector('.home').onclick = function () {
  location.reload();
}

const test1 = document.getElementsByClassName('click1');
for (var i = 0; i < test1.length; i++) {
  test1[i].style.transform = "scale(1.1)";
}