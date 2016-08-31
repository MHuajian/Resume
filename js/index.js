//设置fullpage的配置选项
$(function(){
	$('#dowebok').fullpage({
		scrollingSpeed: 500,
		verticalCentered: false,
		resize: true,
		css3: true,
		anchors: ['page1','page2','page3','page4','page5'],
		menu: 'header,aside',
		afterRender:function(){
			$("#home-content").find("img").css("margin-top","100px");
			    $("#home").find("h1").fadeIn(1000,function(){
					$("#home").find(".hx").animate({"width":"920px"},700,function(){
						$("#home").find("p").eq(0).fadeIn(500,function(){
							$("#home").find("p").eq(1).fadeIn(500,function(){
								$("#home").find("p").eq(2).fadeIn(500,function(){
									$("#home").find("font").fadeIn(500);
								});
							});
						});
					});
				});
		},
		onLeave:function(index,nextIndex,direction){
			if(index ==1){
				 $("#home").find("img").fadeOut(100,function(){
					$("#home").find("h1").fadeOut(100,function(){
						$("#home").find(".hx").fadeOut(100,function(){
							$("#home").find("p").eq(0).fadeOut(100,function(){
								$("#home").find("p").eq(1).fadeOut(100,function(){
									$("#home").find("p").eq(2).fadeOut(100,function(){
										$("#home").find("font").fadeOut(100);
									});
								});
							});
						});
					});
				 });
			}
			if(index == 2){
			    $(".header-section h3").fadeOut(100,function(){
			        $(".header-section .line").animate({"width": 0},100);
			    });
			    $(".about-wrap").animate({"margin-top": "55%",
			    	"width": 0,
			    	"height": 0},2000,"easeOutElastic");
			}
			if (index == 3) {
				 $(".header-section h3").fadeOut(100,function(){
			        $(".header-section .line").animate({"width": 0},100);
			    });
			    $(".cricle-image").animate({"margin-top": "300px","opacity": 0},1000,"easeInOutElastic",function(){
			    	$("svg").fadeOut(200,function () {
			    		$(".skill-percent").fadeOut(200);
			    	});
			    })

			}
			if (index == 4) {
				$(".header-section h3").fadeOut(100,function(){
			        $(".header-section .line").animate({"width": 0},100,function(){
						$(".first").fadeOut(100,function(){
			    	        $(".second").fadeOut(100,function () {
			    		        $(".third").fadeOut(100,function(){
			    		        });
			    			});
			   			 });
			  		});
			    });
				$(".project-left img").animate({"margin-left": "-47px"},100);
			}
			if (index == 5) {
				$(".header-section h3").fadeOut(100,function(){
			        $(".header-section .line").animate({"width": 0},100);
			    });
				$(".content p:eq(0)").fadeOut(200,function(){
			    	$(".content p:eq(1)").fadeOut(200,function(){
			    		$(".content p:eq(2)").fadeOut(200,function(){
			    			$(".content p:eq(3)").fadeOut(200,function(){
			    				$(".content p:eq(4)").fadeOut(200,function(){
			    					$(".contact-main").slideUp(100,function(){
			    						$(".foot").fadeOut(100);
			    					});
			    				});
			    			});
			    		});
			    	});
			    });
			}
		},
		afterLoad: function(anchorLink,index){
			if(index == 1){
				$(".page").css({"background": "url('./images/yq1.png') no-repeat 0 0"});
			    $("#page-home").css({"background": "url('./images/yq2.png') no-repeat 0 0"});
				   $("#home").find("img").fadeIn(500,function(){
					$("#home").find("h1").fadeIn(500,function(){
						$("#home").find(".hx").fadeIn(500,function(){
							$("#home").find("p").eq(0).fadeIn(500,function(){
								$("#home").find("p").eq(1).fadeIn(500,function(){
									$("#home").find("p").eq(2).fadeIn(500,function(){
										$("#home").find("font").fadeIn(500);
									});
								});
							});
						});
					});
				 });
			} 
			if(index == 2){
				$(".page").css({"background": "url('./images/yq1.png') no-repeat 0 0"});
			    $("#page-info").css({"background": "url('./images/yq2.png') no-repeat 0 0"});
			    $(".about-wrap").css("display","block");
			    $(".header-section h3").fadeIn(200,function(){
			        $(".header-section .line").animate({"width": "25px"},200);
			    });
			    $(".about-wrap").animate({"margin-top": "55px",
			    	"width": "1000px",
			    	"height": "450px"},1000,"easeOutElastic");
			}     
			if (index == 3) {
				$(".page").css({"background": "url('./images/yq1.png') no-repeat 0 0"});
			    $("#page-skill").css({"background": "url('./images/yq2.png') no-repeat 0 0"});
			    $(".header-section h3").fadeIn(200,function(){
			        $(".header-section .line").animate({"width": "25px"},200);
			    });
			    $(".cricle-image").animate({"margin-top": "70px","opacity": 1},1000,"easeInOutElastic",function(){
			    	$("svg").fadeIn(1000,function () {
			    		$(".skill-percent").fadeIn(1000);
			    	});
			    });
			}
			if (index == 4) {
				$(".page").css({"background": "url('./images/yq1.png') no-repeat 0 0"});
			    $("#page-project").css({"background": "url('./images/yq2.png') no-repeat 0 0"});
			    $(".header-section h3").fadeIn(200,function(){
			        $(".header-section .line").animate({"width": "25px"},200,function(){
						$(".first").fadeIn(1000,function(){
			    	        $(".second").fadeIn(1000,function () {
			    		        $(".third").fadeIn(1000,function(){
			    		        });
			    			});
			   			 });
			  		});
			    });
			    $(".project-left img").animate({"margin-left": 0},500);

			}
			if (index == 5) {
				$(".page").css({"background": "url('./images/yq1.png') no-repeat 0 0"});
			    $("#page-contact").css({"background": "url('./images/yq2.png') no-repeat 0 0"});
			    $(".header-section h3").fadeIn(200,function(){
			        $(".header-section .line").animate({"width": "25px"},200);
			    });
			    $(".content p:eq(0)").fadeIn(500,function(){
			    	$(".content p:eq(1)").fadeIn(500,function(){
			    		$(".content p:eq(2)").fadeIn(500,function(){
			    			$(".content p:eq(3)").fadeIn(500,function(){
			    				$(".content p:eq(4)").fadeIn(500,function(){
			    					$(".contact-main").slideDown(500,function(){
			    						$(".foot").fadeIn(500);
			    					});
			    				});
			    			});
			    		});
			    	});
			    });
			}
		}
	});
});
//设置尺寸
$(function(){
	$("aside").css({"top":($(".active").height()-$("aside").height())/2});
	$("#home-content").css({"padding-top":($(".active").height()-$("#home-content").height())/5});
	$("#about-content").css({"padding-top":($(".active").height()-$("#about-content").height())/5});
	$("#skill-content").css({"padding-top":($(".active").height()-$("#skill-content").height())/5});
	$("#project-content").css({"padding-top":($(".active").height()-$("#project-content").height())/5});
	$("#contact-content").css({"padding-top":($(".active").height()-$("#contact-content").height())/5});
});