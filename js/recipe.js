let title = localStorage.getItem("title")
let number = localStorage.getItem("number")
food = localStorage.getItem("food")
console.log(food)

var url =
"https://onurgozcu.com/food-court/api/food/getFoodDetails?foodId="+number;
$.getJSON(url, function(data){
    console.log(data)
    $.each(data.food, function(i, item){
        console.log(title)
        if(item.name === title) {
            console.log(item)
            $("#breadcrumb-item").text(item.name)
            $("#recipeTime").text(item.preparationTime)
             $("#recipeDifficulty").text(item.difficulty)
            $("#recipePortion").text(item.portionCount)
            $("#recipeListName").text(item.name)
            $("#titleRecipe").text(item.name)
            $("#writer").text(item.userName)
            $("#recipeImg").append(
                '<img src="' + item.image + '"alt="recipe">' )

                $("#writerImg").append(
                    '<img src="' + item.image + '"alt="profile">' )
           
                $.each(item.steps, function(i, step){
                    $("#recipeList").append(
                '  <div class="recipeItem"><h5>Step ' + (i+1) +'</h5><span>' +
                step.content +' </span></div>' )
            
            })

            $.each(item.materials, function(i, material){
                $("#materialContent").append(
            '<p>'+material.content +'</p>' )
        
        })
                

        }
    })
})