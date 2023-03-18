var consulta, alto;
$(document).ready(function(){
	alert();
	consulta=$("#search-table").DataTable();
	$("#inputBusqueda").keyup(function(){
		if ($(this).val()=="") {
			$("header").css({
				"height": "",
				"background": ""
			});
			$("#search").css("display", "");
		}else{
			$("#search").fadeIn("fast");
			consulta.search($(this).val()).draw();
			$("header").css({
				"height": "100vh",
				"background": "rgba(0,0,0,0.5)"
			});
		}
	});
	$("#inputBusqueda").on("search", function(){
		$("header").css({
			"height": "",
			"background": ""
		});
		$("#search").css("display", "");
	});
});