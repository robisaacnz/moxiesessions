$(function() {
	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });

// Blog current menu
	var url = window.location.pathname.split( '/' );

	if(url.indexOf("session") > -1) {
		$(".menu-item-766").addClass("current-menu-item");
	}

	if(url.indexOf("speaker") > -1) {
		$(".menu-item-765").addClass("current-menu-item");
	}

	$('.theme-list a').each(
		function(i) {
			var classes = this.className.split(/\s+/);
			for (var i=0,len=classes.length; i<len; i++){
				if ($('body').hasClass(classes[i])){
					$(this).addClass('current-sidebar-item');
				}
			}
	});

	$('.youtube').fitVids();

	$('.click-reveal').click(function(e) {
		e.preventDefault();
		var target_item = $(this).attr('data-target_item');
		$('.reveal[data-item=' + target_item + ']').slideToggle(100);
	});
});