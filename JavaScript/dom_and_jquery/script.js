$(document).ready(function(){
    // this is where we'll write all of our code!

    $("#change_red").click(function(){
        $("#to_change_red").addClass("red-text");


        $("#change_red").addClass("red-text bold-text");
    });

    $("#delete_button").click(function(){
        $("#to_delete").text("just kidding, we'll change the text instead")
    });

    $("#lorem_button").click(function(){
        $("#to_lorem").append("<ul><li>Lorem</li><li class='new_list'>ipsum</li><li>dolor</li><li>sit</li></ul>")
        
        $(".new_list").click(function(){
            alert("You clicked the ipsum")
        })
    });

    

    // $(document).on('click', '.new_list', function(){
    //     alert("you clicked the ipsum");
    // })
})