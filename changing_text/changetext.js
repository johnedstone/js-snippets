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

  $("a[class*='area-of-greatest-need-donate-btn']").on('click', function() {
      console.log('This too, means that the buttion has been click, load some javascript');
  });

  console.log('finishing');

});
/*
  # vim: ai et ts=2 sw=2 sts=2 nu
*/
