$(function(){
	var open = true;
	var WindowSize = $(window)[0].innerWidth;

	var targetSizeMenu = (WindowSize <= 400) ? 200 : 300;
	
	if(WindowSize <= 768) {

		open = false;
	}

	$('.menu-btn').click(function(){
		if (open) {
			//menu está abertp, precisamos fechar;
			$('.menu').css('width','0').css('padding','0');
			$('.menu').animate({'width':0,'padding':0},function(){
				open = false;
			});
			$('.content,header').css('width','100%');
			$('.content,header').animate({'left':0},function(){
				open = false;
			});
		}else{
			//menu fechado;
			$('.menu').css('display','block');
			$('.menu').animate({'width':targetSizeMenu+'px','padding':'10px'},function(){
				open = true;
			});
			if(WindowSize > 768)
			$('.content,header').css('width','calc(100% - 250px)');
			$('.content,header').animate({'left':targetSizeMenu+'px'},function(){
				open = true;
			});
		}
	})
/*
	$(window).resize(function(){
		WindowSize = $(window)[0].innerWidth;
		if(WindowSize <= 768){
			$('.menu').css('width','0').css('padding','0');
			$('.content,header').css('width','100').css('left','0');
			open = false;
		}else{
			open = true;
			$('.content,header').css('width','calc(100% - 250px)').css('left','250px');
			$('menu').css('width','250px').css('padding','10px 0');
		}
	})*/

	$('[formato=data]').mask('99/99/9999');
/*
	$('[actionBtn=delete]').click(function(){
			var txt;
			var r = confirm("Deseja excluir o Depoimento ?");
			if (r == true) {
			    return true;
			} else {
			    return false;
			}
	})*/
})