var phoneColor=document.getElementsByClassName("phone_color")[0];
var colorIis=phoneColor.getElementsByTagName("li");
var phoneImg=document.getElementsByClassName("phone_img")[0];
var phoneImgs=phoneImg.getElementsByTagName("img");
		for(var i=0;i<colorIis.length;i++){
			colorIis[i].index=i;
			colorIis[i].onclick=function(){
				for(var j=0;j<colorIis.length;j++){
					colorIis[j].style.opacity=0.6;
					phoneImgs[j].style.zIndex=0;
				}
				this.style.opacity=1;
				phoneImgs[this.index].style.zIndex=1;
			}
		}
var intBtns=document.getElementsByClassName("int_btn");
var choosePrices=document.getElementsByClassName("choose_price");
//获取价格元素
var priceS=document.getElementsByClassName("priceS")[0];
var priceL=document.getElementsByClassName("priceL")[0];
//获取容量元素
var rongliang=document.getElementsByClassName("rongliang")[0];
//获取价格和容量按钮
var GB16=document.getElementsByClassName("GB16")[0];
var GB32=document.getElementsByClassName("GB32")[0];
//获取版本元素
var banben=document.getElementsByClassName("banben")[0];
//获取版本按钮
var b1=document.getElementsByClassName("int_btn")[0];
var b2=document.getElementsByClassName("int_btn")[1];
b1.onclick=function(){
	b2.style.borderColor="";
	this.style.borderColor="blue";
	banben.innerHTML=b1.innerHTML;
}
b2.onclick=function(){
	b1.style.borderColor="";
	this.style.borderColor="blue";
	banben.innerHTML=b2.innerHTML;
}
   
GB16.onclick=function(){
//	alert(111);
this.style.borderColor="blue";
GB32.style.borderColor="";
	priceS.innerHTML="￥799";
	priceL.innerHTML="￥799";
	rongliang.innerHTML="16GB";
}
GB32.onclick=function(){
	this.style.borderColor="blue";
	GB16.style.borderColor="";
	priceS.innerHTML="￥999";
	priceL.innerHTML="￥999";
	rongliang.innerHTML="32GB";
}
var lis=document.getElementsByClassName("phone_move")[0].getElementsByTagName("li");
var imgs=document.getElementsByClassName("phone_move")[0].getElementsByTagName("img");
var timer=null;
//console.log(lis);
	for(var a=0;a<imgs.length;a++){
		imgs[a].onmouseover=function(){
			up(this.parentNode);
//			console.log(this.style.paddingTop);
		}
		imgs[a].onmouseout=function(){
			down(this.parentNode);
		}
	}
    function up(obj){
    	clearInterval(obj.timer);
    	obj.timer=setInterval(function(){
    	var u=parseInt(obj.style.paddingTop);
    		u-=2;
    		if(u>=0){
    			obj.style.paddingTop=u+"px";
    		}else{
    			clearInterval(obj.timer);
    		}
    		
    	},10)
    }
    function down(foo){
    	clearInterval(foo.timer);
    	foo.timer=setInterval(function(){
    		var d=parseInt(foo.style.paddingTop);
    		d+=2;
    		if(d<=200){
    			foo.style.paddingTop=d+"px";
    		}else{
    			clearInterval(foo.timer);
    		}
    	},10)
    }

//获取到addcar_wrap
var addcar_wrap=document.getElementsByClassName("addcar_wrap")[0];
//console.log(addcar_wrap.offsetTop);6594px

document.addEventListener("scroll",FIX,false);
function FIX(){
var sltop=document.documentElement.scrollTop||document.body.scrollTop;
//	console.log(sltop);
	if(sltop<6000){
		addcar_wrap.style.position="fixed";
		addcar_wrap.style.bottom=0;
	}else{
		addcar_wrap.style.position="";
	}
	
}
//获取加入购物车按钮
var addbtn=document.getElementsByClassName("addBtn")[0];
//获取购物车数字
var shopNum=document.getElementsByClassName("shopping_car_num")[0];
var n=0;
addbtn.onclick=function(){
	n++;
	shopNum.innerHTML=n;
	shopNum.style.background="red";
}
//获取购物车按钮
var shoppingCar=document.getElementsByClassName("shopping_car")[0];
shoppingCar.onclick=function(){
	self.location="shoppingCar.html";
}
