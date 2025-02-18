/*

MIT License

Copyright (c) 2024 gumieProf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

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
  var sct=$("font").value()
  cvs.clearRect(0,0,canvas.height,canvas.width);
  cvs.fillStyle = "#fff";
  cvs.fillRect(0,0, canvas.height,canvas.width);
  var y=50;
  cvs.font="bold 50px "+sct
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
  var btn = $("<div class='del'><a href='#'>X</a></div>");
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