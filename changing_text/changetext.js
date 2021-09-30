jQuery(function( $ ){
  console.log('starting');
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

  //Next: add js on click of give putton
  //https://api.jquery.com/jquery.getscript/

  /*
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
    $("a[class*='area-of-greatest-need-donate-btn']").text('Give to the Area of Greatest Need');
  });

  $("a[class*='area-of-greatest-need-donate-btn']").each(function(index, element) {
    console.log( index + ": " + $(this).text() );
  });

  $("a[class*='area-of-greatest-need-donate-btn']").on('click', function(element) {
    console.log($(this).text());
    console.log('This too, means that the button has been click, load some javascript');
    console.log('Appending dynamic division');
    //$('<div class="dynamic">Dynamic Div</div><br/>').appendTo('body');
    $('div.dynamic').css('color','red');
  });

  // https://forum.jquery.com/topic/changing-css-in-iframe-with-jquery
  // https://www.learningjquery.com/2017/04/how-to-change-iframe-styling-using-jquery
  $('body').on("click","div.dynamic", function(){
    console.log("click: Dynamic div loaded.");
  });
  $('body').on("load","div.dynamic", function(){
    console.log("loaded: Dynamic div loaded.");
  });
  $(document).on("load","div", function(){
    console.log("loaded: Dynamic div loaded.");
  });


  // https://www.learningjquery.com/2017/02/jquery-on-method-the-issue-of-dynamically-added-elements
  $('body').on('load', '#kindful-iframe', function() {
    console.log('an iframe has been loaded');
  });
  // jQuery(function($){console.log($('iframe').attr('id'))})
  */

  /*
   * Need to find when iframe is loaded
  $('document.body').on('click', function() {
    console.log('What is this2: ' + $('#kindful-iframe').contents().length);
    console.log('What is this2: ' + $('iframe').contents().length);
  });
  */




  console.log('finishing');

});
/*
  # vim: ai et ts=2 sw=2 sts=2 nu
*/
