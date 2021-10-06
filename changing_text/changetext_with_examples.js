jQuery(function( $ ){
  //console.log('starting');
  /* Cleaning up - this all works
  if ($('div').hasClass('grve-tab-section')) {
      console.log('has class grve-tab-section');
  }
  if ($('#1622854675728-d553932b-3eb7').length) {
      console.log('has id 1622...');
  }
  if ($('div.grve-element.grve-align-left').children('a').length) {
      console.log('has anchor');
  }
  console.log($('div.grve-element.grve-align-left').attr('class'));
  console.log('anchor class: ' + $('div.grve-element.grve-align-left').children('a').first().attr('class'));


  $('div.grve-element.grve-align-left').children('a').first().on('click', function () {
    console.log("Division's (anchor) buttion has been click, load some javascript");
  });

  if ($('div.grve-element.grve-align-left').children('a').first().hasClass('area-of-greatest-need-donate-btn')) {
    $('div.grve-element.grve-align-left').children('a').first().on('click', function () {
      console.log('Great!! Buttion has been click, load some javascript');
    })
  };

  console.log($("a[class*='area-of-greatest-need-donate-btn']").text());

  $("div[data-rel='#1622854675728-d553932b-3eb7']").on('click', function(e) {
    console.log('Updating button to say "Give to ..."');
    // This does in fact update the Give button if one wants to do it this way: works!
    //$("a[class*='area-of-greatest-need-donate-btn']").text('Give to the Area of Greatest Need');
  });

  $("a[class*='area-of-greatest-need-donate-btn']").click(function(){
    console.log('You have chosen "Area of Greatest Need" ... loading some more jQuery');
  });
  */



  $(document).on('mouseover', 'iframe', function(event) {
    //console.log('mouseover once: an iframe has been loaded - untouchable by jQuery (cross-domain)');
    console.log('iframe id: ' + $('iframe').attr('id'));
    console.log('iframe src: ' + $('iframe').attr('src'));
    $("iframe[src*='acb3d0b0-16ce-4fd2-b579-fa6cea308e78']").css('background-image', "url('wp-content/uploads/2021/09/area_transparent2.png')");
    $("iframe[src*='acb3d0b0-16ce-4fd2-b579-fa6cea308e78']").css('background-repeat', 'no-repeat');
    // Doesn't work: darn! console.log($( 'iframe#kindful-iframe' ).contents().find( "h5" ).css( 'color', 'red' ));

  });

  /* Cleaning up - works
  $("a[class*='area-of-greatest-need-donate-btn']").each(function(index, element) {
    console.log( index + ": " + $(this).text() );
  });
  $(document).on('click',"div.dynamic", function(e){
    console.log("click: Dynamic div clicked and turning purple.");
    $(this).css('color', 'purple');
  });

  $("a[class*='area-of-greatest-need-donate-btn']").on('click', function(element) {
    console.log($(this).text());
    console.log('Appending dynamic division');
    $('<div class="dynamic">Dynamic Div</div><br/>').appendTo('body');
    $('div.dynamic').css('color','red');
  });
  */

  /*
  References: https://forum.jquery.com/topic/changing-css-in-iframe-with-jquery
              https://www.learningjquery.com/2017/04/how-to-change-iframe-styling-using-jquery


  Couldn't get this to work:
              https://www.learningjquery.com/2017/02/jquery-on-method-the-issue-of-dynamically-added-elements
  $('body').on('load', '#kindful-iframe', function() {
    console.log('an iframe has been loaded');
  });
  */

  //console.log('finishing');

});
/*
  # vim: ai et ts=2 sw=2 sts=2 nu
*/
