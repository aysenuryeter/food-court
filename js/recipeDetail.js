food = localStorage.getItem("food")

url = ""
if(food === "Foods"){
    url="https://onurgozcu.com/food-court/api/food/getAllFoods";
}
else{
    url="https://onurgozcu.com/food-court/api/food/getAllDeserts";

}

$.getJSON(url, function(data){
 var html = "";
 console.log(data)
 $("#listTitle").text(food)
 $("#recipeCard").html("");
 $.each(data.foods, function(i, item){
    console.log(data.food)
    console.log(item)
     
        $("#recipeCard").append(
            '<div id="'+i+ '" class="col" ><div class="recipeCard" ><div class="topCard"><img class="recipeImg"src="'+
            item.image+'"alt="recipe"></div><div class="bottomCard"><a class="recipeTitle" href="recipe.html">' +
            item.name + '</a><div class="iconArea"><div class="icon"><i class="fa-solid fa-message"></i><span>' + 
            item.isTrend + '</span></div><div class="icon"><div class=" icon heart"><span id="span7" onclick="like(id)" >' +
            item.likeCount +'</span></div></div></div></div></div></div>'
        
          
            )
          
 

     $('#'+i).click(function(){
       var title = ($("#" + i + " .recipeTitle").text());
       var number = item.id
        localStorage.setItem("title", title)
        localStorage.setItem("number", number)
    })


 });

});

