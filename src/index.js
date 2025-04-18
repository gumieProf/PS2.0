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

var jquery = require("jquery");
var $ = jquery;
var texts = [];
var canvas;
var cvs;
var Defx = 20;
var y = 50;
$(function () {
  canvas = document.querySelector("canvas");
  cvs = canvas.getContext("2d");
  cvs.fillStyle = "#fff";
  cvs.fillRect(0, 0, canvas.height, canvas.width);
  async function get() {
    // Reset canvas
    cvs.clearRect(0, 0, canvas.height, canvas.width);
    cvs.fillStyle = "#fff";
    cvs.fillRect(0, 0, canvas.height, canvas.width);
    cvs.fillStyle = "#000";
    // Set font
    var sct = $("#font").value;
    if ($("#bold").prop("checked")) {
      cvs.font = "bold 50px " + sct;
    } else {
      cvs.font = "50px " + sct;
    }
    // get texts
    if ($("li").length) {
      $("li").each(function () {
        var inp = $(this).children("input");
        var obj = {
          text: inp.val(),
          x: Defx,
        };
        texts.push(obj);
      });
    }
    y = 50;
  }
  async function draw() {
    // Set first potision
    // Draw texts
    for (var txt of texts) {
      cvs.fillText(txt.text, txt.x, y);
      y = y + 50;
    }
    // Reset texts
    texts = [];
  }
  async function main() {
    await get();
    await draw();
  }
  $("#addSolo").click(function () {
    var list = $("ul");
    var elem = $("<li class='solo input'></li>");
    var input = $("<input type='text'>");
    var btn = $("<a href='#' class='del'><i class='fa-solid fa-circle-xmark'></i></a>");
    elem.append(input);
    elem.append(btn);
    list.append(elem);
    btn.click(function () {
      var list = $(this).parent();
      list.remove();
      main();
      return false;
    });
    return false;
  });
  $(document).on("keyup", ".input>input", function () {
    main();
  });
  $(document).on("click", ".del", function () {
    main();
  });
  $("#bold, #font").change(function () {
    main();
  });
});
