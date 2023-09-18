$("#about").mouseenter(function(){
    $("#animate-img").css({
        opacity: "1",
        animation: "leftRightIn 1s ease-out 1",
    });
});
$("#about").mouseenter(function(){
    $("#animate-text").css({
        opacity: "1",
        animation: "rightLeftIn 1s ease-out 1",
    });
});
$("#about").mouseenter(function(){
    $("#titleAbout").css({
        opacity: "1",
        animation: "downUp 1s ease-out 1",
    });
});
$("#work").mouseenter(function(){
    $("#titleWork").css({
        opacity: "1",
        animation: "downUp 1s ease-out 1",
    });
});
$("#contact").mouseenter(function(){
    $("#titleContact").css({
        opacity: "1",
        animation: "downUp 1s ease-out 1",
    });
});
$("#work").mouseenter(function(){
    $(".flip-card-inner").css({
        transform: 'rotateY(180deg)'
    });
});


