$(document).ready(function(){
	
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	
	var url_push = location.protocol + '//' + location.host + location.pathname;
	
	$(".filtro.area").click(function(){
		if(!$(this).hasClass("aperto"))
		{
			if($(".filtro.filtrobrand").hasClass("aperto"))
			{
				$(".filtro.filtrobrand,.pattern.pattern-progetti1,.filtro-brand").removeClass("aperto");
				setTimeout(function(){
				 $(".filtro.area,.pattern.pattern-progetti1,.filtro-area-geografica:visible").addClass("aperto");
				}, 500);
			}
			else
			{
			$(".filtro.area,.pattern.pattern-progetti1,.filtro-area-geografica:visible").addClass("aperto");	
			}
			
		}
		else
		{
			$(".filtro.area,.pattern.pattern-progetti1,.filtro-area-geografica:visible").removeClass("aperto");
		}
		
		
	});
	
	$(".filtro.filtrobrand").click(function(){
		if(!$(this).hasClass("aperto"))
		{
			if($(".filtro.area").hasClass("aperto"))
			{
				$(".filtro.area,.pattern.pattern-progetti1,.filtro-area-geografica").removeClass("aperto");
				setTimeout(function(){
				 $(".filtro.filtrobrand,.pattern.pattern-progetti1,.filtro-brand").addClass("aperto");	
				}, 500);
			}
			else
			{
			 $(".filtro.filtrobrand,.pattern.pattern-progetti1,.filtro-brand").addClass("aperto");	
			}
			
		}
		else
		{
			$(".filtro.filtrobrand,.pattern.pattern-progetti1,.filtro-brand").removeClass("aperto");
		}
		
		
	});
	
	
	
	
	var where = "all";
	$(".single-filtro").click(function(){
		offset = 0;
		where = $(this).attr("data-id");
	 	$(".carica-more").addClass("loading");
		$('.inner-inner-progetti').html("");
		$.ajax({ type: "POST",
 	       url: window.location.protocol+"//"+window.location.host+"/progetti-loading",
 	       data: { offset : offset,where : where},
 	       success: function(data) { 
			   if(data != "no")
			   {
		  		$('.inner-inner-progetti').append(data);
				setTimeout(function(){
				 $(".progetto").addClass("visibleprogetto");
				}, 500);
				
	  		  	$(".carica-more").removeClass("loading");  
				if($(".progetto").length%12 != 0)
				{
					if($("html").attr("lang")=="en-US")
						$(".inner-carica").text("There are no other projects.");
					else
						$(".inner-carica").text("Non ci sono altri progetti.");
 				   $(".carica-more").addClass("nomore");  
				}
				else
				{
					
					if($("html").attr("lang")=="en-US")
						$(".inner-carica").text("Upload other projects.");
					else
						$(".inner-carica").text("Carica altri progetti.");
 				   $(".carica-more").addClass("nomore");  
					$(".carica-more").removeClass("nomore");
				}
			   }
			   else
			   {
				if($("html").attr("lang")=="en-US")
					$(".inner-carica").text("There are no other projects.");
				else
					$(".inner-carica").text("Non ci sono altri progetti.");
				   $(".carica-more").addClass("nomore");  
				   
				   $(".carica-more").removeClass("loading");  
				   $(".carica-more").addClass("nomore");  
			   }
 	       }
 	    }); 
	});
	
	$(".single-filtro-brand").click(function(){
		offset = 0;
	 	$(".carica-more").addClass("loading");
		$('.inner-inner-progetti').html("");
		$.ajax({ type: "POST",
 	       url: window.location.protocol+"//"+window.location.host+"/progetti-loading",
 	       data: { offset : offset,where : where},
 	       success: function(data) { 
			   if(data != "no")
			   {
		  		$('.inner-inner-progetti').append(data);
				setTimeout(function(){
				 $(".progetto").addClass("visibleprogetto");
				}, 500);
				
	  		  	$(".carica-more").removeClass("loading");  
				if($(".progetto").length%12 != 0)
				{
 				   $(".inner-carica").text("Non ci sono altri progetti.");
 				   $(".carica-more").addClass("nomore");  
				}
				else
				{
					$(".inner-carica").text("Carica altri progetti");
					$(".carica-more").removeClass("nomore");
				}
			   }
			   else
			   {
				   $(".inner-carica").text("Non ci sono altri progetti.");
				   $(".carica-more").removeClass("loading");  
				   $(".carica-more").addClass("nomore");  
			   }
 	       }
 	    }); 
	});
	
	
	var offset = 0;
	var offsetquery = getParameterByName('offset');
	console.log(offsetquery);
	if(offsetquery)
		offset = parseInt(offsetquery);
	
	console.log(offset);
	$(".carica-more").click(function(){
		if($(this).hasClass("nomore"))
		{
			
		}
		else
		{
		offset += 12;
	 	$(".carica-more").addClass("loading");
		$.ajax({ type: "POST",
 	       url: window.location.protocol+"//"+window.location.host+"/progetti-loading",
 	       data: { offset : offset,where : where},
 	       success: function(data) { 
			   if(data != "no")
			   {
				   history.replaceState({id: "0"},null, url_push+"?offset="+offset);
		  		$('.inner-inner-progetti').append(data);
				setTimeout(function(){
				 $(".progetto").addClass("visibleprogetto");
				}, 500);
				
	  		  	$(".carica-more").removeClass("loading");  
				if($(".progetto").length%12 != 0)
				{
					if($("html").attr("lang")=="en-US")
						$(".inner-carica").text("There are no other projects.");
					else
						$(".inner-carica").text("Non ci sono altri progetti.");
 				   $(".carica-more").addClass("nomore");  
				}
			   }
			   else
			   {
				if($("html").attr("lang")=="en-US")
					$(".inner-carica").text("There are no other projects.");
				else
					$(".inner-carica").text("Non ci sono altri progetti.");
				   $(".carica-more").removeClass("loading");  
				   $(".carica-more").addClass("nomore");  
			   }
 	       }
 	    }); 
		}
	});
	
});