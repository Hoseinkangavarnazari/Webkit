//slider part 
;
var sliders = 0;
var activeSlider = 1;


var pTimer = null;
var sliderTimeOut = 4000;
var Timer;

// an array of object for holding title of slider
var titles = [
    {
        name: "صفحه اول",
        link: "آدرس یک"
    },
    {
        name: "صفحه دوم",
        link: "آدرس دو"
    },
    {
        name: "صفحه سوم",
        link: "آدرس سه"
    }
]


$(document).ready(function () {

    sliders = $(".slider picture").length;
    tempCounter = 1;
    // generates page num with number of picture that i set in html
    $(".slider picture").each(function () {
        $(this).attr("data-id", tempCounter);
        $("div.page-num").append(
            "<span data-id=" + tempCounter + " class='radio-local' onclick='radio(" + tempCounter + ")'> </span>");
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

    //change title
    // arraye start form zero but active slider counts from 1
    document.getElementById("text1").innerHTML = titles[activeSlider - 1].link;
    document.getElementById("text2").innerHTML = titles[activeSlider - 1].name;
}



function myTimer() {
    next();
}


function timeSync() {
    // if you cliked on  page num radio or pre or next handler of slider the timer starts from zero 
    clearInterval(Timer);
    Timer = setInterval(myTimer, sliderTimeOut);
}

// receiving data from html for changing the slider
function radio(number) {
    activeSlider = number;
    timeSync();
    changeSlider();
}

