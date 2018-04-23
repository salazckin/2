$(document).ready(function(){
	
	var startminus = -2;
	var startminus1 = -1;
	
	
	$(".prevbutton").click(function(e){
	
		e.preventDefault();
		history.back();
	});
	
	if($(window).width() > 960) {
		//$(".servizio.mobile").remove();
	}
	else
	{
		$(".accordion-block").removeClass("attivo");
		
		$(".inner-servizio").each(function(index){
			
			var altezzatesto = $(" .titolo-servizio",this).height()+80;
			$(this).css("max-height",altezzatesto+"px");
		});
		
	}
	
	
	setTimeout(function(){ 
$("body").addClass("removeloading");
 }, 1500);
 
	
	function minimenu(){
        var scrolled = $(window).scrollTop();
        if(scrolled > 740)
	 {
		 $("body").addClass("minimenu");
	 }
	 else
	 {
	 	$("body").removeClass("minimenu");
		$(".attivomini").removeClass("attivomini");
	 }
	} // attiva mini menu

function districtresize()
	{
		var altezza1 = $(".district-description").height();
		$(".pattern.pattern-district1").css("height",altezza1-1);
	}

function homeresize()
	{
		var altezza1 = $(".block2items").height();
		$(".pattern.pattern-vertical1").css("height",altezza1-10-startminus);
		$(".sviluppatori .block1item").css("height",altezza1-10-startminus);

		var altezza2 = $(".progetti .block1item:first-of-type").height();
		$(".progetti .block1item.galleria").css("height",altezza2);

		var altezza3 = $(".myhome-block").height();
		$(".pattern.pattern-vertical2").css("height",altezza3-1-startminus1);
	} // resize altezze home
	
	$("select.wpcf7-form-control.wpcf7-select option:first").text("Qualifica");
	$("html[lang='en-US'] select.wpcf7-form-control.wpcf7-select option:first").text("Title");
	
	
	if($(window).width() >968)
	$("select.wpcf7-form-control.wpcf7-select option:first").attr("disabled","disabled");
	
	minimenu(); 
	$("div#mini-menu").css("width",$("#right-block-menu").width()+4); // larghezza mini menu
	
	
	$(".title-tech-accordion1").click(function(){
	$("html, body").animate({ scrollTop: $(".block.firstbrand").offset().top }, 500);	
	});
	$(".accordion-brand-container").click(function(){
	$("html, body").animate({ scrollTop: $(".block.secondbrand").offset().top-4 }, 500);	
	});
	
	$(".title-social-block").click(function(){ // brand home

		if($(".social-block").hasClass("attivo"))
		{
			$(".social-block").removeClass("attivo");
		}
		else
		{
			$(".social-block").addClass("attivo");
		}
	
	});
	
	$(".menu-mobile-click").click(function(){ // brand home

		if($(".menu-mobile-list").hasClass("attivo"))
		{
			$(".menu-mobile-list").removeClass("attivo");
		}
		else
		{
			$(".menu-mobile-list").addClass("attivo");
		}
	
	});
	
	
	if($("body").hasClass("home"))
	{
		if($("#splash-home").length > 0)
		{
			$("html").css("overflow","hidden");
			setTimeout(function(){ $(window).trigger("resize");
		$("#splash-home").addClass("anima");
		setTimeout(function(){ 
	$("#splash-home").addClass("anima1");
		setTimeout(function(){ 
	$("#splash-home").addClass("anima2");
		setTimeout(function(){ 
	$("#splash-home").addClass("anima3");
	$("html").addClass("autoover");
	$("html").css("overflow","auto");
	$(window).trigger("resize");
	 }, 1000);
	 }, 4500);
	 }, 1000);
 
		 }, 1000);
		}
		else
		{
			$("html").addClass("autoover");
			$("html").css("overflow","auto");
			setTimeout(function(){ 
		$(window).trigger("resize");
		 }, 2000);
				
		}
		homeresize();
		
		$(".gallery").bxSlider({
  mode: 'horizontal',
  touchEnabled: false
});
		$(".gallery-slider-container").bxSlider({
  mode: 'horizontal',
  touchEnabled: false
});
$(".close-galley-single").click(function(){
	$("body").removeClass("videooverlay-block");
});	

$(".video-overlay").click(function(){
	$("body").addClass("videooverlay-block");
});





	
		$("#text-menu span").click(function(){ // brand home
		
			if($("#brands-home").hasClass("attivo"))
			{
				$("#brands-home").removeClass("attivo");
				$("#brands-home").removeAttr("style");
			}
			else
			{
				$("#brands-home").addClass("attivo");
				$("#brands-home").css("height",$("#inner-brands-home").outerHeight());
			}
			
		});
		
		$(".close").click(function(){ // chiudi brand home
				$("#brands-home").removeClass("attivo");
				$("#brands-home").removeAttr("style");
		});
	}
	
	if($("body").hasClass("page-template-district")) // se pagina district
	{
		$(".testo-accordion").css("max-height","30px");
		$(".attivo .testo-accordion").css("max-height",$(".accordion-block:first-of-type .testo-accordion .inner-testo-accordion").height());
		$(".attivo .testo-accordion").css("height",$(".accordion-block:first-of-type .testo-accordion .inner-testo-accordion").height());
		
		$(".gallery-block-accordion,.gallery-block-brand").bxSlider({
  mode: 'horizontal',
			touchEnabled: false
});

		districtresize();
		
		$(".firstbrand .inner-left-col-brand").bxSlider({
  mode: 'horizontal',
  touchEnabled: false,
			onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			    $('.firstbrand .brand-district').removeClass('attivo');
			    $('.firstbrand .brand-district').eq(currentSlideHtmlObject+1).addClass('attivo');
				$(".firstbrand .brand-district.attivo").trigger("click");
			  }
});
		$(".secondbrand .inner-left-col-brand").bxSlider({
  mode: 'horizontal',
  touchEnabled: false,
			onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			    $('.secondbrand .brand-district').removeClass('attivo');
			    $('.secondbrand .brand-district').eq(currentSlideHtmlObject+1).addClass('attivo');
				$(".secondbrand .brand-district.attivo").trigger("click");
			  }
});
		
		$(".single-menu").hover(
		  function(e) {
			  e.preventDefault();
			  if(!$(this).hasClass("attivo-menu"))
			  {
			  $( ".image-map2" ).stop();
  			$(".single-menu").removeClass("attivo-menu");
  			$(this).addClass("attivo-menu");
  		    $imgURL = $(" .menu-image",$(this)).attr("src");
  		    $(".image-map2")
  		        .fadeOut(0, function() {
  		            $(".image-map2").attr('src',$imgURL);
  		        })
  		        .fadeIn(400);
			}
		  }, function() {
		   
		  }
		);
		
		$(".single-menu").click(function(e) {
			$(".single-menu").removeClass("attivo-menu");
			$(this).addClass("attivo-menu");
		    e.preventDefault();
		    $imgURL = $(" .menu-image",$(this)).attr("src");
		    $(".image-map2")
		        .fadeOut(400, function() {
		            $(".image-map2").attr('src',$imgURL);
		        })
		        .fadeIn(400);
		});
		
		$(".testo-accordion").click(function(){
		
			if($(this).parent().parent().hasClass("attivo"))
			{
				if($(window).width() < 961) {
					$(".accordion-block").removeClass("attivo");
					$(".testo-accordion").css("max-height","30px");
				}
			}
			else
			{
				if($(window).width() > 960) {
					$(".accordion-block").removeClass("attivo");
					$(".testo-accordion").css("max-height","30px");
				}
				
				$(this).parent().parent().addClass("attivo");
				$(this).css("max-height",$(" .accordion-block:first-of-type .inner-testo-accordion").height());
				$(this).css("height",$(" .accordion-block:first-of-type .inner-testo-accordion").height());
			}
			
		});
		
		function getUrlVars() {
		    var vars = {};
		    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
		    function(m,key,value) {
		      vars[key] = value;
		    });
		    return vars;
		  }
		
		
		
		$(".secondbrand .brand-district").click(function(){
		 	$(".secondbrand .brand-district").removeClass("attivo");
			$(".secondbrand .inner-right-col-brand").addClass("load");
			$(this).addClass("attivo");
			var dataid = $(this).attr("data-id");
			$(".secondbrand .inner-inner-right-col-brand").html("");
			$.ajax({ type: "POST",
	 	       url: window.location.protocol+"//"+window.location.host+"/brand-loading",
	 	       data: { dataid : dataid},
	 	       success: function(data) { 
				    setTimeout(function(){   
				   $(".secondbrand .inner-right-col-brand").removeClass("load");
				  $(".secondbrand .inner-inner-right-col-brand").html(data).hide().fadeIn(500); 
			  		$(".secondbrand .gallery-block-brand").bxSlider({
			   		 mode: 'horizontal',
						touchEnabled: false
			 	   });
		  }, 500);
	 	       }
	 	    }); 
		});
		
		$(".firstbrand .brand-district").click(function(){
		 	$(".firstbrand .brand-district").removeClass("attivo");
			$(".firstbrand .inner-right-col-brand").addClass("load");
			$(this).addClass("attivo");
			var dataid = $(this).attr("data-id");
			$(".firstbrand .inner-inner-right-col-brand").html("");
			$.ajax({ type: "POST",
	 	       url: window.location.protocol+"//"+window.location.host+"/brand-loading",
	 	       data: { dataid : dataid},
	 	       success: function(data) {   
				   setTimeout(function(){ 
				   $(".firstbrand .inner-right-col-brand").removeClass("load");
				  $(".firstbrand .inner-inner-right-col-brand").html(data).hide().fadeIn(500); 
		  		$(".firstbrand .gallery-block-brand").bxSlider({
		   		 mode: 'horizontal',
					touchEnabled: false
		 	   });
			   }, 500);
	 	       }
	 	    }); 
		});
		
	  var fType = getUrlVars()["idbrand"];
	  if(fType)
	  {
		  setTimeout(function(){ $("html, body").animate({ scrollTop: $(".block.firstbrand").offset().top }, 500);	}, 1500);
		  $(".brand-district[data-id='"+fType+"']").trigger("click");
	  }
		
	}
	
	
	
	
	//se slider sviluppatore RE imprese e aziende
	if($(".single-slide").length > 0)
	{
		$(".inner-slider-block-template").bxSlider({
 		    mode: 'horizontal',
			touchEnabled: false,
			adaptiveHeight: true,
			onSlideAfter: function() {
				$(".currentnumber").text($(".bx-pager-item .active").text());
			     }
});

$(window).scroll(function(){

    var scrolled = $(window).scrollTop();
    if(scrolled > $(".slider-block-template").offset().top-$(window).height()+100)
 {
	 $("body").addClass("attivoopacity");
 }

  });

	}
	
	
	$(".block-first-menu .titolo-mini").click(function(){ // apri minimenu
		if($(".first-block-mini-menu").hasClass("attivomini"))
			$(".first-block-mini-menu").removeClass("attivomini");
		else
			$(".first-block-mini-menu").addClass("attivomini");
	});
	
	$(".block-second-menu").click(function() { //scrolla a appuntamento
	  $("html, body").animate({ scrollTop: $(".downmenu.appuntamento").offset().top }, 500);
	  if(!$("#inner-footer").hasClass("attivoapp"))
	  {
	  	setTimeout(function(){ $(".downmenu.appuntamento").trigger("click"); }, 550);	
	  }
	});
	
	$(".downmenu.appuntamento").click(function() {
		if($("#inner-footer").hasClass("attivoapp")){
			$("#inner-footer").removeClass("attivoapp");
			setTimeout(function(){ $(".dropdown-app").css("display","none"); }, 550);
		}
		else
		{
			if($("#inner-footer").hasClass("attivolav"))
			{
				$("#inner-footer").removeClass("attivolav");
				setTimeout(function(){ $(".dropdown-lavora").css("display","none");
				$("#inner-footer").addClass("attivoapp");
				$(".dropdown-app").css("display","block");
			}, 550);
	
			}
			else
			{
				$("#inner-footer").addClass("attivoapp");
				$(".dropdown-app").css("display","block");
			}
			
		}
	});
	
	$(".downmenu.lavora").click(function() {
		if($("#inner-footer").hasClass("attivolav"))
		{
			$("#inner-footer").removeClass("attivolav");
			setTimeout(function(){ $(".dropdown-lavora").css("display","none"); }, 550);
		}
		else
		{
			if($("#inner-footer").hasClass("attivoapp"))
			{
				$("#inner-footer").removeClass("attivoapp");
				setTimeout(function(){ $(".dropdown-app").css("display","none");
				$("#inner-footer").addClass("attivolav");
				$(".dropdown-lavora").css("display","block");	
			
			}, 550);
			}
			else
			{
			$("#inner-footer").addClass("attivolav");	
			$(".dropdown-lavora").css("display","block");
			}
			
		}
	});
	
	
	if($("body").hasClass("single")) {
		$(".gallery-menu-block").click(function(){
		
			$("html").addClass("gallery-attivo");
			
		});
	}
	
	if($(".image-single").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".image-single").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("attivoopacity");
		 }

		  });
	}
	
	if($(".gallery-accordion").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".gallery-accordion").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("attivoopacity");
		 }

		  });
	}
	
	if($(".gallery-accordion").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".gallery-accordion").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("attivoopacity");
		 }

		  });
	}
	
	if($(".secondbrand").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".secondbrand").offset().top-$(window).height()+500)
		 {
			 $("body").addClass("attivoopacitybrand2");
		 }

		  });
	}
	
	if($(".firstbrand").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".firstbrand").offset().top-$(window).height()+500)
		 {
			 $("body").addClass("attivoopacitybrand");
		 }

		  });
	}
	
	if($(".block.progetti").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".block.progetti").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("gallery-homeopacity");
		 }

		  });
	}
	
	if($(".image-svg-sviluppatori").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".image-svg-sviluppatori").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("sviluppatoriopacity");
		 }

		  });
	}
	
	
	var once = true;
	if($(".gallery-slider-container").length > 0)
	{
		$(window).scroll(function(){

		    var scrolled = $(window).scrollTop();
		    if(scrolled > $(".gallery-slider-container").offset().top-$(window).height()+100)
		 {
			 $("body").addClass("homefirstopacity");
			 if(once)
			 {
				 if($('.video-single').length > 0)
			 		$('.video-single').get(0).play();	
			 once = false;	
			 }
		 }

		  });
	}
	
	
	
	$( window ).resize(function() {
		$("div#mini-menu").css("width",$("#right-block-menu").width()+4);
		startminus = -2;
		startminus1 = -1;
		if($("body").hasClass("home"))
		{
			homeresize();
			if($("#brands-home").hasClass("attivo"))
			$("#brands-home").css("height",$("#inner-brands-home").outerHeight());
		}
		if($("body").hasClass("page-template-district")) // se pagina district
		{
			districtresize();
		}
		
		if($(window).width() > 960) {
			$(".inner-servizio").removeAttr('style');
		}
		else
		{		
			$(".inner-servizio").each(function(index){
			
				var altezzatesto = $(" .titolo-servizio",this).height()+80;
				$(this).css("max-height",altezzatesto+"px");
			});
		
		}
		
	});
	
	
    $(window).scroll(function(){
		if($("body").hasClass("page-id-19"))
		{
			$("body").addClass("scrolled");
		}
        minimenu();

      });
});