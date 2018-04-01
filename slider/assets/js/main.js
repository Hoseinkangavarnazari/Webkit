var myVar;
var sliders = 0;
var activeSlider = 1;
var pTimer = null;
var sliderTimeOut = 10000;
$(document).ready(function () {
	pTimer = new MyTimer(myTimer, sliderTimeOut);
	pTimer.startTimer();

	sliders = $("ul#slider li").size();
	tempCounter = 1;
	$("ul#slider li").each(function () {
		$(this).attr("data-id", tempCounter);
		$("ul.btm").append("<li><span data-id=" + tempCounter + ">* </span></li>");
		tempCounter++;
	});
	$("#slider").mouseenter(function(){
		pTimer.pauseTimer();	
	})
	$("#slider").mouseleave(function(){
		pTimer.resumeTimer();
	})
	$("ul.btm li").click(function () {
		temp = $(this).find("span").attr("data-id");
		activeSlider = temp;
		myStopFunction();
		changeSlider();
		startTimer();
	});

	$("ul.btm li:first-child span").addClass("active");
	//-----Left------
	$(".left").click(function () {
		pTimer.stopTimer();
		activeSlider--;
		if (activeSlider < 1)
			activeSlider = sliders;
		changeSlider();
		pTimer.startTimer();
	});
	//----Right-------
	$(".right").click(function () {
		pTimer.stopTimer();
		activeSlider++;
		if (activeSlider > sliders)
			activeSlider = 1;
		changeSlider();
		pTimer.startTimer();
	});
});
function changeSlider() {
	$("ul#slider li p").fadeOut();
	$("ul#slider li").removeClass("active");
	$("ul#slider li[data-id=" + activeSlider + "]").addClass("active");
	$("ul.btm li span").removeClass("active");
	$("ul.btm li span[data-id=" + activeSlider + "]").addClass("active");
	$("ul#slider li[data-id=" + activeSlider + "] p").fadeIn("fast");
	//--- disc ---

}

function myTimer() {
	activeSlider++;
	if (activeSlider > sliders)
		activeSlider = 1;
	changeSlider();
}




class MyTimer {
	constructor(callback, timeMS) {
		this.callback = callback;
		this.timeMS = timeMS;
		this.timer = null;
		this.pauseTime = null;
		this.startTime = null;
		this.remainingTime =0;
		this.singleChangeTimer = null;
	}
	startTimer() {
		console.log('start timer1');
		this.startTime = new Date();
		this.timer = setInterval(()=>this.onTimerTimeout(this.callback), this.timeMS, this.callback);
	
	}
	pauseTimer() {
		clearInterval(this.timer);
		if(this.singleChangeTimer){
			clearTimeout(this.singleChangeTimer);
		}
	}
	resumeTimer() {
		if(this.singleChangeTimer){
			clearTimeout(this.singleChangeTimer);
		}
		var reminingTime = this.timeMS-(new Date()-this.startTime);
		console.log('rem time',reminingTime);
		if(reminingTime>0){
			this.singleChangeTimer=setTimeout(() => {
				this.onTimerTimeout(this.callback);
				 return this.startTimer() 
				}, reminingTime);
		}else{
			setTimeout(() => { 
				this.onTimerTimeout(this.callback);
				return this.startTimer() 
			}, 1);
		}
		
	}
	stopTimer() {
		clearInterval(this.timer);
	}
	onTimerTimeout(callback) {
		callback();
	}
}



