jQuery(function( $ ){
    console.log('Starting...');

    $("div p").text("Changing from Hello World to Goodbye World");

    $( "input[value='acb3d0b0-16ce-4fd2-b579-fa6cea308e78']" ).parent().find("h5:contains('Choose your Amount')").text("changing to Hocus Pocus");

    $.get("rewrite_title.js",function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        $("div pre").text(data);
    },"html");

    console.log('Finishing up...');
});

// # vim: ai et ts=2 sw=2 sts=2 nu
