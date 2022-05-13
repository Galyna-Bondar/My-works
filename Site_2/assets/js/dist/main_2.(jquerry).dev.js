"use strict";

//$(document).ready(function){}  - устаревшая запись
$(function () {
  //должна быть одна, достаточно одной и туда все
  $("body").width(); // $("body").height();
  //$("input").mask();

  console.log($('body').css('margin-top', '200px'));
  $("body").css({
    'background-color': 'tomato',
    fontSize: '26px',
    color: 'blue'
  });
  $("p:eq(2)"); //$("p:eq(2)").css('color', 'green')       если конкретный надо 
  //$("p").eq(2)").css('color', 'green')     - если перебераю , впихивю итератор
  //$("p:eq(2)").css('color', 'green')  
  //$("p").eq(i)").css('color', 'green')  

  $("p").addClass("foo");
  $(".wrap p").addClass("bar"); //вместо $ можно исп jQuery(function()){});

  $("p").on('click', function () {
    //   $("p").click(function(){  
    $(this).remove();
  });
  $("#my_div").on('click', function () {
    $(this).animate({
      width: '200px',
      height: '200px',
      'background-color': 'yellow'
    }, 1000);
  });
  $("#my_div").on('click', function () {
    //  $(this).html('<p>Hello<p>');
    var $page = $(page_html);
    console.log($page.find("h1").text());
    console.log($page.find(".localtime").attr("datetime"));
    $page.find("[data-loaded='yes']");
    $("#my_div"); // = тоже самое document.getElementById("my_div"), не исп ванильный (нативный) js вместе с библиотекой jquery
  });
}); //$(window)