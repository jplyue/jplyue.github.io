//scroll

var windowWidth;
var windowHeight;
var scrollY;
var kTop1 = 0.035;
var kLeft1 = 0.4;
var kTop2 = 0.605;
var kLeft2 = 0.1;
var kLeft3 = 0.45;
var top = $(".character").offset().top;

$(document).ready(function() {
    updateWindowSize();
    $(window).resize(function() { //Fires when window is resized
        updateWindowSize();
        if($("#section1").hasClass("active")){
            updateOffset(kTop1, kLeft1);
            setValue();
        }else if($("#section2").hasClass("active")){
            updateOffset(kTop2, kLeft2);
            setValue();
        }else{
            updateOffset(kTop2, kLeft3);
            setValue();
        }
    });

    $(window).scroll(function () {
        //scrollY = $(window).scrollTop();
        assignK();
        top = $(".character").offset().top;
        setValue();
    });
});

function assignK(){
    updateWindowSize();
    if($("#section1").hasClass("active")){
        updateOffset(kTop1, kLeft1);
    }else if($("#section2").hasClass("active")){
        updateOffset(kTop2, kLeft2);
    }else{
         updateOffset(kTop2, kLeft3);
    }
}
function updateWindowSize(){
    windowWidth = $(window).width();
    windowHeight = $(window).height();
}

function updateOffset(kTop, kLeft){
    offsettop = windowHeight * kTop;
    offsetleft = windowWidth * kLeft;
}

function setValue(){
    /*
    if($("#section1").hasClass("active")){
        $(".character").offset({top: scrollY+offsettop, left:offsetleft}); 
        //$(".character").css("-webkit-transform":"translate("+scrollY+offsettop+", "+offsetleft); 
    }else if($("#section0").hasClass("active")){
        $(".character").css({top: "68%", left:"47%"}); 
    }else if($("#section2").hasClass("active")){
        $(".character").offset({top: scrollY+offsettop, left:offsetleft}); 
    }else{
         $(".character").offset({top: scrollY+offsettop, left:offsetleft});  
    }*/
    if($("#section0").hasClass("active")){
        $(".character").css({top: "68%", left:"47%"}); 
    }else{
        $(".character").offset({top: scrollY+offsettop, left:offsetleft});  
    }
}