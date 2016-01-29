$(document).ready(function(){
	var move = [
		
		function(){$(".hover").animate({opacity:'1',top:'0px'},'fast',next)},
		function(){$(".nav-move").animate({opacity:'1',top:'0px'},'fast',next)},
		function(){$(".jumb-move").animate({opacity:'1',top:'100px'},next)},
		function(){$(".jumb-move2").animate({opacity:'1',left:'0px'},1000,next)},
		
		function(){$(".post-list li").animate({opacity:'1',top:'0px'},'fast')},
		
		
	]
	next = function(){
		$(document).dequeue("move");
	}
	next();
	$(document).queue("move",move);	
	$(".line-before i").animate({left:'0px'},600);
	$(".line-after i").animate({left:'0px'},600,function(){
		$(document).dequeue("move");
	});

	
});
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.pulls').css('background-color','#77DDFF','hover');
			
		}else{
			$('.pulls').css('background-color','transparent');
		}

	});	
