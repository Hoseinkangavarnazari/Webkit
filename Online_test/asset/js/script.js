var questions = {
    count: 2,
    question: [
        {
            question: " How many people lives in iran? ",
            q_one: " 60 mil",
            q_two: " 70 mil",
            q_three: " 77 mil",
            q_four: " 81 mil",
            correct: 3
        },
        {
            question: "which is different from others ? ",
            q_one: " Expert systems",
            q_two: " Intelligent systems",
            q_three: "Computer vision",
            q_four: " Agile Development method",
            correct: 4

        }, {
            question: "which is different from others ? ",
            q_one: "Asus",
            q_two: "General Motors",
            q_three: "Lenovo",
            q_four: "Microsoft",
            correct: 2
        }
    ]
}

var answers = new Array(3);
answers = [-1, -1, -1];



var question_counter;


function check_answers() {
    let score = 0;
    for (let x = 0; x < answers.length; x++) {
        if (answers[x] == questions.question[x].correct) {
            score++;
        }
    }
    return (score / (questions.count + 1)) * 100;
}

function start() {
    //visible
    document.querySelector("#answer_section").style.display = "block";
    document.querySelector("#progress_bar").style.display = "block";
    document.querySelector("#question_field>h4").style.display = "block";
    document.querySelector("#question_field>span").style.display = "block";
    document.querySelector("#terminate").style.display = "block";
    document.querySelector("#pre").style.display = "inline-block";
    document.querySelector("#next").style.display = "inline-block";

    //disapear
    document.querySelector("#start_btn").style.display = "none";
    document.querySelector("#start_msg").style.display = "none";

    question_counter = 0;

    //show question 
    show_qestion(question_counter);

    // progressbar
    progressbar();
}

function show_qestion(x) {
    document.querySelector("#q_number").innerHTML = x + 1;
    document.querySelector("#question").innerHTML = questions.question[x].question;
    document.querySelector("#q_t_1").innerHTML = questions.question[x].q_one;
    document.querySelector("#q_t_2").innerHTML = questions.question[x].q_two;
    document.querySelector("#q_t_3").innerHTML = questions.question[x].q_three;
    document.querySelector("#q_t_4").innerHTML = questions.question[x].q_four;

    //update radio 
    update_radio(x);

    return true;
}


function update_radio(x) {
    var rad = document.myForm.optradio;
    for (let i = 0; i < rad.length; i++) {
        if (answers[x] == i + 1) {
            rad[i].checked = true;
        } else {
            rad[i].checked = false;
        }
    }
}


function pre() {
    if (question_counter) {
        question_counter--;
    }
    show_qestion(question_counter);
}

function next() {
    if (question_counter < questions.count) {
        question_counter++;
    }
    show_qestion(question_counter);
}


function check() {
    var select = -1;
    var rad = document.myForm.optradio;

    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            select = i;
            break;
        }
    }
    answers[question_counter] = select + 1;
}


function progressbar(){
    var elem = document.getElementById("progress_bar"); 
    var width = 1 ; 
    var id = setInterval(frame,100);

    function frame() { 
        if(width==100){
            //terminate 
            terminate(); 
        }else{
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function terminate(){
    var score = check_answers(); 
    document.querySelector("#answer_section").style.display = "none"; 
    document.querySelector("#progress_bar").style.display = "none"; 
    document.querySelector("#question_field>span").style.display = "none"; 
    document.querySelector("#question_field>h4").innerHTML = " Your grade is " + score + "%" ; 
    document.querySelector("#terminate").style.display = "none";
    document.querySelector("#pre").style.display = "none";
    document.querySelector("#next").style.display = "none";
}
