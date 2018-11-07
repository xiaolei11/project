//轮播图
var lbz = document.getElementsByClassName('lbz')[0];
// console.log(lbz)
var lbt = document.getElementsByClassName('lbt')
	var num=0;
	var timer;
	var time;
	time=setInterval(fun,5000)
		function fun(){
			timer=setInterval(function(){
				num-=20;
				lbz.style.left = num+'px';
				if(num%1440==0){
				clearInterval(timer)
				}
			},1)
			if(num<=-7200){
				num=0;
				lbz.style.left = num+'px';
			}
		}
		lbz.onmouseover=function(){
			clearInterval(time);
		}
		lbz.onmouseout=function(){
			time = setInterval(fun,5000);
		}
		function right(){
			timer1=setInterval(function(){
				num+=10;
				lbz.style.left = num+'px';
				if(num%1440==0){
				clearInterval(timer1)
				}
			},1)
			if(num<=1400&&num>=0){
				num=-7200;
			}		
		}


	

		//滑动
	var h = document.getElementById('h');
	console.log(h);
	var num1=-1416;
	var t;
	var l= document.getElementsByClassName('left')[4];
	var r = document.getElementsByClassName('right')[4];
	
	l.onclick=function(){	
	clearInterval(t)	
		t = setInterval(function(){
			num1+=6;	
			h.style.left = num1+'px';
			
		if (num1%354==0){
			clearInterval(t)
		}
		},1)
			if(num1>-354){
			
			num1=-2454
			h.style.left = -2454+'px';			
		}
		console.log(num1)	
	}
	


	r.onclick=function(){
		clearInterval(t)
		t = setInterval(function(){
			num1-=6;	
			h.style.left = num1+'px';			
		if (num1%354==0){
			clearInterval(t)
		}
		},1)
			if(num1<-3540){
			
			num1=-1416
			h.style.left = -1416+'px';			
		}
		console.log(num1)
	}



     // 表单验证
	var text = document.getElementsByName('text')[0];
	var form = document.getElementById('form')
	var flag = false;
	var c = document.getElementsByClassName('c')[0]
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
	//吸顶
		$(window).scroll(function(){
			if($('.b').height()<=$(this).scrollTop()){
				$('.top:eq(0)').css('position','fixed').css('top','0').next('.main').css('marginTop',$('.nav').height())
			}else{
				$('.top:eq(0)').css('position','static').next('.main').css('marginTop','0')
			}
		
		})