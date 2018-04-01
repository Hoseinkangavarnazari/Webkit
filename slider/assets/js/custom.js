var myVar;
var sliders = 0;
var sliderCounter = 1;
$(document).ready(function(){
	startTimer();
});

function startTimer(){
	sliders = $("ul.slider li").size();
	$("ul.slider li").each(function(){
		$(this).attr("data-id",sliderCounter);
		sliderCounter++;
	});
	sliderCounter = 1;
	myVar = setInterval(function(){ 
		myTimer() 
	}, 3000);
}


function myTimer() {
	$("ul.slider li").removeClass("active");
	$("ul.slider li[data-id="+sliderCounter+"]").addClass("active");
	sliderCounter++;
	if(sliderCounter>sliders)
		sliderCounter = 1;
}

function myStopFunction() {
	clearInterval(myVar);
	changeSlider();
}




































    