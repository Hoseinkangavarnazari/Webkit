

const max_count = 3;
var titles = ["Starter image", "First Image", 'Second Image', 'Third Image'];

window.onload = function () {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);
    
    var counter = 0;
    document.querySelector(".carousel_image").setAttribute("src", "./asset/image/" + counter + ".jpg");
    document.querySelector(".title").innerHTML = titles[counter];
    function frame() {
        if (width >= 100) {
            if (counter >= max_count) {
                counter = 0;
            } else {
                counter++;
            }
            document.querySelector(".carousel_image").setAttribute("src", "./asset/image/" + counter + ".jpg");
            document.querySelector(".title").innerHTML = titles[counter];
            width = 0;
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}