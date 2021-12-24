$(function () {
  $(".login").click(function (e) {
    e.preventDefault();
  });
});

// 이미지 클릭시 비디오 및 타이틀 체인지
$(function () {
  $(".logoImg1").click(function () {
    $(".video1, .gta_Title1").show();
    $(".video2, .video3, .gta_Title2, .gta_Title3").hide();
  });
  $(".logoImg2").click(function () {
    $(".video2, .gta_Title2").show();
    $(".video1, .video3, .gta_Title1, .gta_Title3").hide();
  });
  $(".logoImg3").click(function () {
    $(".video3, .gta_Title3").show();
    $(".video1, .video2, .gta_Title1, .gta_Title2").hide();
  });
});

// 비디오 비교 슬라이더 
var $wrapper = $('.ComparisonVideo');
var $clipper = $('.after');

$wrapper.on('mousemove', function (e) {
  var rect = $wrapper[0].getBoundingClientRect();
  var position = ((e.pageX - rect.left) / $wrapper[0].offsetWidth) * 100;
  $clipper.css('width', position + '%');
});

