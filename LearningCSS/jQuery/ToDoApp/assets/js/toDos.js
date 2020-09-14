$("ul").on("click", "li", function()
{
    $(this).toggleClass("completed");
    
});

$("ul").on( "click", "span", function(e){
    $(this).parent().fadeOut(250, function(){
        this.remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13) //enter key
    {
        var todoText = $(this).val();
        $("ul").append("<li>"+"<span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
