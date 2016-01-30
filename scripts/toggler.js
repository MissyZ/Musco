// JavaScript Document

$(document).ready(function(){
	$( '#references' ).hide();
	
$('#toggleButton').click(function() {
if($('#references').is(':visible')) {
				$(this).val('View Project References');
			} else {
				$(this).val('View Sales Associate');
				}
$( '#references' ).slideToggle();
$( '#table' ).slideToggle();
	});

});

