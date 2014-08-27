$(document).ready(function() {
	// method to change title color
	function changeTitle (){
		$(".pageTitle").addClass("new-h1");
	}
	// call changeTitle in 1200 mls
	window.setTimeout(changeTitle, 1200);

	function changeBackground (){
		$(".backgroundOverlay").addClass("new-background");
	}
	window.setTimeout(changeBackground, 1200);

	function imageZoom (){
		$(".backgroundImage").addClass("zoomed-background");
	}
	window.setTimeout(imageZoom, 400);

	$("#resume").click(function(){
		$(".hiddenSection").removeClass();
		$(".pageTitle").addClass("hidden-title");
	});
	// // $("#contact").click(function(){
	// 	$(".hiddenSection").removeClass();
	// 	$(".pageTitle").addClass("hidden-title");
	// 	$("#resume").append(".hiddenSection");
	// });
}) // END document.ready()

