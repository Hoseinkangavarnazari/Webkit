//slider part 
;
var sliders = 0;
var activeSlider = 1;


var pTimer = null;
var sliderTimeOut = 4000;
var Timer;


$(document).ready(function () {

    sliders = $(".slider picture").length;
    tempCounter = 1;
    $(".slider picture").each(function () {
        $(this).attr("data-id", tempCounter);
        $("div.page-num").append(
            "<span data-id=" + tempCounter + " class='radio-local'> </span>");
        tempCounter++;
    });

    changeSlider();
    Timer = setInterval(myTimer, sliderTimeOut);

});

function pre() {
    timeSync();

    console.log("pre works");
    if (activeSlider == 1) {
        activeSlider = sliders;
    } else {
        activeSlider--;
    }
    changeSlider();
}

function next() {

    timeSync();

    console.log("next works");
    if (activeSlider == sliders) {
        activeSlider = 1;
    } else {
        activeSlider++;
    }
    changeSlider();
}

function changeSlider() {

    //slider
    $("picture#active.pic").removeAttr('id');
    $("picture.pic[data-id=" + activeSlider + "]").attr("id", "active");


    //radioBullet
    $("span#active.radio-local").removeAttr('id');
    $(".page-num span[data-id=" + activeSlider + "]").attr("id", "active");
}



function myTimer() {
    next();
}


function timeSync() {
    clearInterval(Timer);
    Timer = setInterval(myTimer, sliderTimeOut);
}
