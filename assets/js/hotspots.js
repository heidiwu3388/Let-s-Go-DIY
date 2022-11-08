// select elements and store them in variables
let categoryContainerEl = document.querySelector("#category-buttons-container");


function GetIdeas(cat) {
    console.log("inside GetIdeas(", cat, ")");
    // *** compose API URL
    let apiUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/serch?term=Art&location=Portland&categories=Art&limit=6&review_count=15&sort_rating=rating`;
    var bearer =
      "Bearer " +
      "VQRWH_9SUAQdwLRaHUYIClL3GJ_Aqg6cjrxxN6tEUT6zC2J_2KbnyuiO0euxKAjx-vYckwlwynJcIGxBgpiz4Geih0KRFxh9oFOKt0jklgA9qlTQe8JL0lW3_dNpY3Yx";
    // get data from API server
    fetch(apiUrl, {
      headers: { Authorization: bearer },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //     // *** store required data in variables
        //     // *** build HTML and display project ideas
      });
  }

  
//when page is loaded, parse query string from the URL to get the category
let query = document.location.search;
// if there is query string
if (!!query) {
    let category = query.split("=")[1];
    console.log("category:", category);
    // if there is a catogory
    if (!!category) {
        GetIdeas(category);
    }
}



// //when page is loaded, parse query string from the URL to get the category
// let category = document.location.search.split("=")[1];
// console.log("category: ", category);
// if (category.length !== null) {
//     GetIdeas(category);
// }





//when user click on a category button 
categoryContainerEl.addEventListener("click", function(event){
    let category = event.target.textContent;
    GetIdeas(category);
});


// https://www.deviantart.com/search/deviations?q=calligraphy
// https://www.deviantart.com/search/deviations?q=scrapbooking
// https://www.deviantart.com/search/deviations?q=knitting
// https://www.deviantart.com/search/deviations?q=jewelry+making
// https://www.deviantart.com/search/deviations?q=drawing
// https://www.deviantart.com/search/deviations?q=painting
// https://www.deviantart.com/search/deviations?q=candle+making
// https://www.deviantart.com/search/deviations?q=polymer+clay
// https://www.deviantart.com/search/deviations?q=metal+stamping
// https://www.deviantart.com/search/deviations?q=crocheting
