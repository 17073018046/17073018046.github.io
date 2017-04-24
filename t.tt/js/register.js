var Right=document.getElementsByClassName("Right")[0];
	Right.onclick=function(){
		this.style.background="blue";
	}
//获得所有的输入框
var ipts=document.getElementsByClassName("ipt");
//给所有的输入框添加获取焦点和失去焦点事件
for(var i=0;i<ipts.length;i++){
	ipts[i].onfocus=function(){
		Focus(this);
	}
	ipts[i].onblur=function(){
		Blur(this);
	}
}
	function Focus(obj){
		obj.value="";
		obj.style.border="1px solid blue";
	}
	
	
var ipt1=document.getElementsByClassName("ipt")[0];
var ipt2=document.getElementsByClassName("ipt")[1];
var ipt3=document.getElementsByClassName("ipt")[2];
var ipt4=document.getElementsByClassName("ipt")[3];
var d1=document.getElementsByClassName("d1")[0];
var d2=document.getElementsByClassName("d2")[0];
var d3=document.getElementsByClassName("d3")[0];
var d4=document.getElementsByClassName("d4")[0];
var m1=document.getElementsByClassName("m1")[0];
var m2=document.getElementsByClassName("m2")[0];
var m3=document.getElementsByClassName("m3")[0];
var m4=document.getElementsByClassName("m4")[0];
var Pnum=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var Email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var Password=/^[a-zA-Z]\w{5,17}$/;
	ipt1.onblur=function(){
		this.style.border="";
		if(this.value==""||this.value==null){
			this.value="请输入手机号";
			d1.style.display="none";
		}else{
			if(Pnum.test(this.value)){
				d1.style.display="block";
				document.cookie="useName="+ipt1.value;
			}else{
				this.value="请输入正确的手机号";
				d1.style.display="none";
			}
		}
	}
	
	ipt2.onblur=function(){
		this.style.border="";
		if(this.value==""||this.value==null){
			this.value="请输入邮箱地址";
			d1.style.display="none";
		}else{
			if(Email.test(this.value)){
//				alert(111)
				d2.style.display="block";
			}else{
				this.value="请输入正确的邮箱地址";
				d1.style.display="none";
			}
		}
	}
	ipt3.onfocus=function(){
		m1.style.display="none";
		m3.style.display="none"
		this.style.border="1px solid blue";
	}
	ipt3.onblur=function(){
		this.style.border="";
		if(this.value==""||this.value==null){
			d3.style.display="none";
			m3.style.display="block"
			
		}else{
			if(Password.test(this.value)){
				d3.style.display="block";
			}else{
				m3.style.display="block"
				d3.style.display="none";
				this.value="";
			}
		}
	}
	ipt4.onfocus=function(){
		this.style.border="1px solid blue";
		m2.style.display="none";
		m4.style.display="none";
	}
	ipt4.onblur=function(){
		this.style.border="";
		if(this.value==""||this.value==null){
			m4.style.display="block";
			d4.style.display="none";
		}else{
			if(ipt3.value==ipt4.value){
				d4.style.display="block";
				document.cookie="passWord="+ipt4.value;
				btn.style.opacity=1;
			}else{
				this.value="";
				m4.style.display="block";
			}
		}
	}

//点击注册按钮时,存cookie
var btn=document.getElementsByClassName("btn")[0];
btn.onclick=function(){
	if(d1.style.display=="block"&&d2.style.display=="block"&&d3.style.display=="block"&&d4.style.display=="block"){
	location.assign("login.html");
		
	}
			
		
	
}
