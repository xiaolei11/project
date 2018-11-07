		$(window).scroll(function(){
			if($('.b').height()<=$(this).scrollTop()){
				$('.top:eq(0)').css('position','fixed').css('top','0').next('.main').css('marginTop',$('.nav').height())
			}else{
				$('.top:eq(0)').css('position','static').next('.main').css('marginTop','0')
			}
			// $('.b').click(function(){
			// 	// console.log(111)
			// 	$( ).scrollTop(500)
			// })
		})



	var text = document.getElementsByName('text')[0];
	var form = document.getElementById('form')
	var flag = false;
	var c = document.getElementsByClassName('c')[0];
	var sub = document.getElementsByName('订阅')[0];
	var bt = document.getElementsByClassName('bt')[0];

	// console.log(bt);

	text.onblur = function(){
			if(this.value==''){
				this.nextSibling.nextSibling.innerHTML = '“电邮地址”为必填项。'
				c.innerHTML ='×'
				this.style.border= '1px solid red';
				// flag=false;
			}else{
			  flag=true;
			}
		}
	form.onsubmit =function(){
			// return flag;
			if(text.value==''){
				text.nextSibling.nextSibling.innerHTML = '“电邮地址”为必填项。'
				c.innerHTML ='×'
				text.style.border= '1px solid red';
				bt.innerHTML ='*必填'
				bt.style.color='red';
			}else{
				return flag;
			}
		}

			//滑动
	var h = document.getElementById('h');
	var num1=-1416;
	var t;
	var l= document.getElementsByClassName('left')[2];
	var r = document.getElementsByClassName('right')[2];
	
	l.onclick=function(){		
		clearInterval(t)
		t = setInterval(function(){
			num1-=6;	
			h.style.left = num1+'px';
			
		if (num1%354==0){
			clearInterval(t)
		}
		},1)
		if(num1<-4956){
			
			num1=-1416
			h.style.left = -1416+'px';			
		}
		console.log(num1)
	}	


	r.onclick=function(){
		clearInterval(t)
		t = setInterval(function(){
			num1+=6;
			h.style.left = num1+'px';
			
		if (num1%354==0){
			clearInterval(t)
		}
		},1)
		if(num1>-354){
			
			num1=-3894
			h.style.left = -3894+'px';			
		}
		console.log(num1)
	}

		$(function(){
			
			$('#d li').click(function(){
				if($(this).attr('a')=='0'){
					$(this).attr('a','1')

					$(this).find('.non').slideToggle()
					$(this).find('.shu').css('transform','rotate(90deg)').css('transition','all .4s linear')
					$(this).siblings().attr('a','0')
					$(this).siblings().find('.non').slideUp()
					$(this).siblings().find('.shu').css('transform','rotate(0deg)').css('transition','all .4s linear')
					// console.log($(this).attr('a'))
				}else{
					$(this).attr('a','0')
					$(this).find('.non').slideUp()					
					
					$(this).find('.shu').css('transform','rotate(0deg)').css('transition','all .4s linear')
				}
				
				$(this).siblings().find('.non').slideUp()
				$(this).siblings().find('.shu').css('transform','rotate(0deg)').css('transition','all .4s linear')
			})
			$('h4:eq(0)').click(function(){
				if($(this).attr('b')=='1'){
					$(this).attr('b','0')
					$(this).find('.tt').slideDown()
					$(this).find('.i').css('transform','rotate(180deg)').css('transition','all .2s linear')
				}else{
					$(this).attr('b','1')
					$(this).find('.tt').slideUp()
					$(this).find('.i').css('transform','rotate(0deg)').css('transition','all .2s linear')
				}
				
				
			})
		})