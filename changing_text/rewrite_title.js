jQuery(function( $ ){
    console.log('Starting...');

    $("div p").text("Changing from Hello World to Goodbye World");

    $.get("rewrite_title.js",function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        $("div pre").text(data);
    },"html");

    console.log('Finishing up...');
});

// # vim: ai et ts=2 sw=2 sts=2 nu
