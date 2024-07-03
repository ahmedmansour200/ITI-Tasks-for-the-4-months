$("button").each(function(index, button) {
    $(button).on("click", function() {

        $("button").removeClass("active");
        
        $(this).addClass("active");

        $(".tab-one").removeClass("active");
        
        $($(".tab-one")[index]).addClass("active");
    });
});
