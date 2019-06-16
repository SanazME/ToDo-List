//  Add a listener to ul instead of il so when
// we add new lis in future we can apply the listener to
// all lis inside ul
$("ul").on("click","li",function(){
    $(this).toggleClass('completed');   
});

// Add event listener to ul instead of span but
// it only runs when span inside ul is run:
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        // $(this) here is span.parent which is li
        $(this).remove();
    });
    // alert("clicked on span")
    event.stopPropagation();   
})

// to add listener to input=text when we add an item and hit enter, it adds it to the list
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        // clearing up the input
        $(this).val("");

        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
        // $("ul").append("<li>"+eve)
    }
})