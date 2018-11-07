	$(function(){
			/*
				hover(
					function(){
						鼠标移入时触发
					},function(){
						鼠标移出时触发
					
				)
			*/
			$('.ct:eq(0)').mouseover(function(){
				$('.head').css({'backgroundImage':'url(images/bj1.jpg)','backgroundSize':'100%','backgroundPosition':'center'})
			})
			
			$('.ct:eq(1)').mouseover(function(){
				$('.head').css({'backgroundImage':'url(images/bj2.jpg)','backgroundSize':'100%','backgroundPosition':'center'})
			})
		})
	var text = document.getElementsByName('text')[0];
	var form = document.getElementById('form')
	var flag = false;
	var c = document.getElementsByClassName('c')[0]
	var sub = document.getElementsByName('订阅')[0];
	var bt = document.getElementsByClassName('bt')[0];

	console.log(bt);

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
	// 		// else{
	// 		// 	pass.nextSibling.innerHTML = '√';
	// 		// 	// pass.nextSibling.style.color = 'green';
	// 		// 	flag=true;
	// 		// }
	// 		// console.log(this.value)
	// 	}