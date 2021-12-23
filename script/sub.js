$(function () {
  $(".login").click(function (e) {
    e.preventDefault();
  });
});

var $wrapper = $('.ComparisonVideo');
var $clipper = $('.after');

$wrapper.on('mousemove', function (e) {
  var rect = $wrapper[0].getBoundingClientRect();
  var position = ((e.pageX - rect.left) / $wrapper[0].offsetWidth) * 100;
  $clipper.css('width', position + '%');
});