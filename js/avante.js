$(function(){
	
	//로딩 헤더 슬라이드 및 스크롤바 삭제
	
	$(window).load(function(){
		$("header h1").stop().slideDown(800);
		$('html').css("overflow","hidden");
		$("#background").fullBg;
		$("#rightmenu li").eq(0).css('backgroundColor','red'); // aside backgroundColor
	});
	
	// #nav ul 슬라이드
	
	$("#nav li a h4").mouseover(function(){
		$("#nav li ul").fadeIn();
		$("#nav h4").css('border-bottom','1px solid');
		$("#topall").stop().animate({'backgroundColor':'rgba(0,0,0,0.7)'});
	});
	
	$("#topall").mouseleave(function(){
		$("#nav li ul").fadeOut();
		$("#nav h4").css('border-bottom','0');
		$("#topall").stop().animate({'backgroundColor':'rgba(50,58,68,0)'},500);
		
	});
	
	// 비디오 클릭 시 일시정지/재생
	
	$("#at").each(function(){
		var i = 1;
		$(this).click(function(){
		i++;
		if(i %2 == 0) {
			$("#at").get(0).pause();	
		} else {
			$("#at").get(0).play();
			$("#at").prop('muted',false);
		}
		});
	});
	
	// mousewheel scroll animate
	
	$(".slidew").on("mousewheel",function(e,d){
		var move = parseInt($(this).height());
		var display = $(window).scrollTop();
		if(d>0) {
			$('html, body').stop(true).animate({'scrollTop':display-move});
		} else if(d<0)
			$('html, body').stop(true).animate({'scrollTop':display+move},500);
	});
	
	// scroll slideall opacity & aside li backgroundColor
	
	$(window).scroll( function(){
		$("#rightmenu li").css('backgroundColor','white');
		$('.slideall').each( function(){
			var bottomEl = $(this).offset().top + $(this).outerHeight();
			var bottomWi = $(window).scrollTop() + $(window).height();	
			if( bottomWi > bottomEl ){
				$(this).animate({'opacity':'1'},1500);
				
				//aside li backgroundColor
				var idx = $(this).parent('.slidew').index();
				$("#rightmenu li").eq(idx).siblings().css('backgroundColor','white');
				$("#rightmenu li").eq(idx).css('backgroundColor','red');
			}
		}); 
		//aside li.eq(0) backgroundColor
		var TopliColor = $(window).scrollTop();
		if(TopliColor == 0) {
			$("#rightmenu li").eq(0).css('backgroundColor','red');
		}
			
    });
	
	
	//aside 메뉴 클릭
	$("#rightmenu li").click(function(){
		var move = parseInt($('.slidew').height());
		var rightidx = $(this).index();
		$('html, body').stop(true).animate({'scrollTop':move*rightidx});
	
	});
	
	//aside .toplist 메뉴 보이기
	$(window).scroll(function(){
		var display = $(window).scrollTop();
		if(display > 700) {
			$('.toplist').fadeIn();
		} else {
			$('.toplist').hide();
		}
	});
	
	// #topNav2 show&hide
	$(".toplist").click(function(){
		$("#topNav2").animate({'right':'-1%'},600,'easeOutBack');
		$('aside').hide();
	});
	
	$(".removenav").click(function(){
		$("#topNav2").animate({'right':'-10%'},300);
		$('aside').show();
	});
	
	
	//aside 화살표 슬라이드
	$(".toparrow").click(function(){
		var move = parseInt($('.slidew').height());
		var display = $(window).scrollTop();
		$('html, body').stop(true).animate({'scrollTop':display-move});
	});
	
	$(".bottomarrow").click(function(){
		var move = parseInt($('.slidew').height());
		var display = $(window).scrollTop();
		$('html, body').stop(true).animate({'scrollTop':display+move});
	});
	
	
	//#slide2 hover
	$(".allfun img").hover(function(){
		$(".blackb").show();
		$(this).siblings().stop().fadeIn();
		$("#slide2").css({'background':'url(media/fun' + ($(this).parent('dl').index() + 1) + ".jpg)no-repeat", 'backgroundSize':'cover'});
	}, function(){
		$(".blackb").hide();
		$(this).siblings().stop().fadeOut();
		$("#slide2").css({'background':'url(media/07.jpg) no-repeat right top 35%', 'backgroundSize':'cover'});
	});
	
	//#slide4 hover
	$("#slide4 figure").hover(function(){
		$(this).siblings().stop().fadeIn();
	}, function(){
		$(this).siblings().stop().fadeOut();
	});
	
	//#slide5 hover
	
	$("#slide5").hover(function(){
		$(".slide5b").stop().fadeIn(1000);
	}, function(){
		$(".slide5b").stop().fadeOut(1000);
	});
	
});