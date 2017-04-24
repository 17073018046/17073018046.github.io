var userName=document.getElementById("userName");
var passWord=document.getElementById("passWord");
var userNameWrong=document.getElementsByClassName("userNameWrong")[0];
var passWordWrong=document.getElementsByClassName("passWordWrong")[0];
var m1=document.getElementsByClassName("m1")[0];

		userName.onfocus=function(){
			Remove(this);
		}
		passWord.onfocus=function(){
			m1.style.display="none";
//			Remove(this);
			
		}
	
		function Remove(obj){
			obj.value="";
			obj.style.border="1px solid blue";
		}

//	console.log(u);
		userName.onblur=function(){
			this.style.border="";
			if(this.value==""||this.value==null){
				this.value="用户名不能为空";
			}else{
				if(this.value==u){
					userNameWrong.style.display="none";
					
				}else{
					userNameWrong.style.display="block";
				}
			}
		}
		passWord.onblur=function(){
			this.style.border="";
			
			if(this.value==p){
				passWordWrong.style.display="none";
			}else{
				passWordWrong.style.display="block";
				
			}
		}
var register=document.getElementsByClassName("register")[0];
register.onclick=function(){
	location.assign("register.html");
}
//		获得cookie
var x=document.cookie;
var arr=x.split(";");
	u=(arr[0].split("="))[1];
	p=(arr[1].split("="))[1];

var btn=document.getElementsByClassName("btn")[0];
btn.onclick=function(){
	if(userName.value==u&&passWord.value==p){
		
	location.assign("t.tthome.html");
	}
}
