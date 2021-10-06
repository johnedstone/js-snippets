jQuery(function( $ ){
  $(document).on('mouseover', 'iframe', function(event) {
    console.log('iframe id: ' + $('iframe').attr('id'));
    console.log('iframe src: ' + $('iframe').attr('src'));
    $("iframe#kindful-iframe").css('background-repeat', 'no-repeat');

    $("iframe[src*='acb3d0b0-16ce-4fd2-b579-fa6cea308e78']").css('background-image', "url('wp-content/uploads/2021/09/area_transparent2.png')");

  });
});
/*
  # vim: ai et ts=2 sw=2 sts=2 nu
*/
