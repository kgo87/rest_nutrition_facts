// Initializing global variables
var rest_name;


// var localStorageCont = JSON.parse(localStorage.getItem("city_list"));
// if (localStorageCont===null) {
//     cities = [];
// }
// else {
//     cities = localStorageCont
//     city = cities[cities.length-1];
//     displayCityWeather(city);
// }



 function displayMenu(rest_name) {
    var queryURL = "https://api.nutritionix.com/v1_1/search/" + rest_name+ 
    "?results=0:30&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_sugars,nf_protein,nf_calcium_dv,nf_serving_weight_grams,nf_ingredient_statement&images_front_full_url&appId=7a3acc47&appKey=d77a7c19e5913ea7bb5b58a55dbbb63d";

   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {
       console.log(response.hits);
       console.log(response.hits[0].fields.item_name);

       var full_menu = response.hits;
       renderMenu(full_menu);


   });

 }



  // Adding click event listeners to all elements with a class of "city"
//   $(document).on("click", ".city", savedCityClick);



//  function renderButtons() {

//    $("#cities-view").empty();

//    for (var i = 0; i < cities.length; i++) {
       
//      var a = $("<button>");
//      a.addClass("city");
//      a.attr("data-name", cities[i]);
//      a.text(cities[i]);
//      var linebreak = $("<br>");
//      $("#cities-view").prepend(a, linebreak);
//    }
//  }


 $("#button-addon2").on("click", function(event) {
   event.preventDefault();
   var rest_name = $("#search-rest").val().trim();
   displayMenu(rest_name);
//    if (cities.indexOf(city) === -1){
//     cities.push(city);
//    }
//    localStorage.setItem("city_list", JSON.stringify(cities));

//    renderButtons();
//    $("#show_city").text(city);

 });




//  renderButtons();

//  function savedCityClick(event) {
//     event.preventDefault(); 
//     var city = $(this).attr("data-name");
//     displayCityWeather(city)
//  }


function renderMenu(full_menu) {
    $("#menu_items").empty();
    for (var i=0; i<full_menu.length; i++) {
        const item = full_menu[i].fields.item_name;
        const nf_calories = full_menu[i].fields.nf_calories;
        const nf_cholesterol = full_menu[i].fields.nf_cholesterol;
        const nf_sodium = full_menu[i].fields.nf_sodium;
        const nf_total_carbohydrate = full_menu[i].fields.nf_total_carbohydrate;
        const nf_sugars = full_menu[i].fields.nf_sugars;
        const nf_protein = full_menu[i].fields.nf_protein;
        const nf_total_fat = full_menu[i].fields.nf_total_fat;
        const nf_calcium_dv = full_menu[i].fields.nf_calcium_dv;
        const nf_serving_weight_grams = full_menu[i].fields.nf_serving_weight_grams;

        var menu_element = $(`
        <div class="card w-50" id = "menu_card">
            <div class="card-body">
                <h5 class="card-title">${item}</h5>
                <p class="card-text">${"Calories: " + nf_calories}</p>
                <p class="card-text">${"Cholesterol: " + nf_cholesterol}</p>
                <p class="card-text">${"Sodium: " + nf_sodium}</p>
                <p class="card-text">${"Total Carbs: " + nf_total_carbohydrate}</p>
                <p class="card-text">${"Sugars: " + nf_sugars}</p>
                <p class="card-text">${"Protein: " + nf_protein}</p>
                <p class="card-text">${"Total Fat: " + nf_total_fat}</p>
                <p class="card-text">${"Calcium: " + nf_calcium_dv}</p>
                <p class="card-text">${"Serving Size weight (g): " + nf_serving_weight_grams}</p>

            </div>
      </div>`)
    
      $("#menu_items").append(menu_element);
    }


}

 