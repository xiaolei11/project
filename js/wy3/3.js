  
  // 表单验证
	var text = document.getElementsByName('text')[0];
	var form = document.getElementById('form')
	var flag = false;
	var c = document.getElementsByClassName('c')[1]
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