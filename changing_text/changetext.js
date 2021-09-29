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
    console.log('What is this: ' + $('#kindful-iframe').contents().length);
    console.log('What is this: ' + $('iframe').contents().length);


  });
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
