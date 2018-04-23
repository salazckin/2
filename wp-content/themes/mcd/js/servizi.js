$(document).ready(function(){
	
	var startminus = -2;
	var startminus1 = -1;
function serviziresize()
	{
		var altezza1 = $(".block1top-serivi").height();
		$(".image-sviluppatori").css("height",altezza1-4);
	}
	
	
	setTimeout(function(){ $(window).trigger("resize"); }, 1000);
	serviziresize();
	$(".servizio").click(function(){
	
		if($(this).hasClass("aperto"))
		{
			$(this).removeClass("aperto1");
			setTimeout(function(){ 
				$(".servizio").each(function(index){
					if($(this).hasClass("aperto") && !$(this).hasClass("aperto1"))
						$(this).removeClass("aperto");
				});
			 }, 200);
		}
		else
		{
			$(this).addClass("aperto");
			setTimeout(function(){ 
				$(".servizio").each(function(index){
					if($(this).hasClass("aperto") && !$(this).hasClass("aperto1"))
						$(this).addClass("aperto1");
				});
			 }, 200);
		}
		
	});
	
	
	$(".clickdata").click(function(){
		var numerodata = $(this).attr("data-class");
		
  	  $("html, body").animate({ scrollTop: $(".servizio[data-class='"+numerodata+"']:visible").offset().top }, 500);
  	  	setTimeout(function(){ $(".servizio[data-class='"+numerodata+"']:visible").trigger("click"); }, 550);	
	
		
	});
	
	
	$( window ).resize(function() {
		startminus = -2;
		startminus1 = -1;

			serviziresize();
	});
	
	
});