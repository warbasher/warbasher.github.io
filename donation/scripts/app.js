
/**
 * Config
 */
cfg = {
  payPal: {
    endpoint: 'https://www.paypal.com/cgi-bin/webscr',
    business: 'email@gmail.com'
  }
}


/**
 * On page load
 */
$( document ).ready( function() {
  $( '#business' ).val( cfg.payPal.business );
  $( '#donate' ).attr( 'action', cfg.payPal.endpoint );
})


var steamIdPattern = /^STEAM_[0-5]:[01]:\d{1,15}$/;

/**
 * Form validation
 */
$( "#donate" ).submit( function( e ) {
  var $steamId = $( "#steamid" );
  var $grp = $( "#steamid-grp" );

  if ( steamIdPattern.test( $steamId.val() ) === false ) {
    e.preventDefault();
    $grp.addClass( 'has-danger' );
    $steamId.addClass( 'form-control-danger')
  } else {
    $grp.removeClass( 'has-danger' );
    $steamId.removeClass( 'form-control-danger' )  
  }
})



