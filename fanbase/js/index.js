	
/* lazyload */
!function(e,t,o,n){var i=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var o=e(this);if(!h.skip_invisible||o.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else o.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(n!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),n!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===n||h.container===t?i:e(h.container),0===h.event.indexOf("scroll")&&a.on(h.event,function(){return f()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,o.attr("src")!==n&&o.attr("src")!==!1||o.is("img")&&o.attr("src",h.placeholder),o.one("appear",function(){if(!this.loaded){if(h.appear){var n=l.length;h.appear.call(t,n,h)}e("<img />").one("load",function(){var n=o.attr("data-"+h.data_attribute);o.hide(),o.is("img")?o.parent().css("background-image","url('"+n+"')"):o.css("background-image","url('"+n+"')"),o[h.effect](h.effect_speed),t.loaded=!0;var i=e.grep(l,function(e){return!e.loaded});if(l=e(i),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",o.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&o.on(h.event,function(){t.loaded||o.trigger("appear")})}),i.on("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.on("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(o).ready(function(){f()}),this},e.belowthefold=function(o,r){var f;return f=r.container===n||r.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(o).offset().top-r.threshold},e.rightoffold=function(o,r){var f;return f=r.container===n||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(o).offset().left-r.threshold},e.abovethetop=function(o,r){var f;return f=r.container===n||r.container===t?i.scrollTop():e(r.container).offset().top,f>=e(o).offset().top+r.threshold+e(o).height()},e.leftofbegin=function(o,r){var f;return f=r.container===n||r.container===t?i.scrollLeft():e(r.container).offset().left,f>=e(o).offset().left+r.threshold+e(o).width()},e.inviewport=function(t,o){return!(e.rightoffold(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);
/* end lazyload */


/* font */
$(window).load(function(){
  WebFontConfig = {
    google: { families: [ 'Signika:400,500,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});
/* end font */



/* header & menu */
$(".mobile-menu-button > .fa").click(function() {
  $(".nav, .nav-overlay").slideToggle(300, function(){});	
  $(this).toggleClass('open');
});

$(".nav-overlay").click(function() {
  $(".nav, .nav-overlay").slideUp(300);
  $(".mobile-menu-button > .fa").removeClass('open');
});
/* end header & menu */



/* flex thumbnail */
var flex_thumb = function(){
	$(".flex_thumb").each(function() {
		$(this).find("img").css("opacity",0);
		var $source = $(this).find("img").attr("src");
		$(this).css({
		  'backgroundImage':'url(' + $source +')'
		});
	});
}
$(document).ready(function() { 
  flex_thumb();
}); 
/* end flex thumbnail */


// ActionScript Document
$(document).ready(function() {
	
	//BEGIN TABS TERUNGGUL RIGHT...
	$(".tab_content_tabulasi-detail").hide(); //Hide all content
	//$("ul.tabulasi-detail li:first").addClass("active").show(); //Activate first tab
	$(".tab_content_tabulasi-detail.active").show(); //Show first tab content

	//On Click Event Tabs Left
	$("ul.tabulasi-detail li").click(function() {

		$("ul.tabulasi-detail li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content_tabulasi-detail").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});	
	//END TABS TERUNGGUL RIGHT...
	
	//BEGIN TABS terpopuler RIGHT...
	$(".tab_content_terpopuler").hide(); //Hide all content
	$("ul.tabs_terpopuler li:first").addClass("active").show(); //Activate first tab
	$(".tab_content_terpopuler:first").show(); //Show first tab content

	//On Click Event Tabs Left
	$("ul.tabs_terpopuler li").click(function() {

		$("ul.tabs_terpopuler li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content_terpopuler").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});	
	//END TABS terpopuler RIGHT...
	
	
	
	//BEGIN TABS terpopuler-MOBILE RIGHT...
	$(".tab_content_terpopuler-mobile").hide(); //Hide all content
	$("ul.tabs_terpopuler-mobile li:first").addClass("active").show(); //Activate first tab
	$(".tab_content_terpopuler-mobile:first").show(); //Show first tab content

	//On Click Event Tabs Left
	$("ul.tabs_terpopuler-mobile li").click(function() {

		$("ul.tabs_terpopuler-mobile li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content_terpopuler-mobile").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;


	});	

	//On Click Event scroll
	$("ul.tabs_terpopuler-mobile.scroll li").click(function() {
		$("html, body").animate({scrollTop: $("#myDiv").offset().top }, 390);// scroll on page --<
		$("ul.tabs_terpopuler-mobile li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content_terpopuler-mobile").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
		


	});	
	//END Click Event scroll...
	
	

});



