document.write("Let's begin!");
var d = new Date();
var time = d.getHours();
if (time<10)
{
	alert("早上好~记得做早操噢！");
}
else if (time>=10 && time<=17)
{
	alert("白天好~有没有和小伙伴好好玩耍呢？");
}
else
{
	alert("晚上好!今天也要早点睡哦!");
}
function sayHello(){
  var response = prompt("你叫什么名字呢？");
   alert(response+"小朋友,准备好了吗？那我们开始吧！");
}
function play(){
window.location.href="exercise_8(1).html"
}
