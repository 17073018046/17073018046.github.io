	var bannerWrap=document.getElementsByClassName("box1")[0];
			imgs = bannerWrap.getElementsByTagName("img");
			//			 console.log(bannerWrap);
			var img3 = imgs[2];
			var img1 = imgs[0];
			var img2 = imgs[1];
			img3.addEventListener('mousemove', function(e) {
					for (var i = 0; i < imgs.length; i++) {
						var centerX = imgs[i].offsetLeft + imgs[i].offsetWidth / 2,
							centerY = imgs[i].offsetTop + imgs[i].offsetHeight / 2;
						var deltaX = e.pageX - centerX,
							deltaY = e.pageY - centerY;
						var percentageX = deltaX / centerX,
							percentageY = deltaY / centerY;
						var deg = 10;
//						bannerWrap.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						
						img1.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						img2.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						img3.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + (percentageX+2) * deg + 'deg)';
//						banner1.style.boxShadow = -parseInt(percentageY * 30) + 'px '+ parseInt(percentageX* 20+20)+ 'px ' + '50px #333';
					}
					}); 
					img3.addEventListener('mouseleave', function(e) {
						for (var j= 0; j< imgs.length; j++)
					imgs[j].style.transform = '';
				})
					
					var bannerWrap1=document.getElementsByClassName("box2")[0];
			imgs1 = bannerWrap1.getElementsByTagName("img")[0];
			//			 console.log(bannerWrap);
//			var img3 = imgs[2];
//			var img1 = imgs[0];
//			var img2 = imgs[1];
			imgs1.addEventListener('mousemove', function(e) {
//					for (var i = 0; i < imgs.length; i++) {
						var centerX = imgs1.offsetLeft + imgs1.offsetWidth / 2,
							centerY = imgs1.offsetTop + imgs1.offsetHeight / 2;
						var deltaX = e.pageX - centerX,
							deltaY = e.pageY - centerY;
						var percentageX = deltaX / centerX,
							percentageY = deltaY / centerY;
						var deg = 10;
//						bannerWrap.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						
						imgs1.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
//						img2.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
//						img3.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + (percentageX+2) * deg + 'deg)';
//						banner1.style.boxShadow = -parseInt(percentageY * 30) + 'px '+ parseInt(percentageX* 20+20)+ 'px ' + '50px #333';
//					}
					}); 
					imgs1.addEventListener('mouseleave', function(e) {
//						for (var j= 0; j< imgs.length; j++)
					imgs1.style.transform = '';
				})
					
						var bannerWrap2=document.getElementsByClassName("box3")[0];
			imgs2 = bannerWrap2.getElementsByTagName("img");
			//			 console.log(bannerWrap);
			var Img3 = imgs2[2];
			var Img1 = imgs2[0];
			var Img2 = imgs2[1];
			Img3.addEventListener('mousemove', function(e) {
					for (var x = 0; x < imgs2.length; x++) {
						var centerX = imgs2[x].offsetLeft + imgs2[x].offsetWidth / 2,
							centerY = imgs2[x].offsetTop + imgs2[x].offsetHeight / 2;
						var deltaX = e.pageX - centerX,
							deltaY = e.pageY - centerY;
						var percentageX = deltaX / centerX,
							percentageY = deltaY / centerY;
						var deg = 10;
//						bannerWrap.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						
						Img1.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						Img2.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + percentageX * deg + 'deg)';
						Img3.style.transform = 'rotateX(' + percentageY * -deg + 'deg)'+ 'rotateY(' + (percentageX+2) * deg + 'deg)';
//						banner1.style.boxShadow = -parseInt(percentageY * 30) + 'px '+ parseInt(percentageX* 20+20)+ 'px ' + '50px #333';
					}
					}); 
					Img3.addEventListener('mouseleave', function(e) {
						for (var z= 0; z< imgs2.length; z++)
					imgs2[z].style.transform = '';
				})
					
var banners=document.getElementsByClassName("banner_box");
var items=document.getElementsByClassName("banner_item")[0].getElementsByTagName("a");
var timer=null;
var a=0;
	timer=setInterval(function(){
		a++;
		if(a<3){
			for (var b=0;b<banners.length;b++) {
			banners[b].style.display="none";
			items[b].removeAttribute("class");
		}
		banners[a].style.display="block";
		items[a].setAttribute("class","active");
		}else{
			a=0;
			for (var c=0;c<banners.length;c++) {
			banners[c].style.display="none";
			banners[0].style.display="block";
			items[c].removeAttribute("class");
			items[0].setAttribute("class","active");
		}
		}
	},4000)
	
		for(var d=0;d<items.length;d++){
			items[d].index=d;
			items[d].onclick=function(){
				for(var f=0;f<items.length;f++){
					banners[f].style.display="none";
					items[f].removeAttribute("class");
				}
				this.setAttribute("class","active");
				banners[this.index].style.display="block";
			}
		}
//     var  dscrollTop=document.documentElement.scrollTop||document.body.scrollTop;
function className(obj){
	var g=document.getElementsByClassName(obj)[0];
	return g;
}
	 var returnTop=className("return_top");
     var topNav=className("top_nav");
     window.document.addEventListener("scroll",function(){
     var Top=document.documentElement.scrollTop||document.body.scrollTop;
//   	alert(111)
//   	console.log(dscrollTop);
     	if(Top>=100){
     		topNav.style.display="block";
     	}else{
     		topNav.style.display="none";
     	}
     	if(Top>=1000){
     		returnTop.style.display="block";
     	}else{
     		returnTop.style.display="none";
     	}
     },false)
     returnTop.addEventListener("click",function(){
     	timer=setInterval(function(){
					st=document.documentElement.scrollTop||document.body.scrollTop;
					st-=50;
					document.documentElement.scrollTop=document.body.scrollTop=st;
					if(st<0){
						clearInterval(timer);
					}
					
					
				},10)
     },false)
     var Logo=className("logo");
     var s=0;
     var Dan=className("dan");
     var Card=className("card");
     var Cd=document.getElementById("cd");
     var w=window.innerWidth||document.Element.clientWidth||document.body.clientWidth;
	 var h=window.innerHeight||document.Element.clientHeight||document.body.clientHeight;
     Logo.onclick=function(){
     	s++;
     	if(s>=3){
     		Cd.style.width=w+"px";
     		Cd.style.height=h+"px";
     		Cd.style.background="rgba(0,0,0,0.5)";
     		Dan.style.display="block";
     	}
     }
     Dan.onclick=function(){
     	this.style.display="none";
     	Card.style.display="block";
     }
     Card.onclick=function(){
     	this.style.display="none";
     	Cd.style.display="none";
     }
	 var Phone=document.getElementById("Phone");
	 var Phone2=className("phone2");
	 var Navsub=className("nav_sub");
	 Phone.onmouseover=function(){
	 	Phone2.style.display="block";
	 	Navsub.style.background="#FFFCF5";
	 }
	 Phone2.onmouseleave=function(){
	 	Phone2.style.display="none";
	 	Navsub.style.background="";
	 	
	 }
//----------------	 跳转的坚果手机详情页
var jgPhone=document.getElementById("jgPhone");
	jgPhone.onclick=function(){
		location.assign("jianguo.html");
	}

var persnal=className("persnal_center");
		persnal.onclick=function(){
		window.location.assign("login.html");
			
}
