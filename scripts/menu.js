// thanks to http://patrickmjones.com/blog/2010/03/28/jquery-noconflict-multiple-javascript-libraries/
// for the solution

(function($){
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(900);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
}


	
 $(document).ready(function(){					
	mainmenu();
});


})(jQuery);

