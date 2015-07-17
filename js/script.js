$(document).ready(function(){
	$("#menu").on("click","a",function(event){
		event.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top},800);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$("#button-up").fadeIn();
		}else $("#button-up").fadeOut();
	});
	$("#button-up").click(function(){
		$("html,body").animate({ scrollTop: 0}, 600);
		return false;
	});
});

(function(){
	var redPhone = document.getElementById("red-phone"),
		button = document.getElementById("button"),
		svg = document.getElementById("svg"),
		i = 1;
	button.onmousedown = button.onselectstart = function() {
  		return false;
		};
	svg.onmousedown = svg.onselectstart = function() {
  		return false;
		};
	button.addEventListener("click", function(e){
		if (e.target.getAttribute("data-name") === "n"){
			if ( i === 6) i = 0;
			i++;
			replaceBack(i);
		}else{
			if (i === 1) i = 7;
			i--;
			replaceBack(i);
		}
		function replaceBack(i){
		redPhone.style.background = 'url("img/phone-bag'+i+'.png") no-repeat center';
		redPhone.style.backgroundSize = "80%";
		}
	});
})();

(function(){
	var exitForm = document.getElementById("exit-form"),
		exitArt = document.getElementById("exit-art"),
		form = document.getElementById("form"),
		article = document.getElementById("article"),
		buttonWork = document.getElementById("work-with-us"),
		blog = document.getElementById("blog"),
		readArticle = blog.getElementsByClassName("h3");

	readArticle.forEach = [].forEach;

	buttonWork.addEventListener("click", function(){
		form.style.display = "block";
	});
	exitForm.addEventListener("click", function(){
		form.style.display = "none";
	});
	readArticle.forEach(function(elem){
		elem.addEventListener("click", function(){
			article.style.display = "block";
		});
	});
	exitArt.addEventListener("click", function(){
		article.style.display = "none";
	});
})();

(function mCustomScrollbars(){
	$("#blog_container").mCustomScrollbar("horizontal",200,"easeOutCirc",1,"fixed","yes","yes",20); 
})();

(function(){
	var s = Snap("#svg"),

	x,y,q,w,m,n,rx,ry,

	lineHappy = line(300,325,155,410),
	lineCompled = line(300,325,495,400);
	lineBest = line(620,295,495,400),
	lineSpyt= line(620,295,535,210),
	lineCoffe = line(620,295,780,185),
	lineWining = line(620,295,950,295),

	ballSmall = ball(155,410,20),
	ballHappy = ball(300,325,50).attr({cursor:"default"}),
	ballCompled = ball(495,400,40),
	ballBest = ball(620,295,50).attr({cursor:"default"}),
	ballSpyt = ball(535,210,20),
	ballCoffe = ball(780,185,30),
	ballWining = ball(950,295,80),

	numb225 = numb(266,335,"225",38),
	numb430 = numb(475,410,"430",23),
	numb362 = numb(585,305,"362",38),
	numb1570 = numb(760,190,"1570",20),
	numb122 = numb(895,310,"122",72),

	textHappy = text(260,395,"happy clients"),
	textCompled = text(430,465,"completed projects"),
	textBest = text(590,365,"best shots"),
	textCoffe = text(740,235,"coffees made"),
	textWining = text(885,400,"winning awards");


function line(xn,yn,xm,ym){
	var line = s.line(xn,yn,xm,ym).attr({strokeWidth:2,stroke:"#000"});
	return line;
}
function ball(x,y,r){
	var ball = s.circle(x,y,r).attr({fill:"#3f3b48",cursor:"move"});
	return ball;
}
function numb(x,y,text,size){
	var numb = s.text(x,y,text).attr({fill:"#fff",fontSize:size+"px",fontFamily:"Montserrat",fontWeight:"bold",cursor:"default"});
		return numb;
}
function text(x,y,text){
	var text = s.text(x,y,text).attr({fill:"#000",fontSize:"13px",fontFamily:"Montserrat",fontWeight:"bold"});
	return text;
}

function dragPlanet(ball,line,nub,text,lineTwo){
	ball.drag(function(dx,dy){
		ball.attr({cx:+x+dx,cy:+y+dy});
		line.attr({x2:+x+dx,y2:+y+dy});
		if (nub === undefined){return;}
		nub.attr({x:+q+dx,y:+w+dy});
		text.attr({x:+n+dx,y:+m+dy});
		if (lineTwo === undefined){return;}
		lineTwo.attr({x2:+rx+dx,y2:+ry+dy});
	},function(){
		x = line.attr("x2");
		y = line.attr("y2");
		if (nub === undefined){return;}
		q = nub.attr("x");
		w = nub.attr("y");
		n = text.attr("x");
		m = text.attr("y");
		if (lineTwo === undefined){return;}
		rx = lineTwo.attr("x2");
		ry = lineTwo.attr("y2");
	});
}

dragPlanet(ballSmall,lineHappy);
dragPlanet(ballCompled,lineCompled,numb430,textCompled,lineBest);
dragPlanet(ballSpyt,lineSpyt);
dragPlanet(ballCoffe,lineCoffe,numb1570,textCoffe);
dragPlanet(ballWining,lineWining,numb122,textWining);
})();