
$(document).ready(function(){
    $(".one").mouseover(function(){
        $("body").css( "background-image" ,"url('img/3.gif')");
    });

    $(".two").mouseover(function(){
        $("body").css( "background-image" ,"url('img/4.gif')");
    });

    $(".three").mouseover(function(){
        $("body").css( "background-image" ,"url('img/5.gif')");
    });

    $(".four").mouseover(function(){
        $("body").css( "background-image" ,"url('img/6.gif')");
    });

    $(".mb2_submit").mouseover(function(){
        $('.mb2_submit').css({
            "background-image":"url('img/login.gif')",
            "background-position":"-90px -300px",
        });
    });
    $(".mb2_submit").mouseout(function(){
        $('.mb2_submit').css({
            "background-image":"url('')",
        });
    });
});

function reg(){
    $("#log").hide();
    $("#reg").show();
}

function log(){
    $("#log").show();
    $("#reg").hide();
}


var countdown=60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value="免费获取验证码";
        countdown = 60;
    } else {
        val.setAttribute("disabled", true);
        val.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
        settime(val)
    },1000)
}
