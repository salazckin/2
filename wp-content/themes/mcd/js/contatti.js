$(document).ready(function(){

	$( ".uploadfile span" ).click(function() {
			$("#uploadCV").trigger("click");
			
		});
	    $("#uploadCV").change(function (){
			  var filenameinput = $("#uploadCV").val();
			  filenameinput = filenameinput.substr(filenameinput.lastIndexOf("\\") + 1);
			  $(".uploadfile span").text(filenameinput);
	     });
});