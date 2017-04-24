//获得所有的选择框
var Dots=document.getElementsByClassName("dotS");
//设置开关
var T=true;
//给每一个选择框添加事件
for(var i=0;i<Dots.length;i++){
	Dots[i].onclick=function(){
		if(T){
			this.style.background="dodgerblue";
			T=false;
		}else{
			this.style.background=null;
			T=true;
		}
		
	}
}
//获取全选选择框
var qdot=document.getElementsByClassName("qdot")[0];
//设置开关
var K=true;
	qdot.onclick=function(){
		if(K){
			this.style.background="dodgerblue";
			for(var q=0;q<Dots.length;q++){
				Dots[q].style.background="dodgerblue";
			}
			K=false;
		}else{
			this.style.background="";
			for(var x=0;x<Dots.length;x++){
				Dots[x].style.background="";
			}
			K=true;
		}
	}

//获取"+""-"按钮
var jians=document.getElementsByClassName("jian");
var jias=document.getElementsByClassName("jia");
var nums=document.getElementsByClassName("num");
var xiaojis=document.getElementsByClassName("xiaoji");
//console.log(xiaojis);
var c=0;
var d=0;
var r=0;
//添加"-"的点击事件
for(var a=0;a<jians.length;a++){
	jians[a].index=a;
	jians[a].onclick=function(){
		c=0;
		r=0;
//		console.log(Dots[this.index].style.backgroundColor);
		if(Dots[this.index].style.backgroundColor=="dodgerblue"){
			if((this.nextElementSibling.innerHTML-0)>0){
				this.nextElementSibling.innerHTML=(this.nextElementSibling.innerHTML-0)-1;
				this.parentNode.nextElementSibling.innerHTML=(this.nextElementSibling.innerHTML-0)*
				(this.parentNode.previousElementSibling.lastElementChild.innerHTML-0);
				for(var f=0;f<Dots.length;f++){
//					Dots[f].index=f;
					if(Dots[f].style.backgroundColor=="dodgerblue"){
						c=c+(nums[f].innerHTML-0);
						r=r+(xiaojis[f].innerHTML-0);
					}
					allNum.innerHTML=c;
					$all.innerHTML=r;
				}
			}
		}
	}
}
//添加"+"的点击事件
var k=0;
for(var b=0;b<jias.length;b++){
	jias[b].index=b;
	jias[b].onclick=function(){
		d=0;
		k=0;
		if(Dots[this.index].style.backgroundColor=="dodgerblue"){
			this.previousElementSibling.innerHTML=(this.previousElementSibling.innerHTML-0)+1;
			this.parentNode.nextElementSibling.innerHTML=(this.previousElementSibling.innerHTML-0)*
			(this.parentNode.previousElementSibling.lastElementChild.innerHTML-0);
			for(var g=0;g<Dots.length;g++){
//				console.log(g);
					if(Dots[g].style.backgroundColor=="dodgerblue"){
//						c=0;
						d=d+(nums[g].innerHTML-0);
						k=k+(xiaojis[g].innerHTML-0);
					}
					allNum.innerHTML=d;
					$all.innerHTML=k;
				}
		}
	}
}
//获取共计的元素和总计的金额
var allNum=document.getElementsByClassName("allnum")[0];
var $all=document.getElementsByClassName("$all")[0];

//获取删除按钮
var delBtns=document.getElementsByClassName("delBtn");
for(var h=0;h<delBtns.length;h++){
	delBtns[h].onclick=function(){
		if(this.parentElement.parentElement.firstElementChild.firstElementChild.style.backgroundColor=="dodgerblue"){
			
		this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
		}
	}
}
//获取清空购物车按钮
var delgoods=document.getElementsByClassName("del_goods")[0];
var table=document.getElementsByTagName("table")[0];
var tbody=document.getElementsByTagName("tbody")[0];
var kongkong=document.getElementById("kongkong");
delgoods.onclick=function(){
table.removeChild(tbody);
	kongkong.style.display="inline-block";
}
//获取购物车列表
