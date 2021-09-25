### Notes on alternate jQuery in Wordpress

From an email

```
Note there is WP variable set to jQuery2_2_4
see 
https://wpengine.com/support/including-a-different-jquery-version-in-wordpress/#Calling_jQuery_the_Proper_Way
specifically:

wp_register_script( 'jquery3.2.1', 'https://code.jquery.com/jquery-3.2.1.min.js' );
wp_add_inline_script( 'jquery3.2.1', 'var jQuery3_2_1 = $.noConflict(true);' );
wp_enqueue_script( 'plugin-javascript', plugins_url( 'js.js', __FILE__ ), array( 'jquery3.2.1' ) );

##### One approach, the first file with two function #######
 function endedRotate(current, next) { 
     var currentID = jQuery2_2_4(next).attr('id'); 
        var msg_id = '#' + currentID + 'a';
        var msg = jQuery2_2_4(msg_id).html();
        jQuery2_2_4('#rotateStatus').html(msg);  
}
  jQuery2_2_4(function($) {
	  //alert($.fn.jquery);
	  $("#myCube").imagecube({
		selection: 'random',
        direction: 'random',
        speed: 400,
        pause: 100,
		shading: false,
		//beforeRotate: startingRotate,
		afterRotate: endedRotate
	  }
	  ).imagecube('stop');
	  
	   $('#stopCube').click(function(){
		   var start = $(this).text();
		   var data_state = $(this).attr('data-state');
		   //console.log(data_state);
		   switch (data_state) {
			 case 'ROLL IT!':
			 case 'Roll Again!':
			  var selectVal = $('#selected').val();
              $(this).text('Click Here to STOP!'); 
			  $(this).attr('data-state','Click Here to STOP!');
              $('#myCube').imagecube('start');         
              $('#rotateStatus').hide();
              $('#image1').attr('src', 'https://your.website.org/media/now-bw-200'+selectVal+'.jpg');
              $(this).css('background-color', '#dc7275' );
	          $('#cube').removeClass('cubeinitial');
		      $('#cube').removeClass('cuberesult');
		      //console.log(start);
			   break;
			 case 'Click Here to STOP!':
			  var selectVal = $('#selected').val();
              $(this).text('Roll Again!');
              $(this).attr('data-state','Roll Again!');			  
              $('#myCube').imagecube('stop'); 
              $('#rotateStatus').fadeIn(550);
              $('#image1').attr('src', 'https://your.website.org/media/now-bw-200'+selectVal+'.jpg');
	  	      //$('#image1').attr('class', 'share-image');
		      //$('#image1').attr('longdesc', 'https://your.website.org/cube-faces#now');
         	  $(this).css('background-color', '#81ce98' );
		      $('#cube').addClass('cuberesult');
		      //console.log(start);
			  break;
			 default:
			   console.log('out of choices');
		   }
	   });
  });

################# A second approach, and a reference - using both of these files at your.website.org ####################
/* http://keith-wood.name/imageCube.html
   Image Cube for jQuery v2.0.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. 
  ADDED jQuery2_2_4 to final line - https://wpengine.com/support/including-a-different-jquery-version-in-wordpress/#Calling_jQuery_the_Proper_Way
  */
/* Rotate images (or other things) as if on the faces of a cube.
   $('div selector').imagecube();
   Or with options like:
   $('div selector').imagecube({direction: 'left', speed: 1000});
*/

(function($) { // Hide scope, no $ conflict

..... from keith-wood ...
..... and then at the end ....
})(jQuery2_2_4);

```
