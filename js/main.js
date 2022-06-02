$(document).ready(function () {
  
window.onload = function() {
  var token = localStorage.getItem("token")
  
  console.log(token)

  if(token !== "") {
    // logged
    $("#sign").css("display", "none");
    $("#addRecipe").css("display", "block");
    $("#logout").css("display", "block");
    
  } else {
    // not logged
    $("#sign").css("display", "block");
    $("#addRecipe").css("display", "none");
    $("#logout").css("display", "none");

  }
}

$("#login-button").click(function() {
  var username = $("#username").val()
  var password = $("#password").val()
  

  $.getJSON("/json/users.json", function(data) {
    $.each(data.users, function(i, user){
      if(user.username === username && user.password === password)  {
          localStorage.setItem("token", user.token)
          window.location.reload()
      }
      // else{
      //   alert("user not valid!")
      // }
  })
  })
})

$("#logout").click(function() {
  localStorage.setItem("token", "")
  window.location.reload();
})




  $(".nav-ul li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });

  var food=""

  $("#nav-food").click(function(){

   food = ($("#nav-food").text());

    localStorage.setItem("food", food)
 window.location.replace("list.html")

    $("#listTitle").text(food)
    
  })

  $("#nav-desert").click(function(){

   food = ($("#nav-desert").text());
   

    localStorage.setItem("food", food)
 window.location.replace("list.html")

    $("#listTitle").text(food)
    
  })




  //like animation

  
  function like(id) {

    x = $('#'+id).text()
    num= parseInt(x)
    sum= num+1
    $('#'+id).text(sum)
  }

  $(".heart").on('click touchstart', function(){
    $(this).toggleClass('is_animating');
  });

  $(".heart").on('animationend', function(){
    $(this).toggleClass('is_animating');
  });
})