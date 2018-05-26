$(document).ready(function () {

    var ToolTips = [
        new jBox('Tooltip', {
            attach: '#firstName',
            content: 'لطفا نام را وارد کنید',
            trigger: 'click',
            position: {
                x: 'right',
                y: 'middle'
            },
            outside: 'x'
        })
        ,
        new jBox('Tooltip', {
            attach: '#lastName',
            trigger: 'click',
            content: 'لطفا نام خانوادگی  را وارد کنید',
            position: {
                x: 'right',
                y: 'middle'
            },
            outside: 'x'
        }),
        new jBox('Tooltip', {
            attach: '#userName',
            trigger: 'click',
            content: 'نام کاربری حتما باید از کاراکتر های زبان انگلیسی، ارقام و نقطه باشد',
            position: {
                x: 'right',
                y: 'middle'
            },

            outside: 'x'
        }),
        new jBox('Tooltip', {
            attach: '#password',
            trigger: 'click',
            content: 'رمز عبور حداقل باید شامل 10 حرف و نباید آسان باشد',
            position: {
                x: 'right',
                y: 'middle'
            },
            outside: 'x'
        })
    ]


    $(".month").select2({
        placeholder: "ماه",
        style: "text-align:center;",
        allowClear: true,
        width: 'resolve', // need to override the changed default
    });


    $(".gender").select2({
        placeholder: "جنسیت",
        style: "text-align:center;",
        allowClear: true,
        width: 'resolve', // need to override the changed default
    });


    $('#firstName').focus(() => {
        console.log('here')
    });

    $('#firstName').focusout(() => {
        console.log('gone');
        ToolTips = undefined;
    });

    var clock = $('.clock').FlipClock(3 * 24 * 3, {
        clockFace: 'HourlyCounter',
        countdown: true
    });

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
        increaseArea: '20%' // optional
    });

    $('input').on('ifChecked', function (event) {
        //enable button
        $('#submitButton').attr("disabled", false);
    });

    $('input').on('ifUnchecked', function (event) {
        //disable button
        $('#submitButton').attr("disabled", true);
    });
});

function CheckForm() {
    //check everything is on form
    console.log('form checked');


    //getting data 
    let firstName = $("#firstName").val();
    let lastName = $('#lastName').val();
    let userName = $('#userName').val();
    let password = $('#password').val();
    let repassword = $('#repassword').val();
    let day = $('#day').val();
    let year = $('#year').val();
    let tel = $('#telNumber').val();
    let gender = $('#genderSelect').val();
    let month = $('#monthSelect').val();



    // regex
    const ORDINARYNAME = new RegExp("^[\u0600-\u06FF]{2,}$");

    //The string must contain at least 1 lowercase alphabetical character
    //The string must contain at least 1 uppercase alphabetical character
    //The string must contain at least 1 numeric character
    //The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    //The string must be eight characters or longer
    const PASSCHECK = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})');
    const USERNAMECHECK = new RegExp('[a-zA-Z0-9_.]+$');
    const TELCHECK = new RegExp('^09[0-9]{9}$');


    //validations
    let f_name = ORDINARYNAME.test(firstName);
    let l_name = ORDINARYNAME.test(lastName);
    let u_name = USERNAMECHECK.test(userName);




    let p_check = false;
    if (PASSCHECK.test(password)) {
        p_check = true;
    }


    let rPass_check = false;
    if (password === repassword) {
        rPass_check = true;
    }


    let d_check = false;
    if (day <= 31 && day >= 0 && year >= 1320 && year <= 1398 && month) {
        d_check = true;
    }

    let tel_check = TELCHECK.test(tel);

    let gen_check = false;
    if (gender) {
        gen_check = true;
    }

    if (f_name && l_name && u_name && p_check && rPass_check && d_check && tel_check && gen_check) {
        // call sweet alert function 
        swal({
            title: "Good job!",
            text: "You registerd successfully!",
            icon: "success",
            button: "OK!",
        });

    } else {

        if (!(f_name && l_name)) {
            $('#warnNames').css("display", "block");
        }

        if (!(u_name)) {
            $('#warnUsername').css("display", "block");
        }

        if (!(p_check)) {
            $('#warnPassword').css("display", "block");
        }

        if (!(rPass_check)) {
            $('#warnRepassword').css("display", "block");
        }

        if (!(d_check)) {
            $('#warnDate').css("display", "block");
        }

        if (!(tel_check)) {
            $('#warnTel').css("display", "block");
        }

        if (!(gen_check)) {
            $('#warnGender').css("display", "block");
        }
    }

    $('#firstName').change(() => {
        $('#warnNames').css("display", "none");
    });
    $('#lastName').change(() => {
        $('#warnNames').css("display", "none");
    });

    $('#userName').change(() => {
        $('#warnUsername').css("display", "none");
    });

    $('#password').change(() => {
        $('#warnPassword').css("display", "none");
    });

    $('#repassword').change(() => {
        $('#warnRepassword').css("display", "none");
    });

    $('#day').change(() => {
        $('#warnDate').css("display", "none");
    });

    $('#monthSelect').change(() => {
        $('#warnDate').css("display", "none");
    });

    $('#year').change(() => {
        $('#warnDate').css("display", "none");
    });

    $('#genderSelect').change(() => {
        $('#warnGender').css("display", "none");
    });

    $('#telNumber').change(() => {
        $('#warnTel').css("display", "none");
    });
}