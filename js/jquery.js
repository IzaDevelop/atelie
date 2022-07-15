$(document).ready(function(){
	$('#form1').on('click', function(){
    	$('#login').toggle();
    });

	$('#form1').on('click', function(){
    	$('#cadastro').toggle();
    });
});

$(document).ready(function(){
	$('#form2').on('click', function(){
    	$('#cadastro').toggle();
    });
	
	$('#form2').on('click', function(){
    	$('#login').toggle();
    });
});