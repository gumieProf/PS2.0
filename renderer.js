var jquery = require('jquery');
var $ = jquery
var texts = []
var canvas;
var cvs;
$(function(){
   canvas = document.querySelector("canvas");
   cvs = canvas.getContext('2d');
   cvs.fillStyle = "#fff";
   cvs.fillRect(0,0, canvas.height,canvas.width);
  function get(){
  if($("li").length){
    $("li").each(function(){
      var inp= $(this).children("input");
      texts.push(inp.val());
    });
    draw()
}else{
  cvs.clearRect(0,0,canvas.height,canvas.width);
  cvs.fillStyle = "#fff";
  cvs.fillRect(0,0, canvas.height,canvas.width);
}
}
function draw(){
  cvs.clearRect(0,0,canvas.height,canvas.width);
  cvs.fillStyle = "#fff";
  cvs.fillRect(0,0, canvas.height,canvas.width);
  var y=50;
  cvs.font="50px Roboto medium"
  cvs.fillStyle = "#000";
  for (let index = 0; index < texts.length; index++) {
    cvs.fillText(texts[index], 20,y);
    y=y+50;
  }
  var y=0;
  texts=[]
}
$("#addSolo").click(function(){
  var list = $("ul");
  var elem=$("<li class='solo input'></li>");
  var input = $("<input type='text'>");
  var btn = $("<a href='#'>X</a>");
  elem.append(input);
  elem.append(btn);
  list.append(elem);
  btn.click(function(){
    var list = $(this).parent();
    list.remove();
    get();
    return false;
  });
  return false;
});
$(document).on("keyup", ".input>input", function(){
  get();
});
});