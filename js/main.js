
function login() {

    if ($("#username").val() == "admin" && $("#password").val() == "123") {
      
      $("#sign").css("display", "none");
      $("#addRecipe").css("display", "block");
      alert("You are a valid user");

    } else {
      alert("You are not a valid user");
    }
  }

  function like(id) {
      
        x = $('#'+id).text()
        num= parseInt(x)
        sum= num+1
        $('#'+id).text(sum)
        console.log(x)
      }



  $(".nav-ul li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });


//   like animation 
  $(".heart").on('click touchstart', function(){
    $(this).toggleClass('is_animating');
  });
  
  $(".heart").on('animationend', function(){
    $(this).toggleClass('is_animating');
  });
  