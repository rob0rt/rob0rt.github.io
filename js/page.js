$(document).ready(callback());
$(window).resize(callback());

function callback() {
	$('#top').css({"min-height":$(window).height()});
}

$.fn.redraw = function(){
  $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};

var s = skrollr.init({
	easing: 'cubic'
});

skrollr.menu.init(s, {
	animate: true,
	duration: 1000,
    easing: 'swing' 
});