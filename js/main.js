function login() {

    if ($("#username").val() == "dene" && $("#password").val() == "123") {
      
      $("#sign").css("display", "none");
      $("#addRecipe").css("display", "block");
      alert("You are a valid user");
    } else {
      alert("You are not a valid user");
    }
  }


  $(".nav-ul li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });


  $("#nav-food").click(function(){

    $('#listTitle').text('New Word');
  })