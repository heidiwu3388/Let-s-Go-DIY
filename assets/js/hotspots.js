// select elements and store them in variables
let categoryContainerEl = document.querySelector("#category-buttons-container");
let hotSpotsEl = document.querySelector("#hotSpots");
const searchBar = document.getElementById("search");


  function getHotspot(cat) {
      console.log("inside getHotpot(", cat, ")");
      // *** compose API URL
      let apiUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Arts&location=denver&categories=Art&limit=6&image_url&name&rating`;
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
          // var businesses = 
          var name = data.businesses[0].name;    
          var rating = data.businesses[0].rating;
          var location = data.businesses[0].location.display_address;
          var imageUrl = data.businesses[0].image_url;
          var url = data.businesses[0].url;
          console.log(name,rating,location,imageUrl,url)
              // *** build HTML and display project ideas
          template = `
            <div class="row d-flex flex-row align-items-start justify-content-start">
              <div class="col-12 col-md-6 col-lg-4">
                  <div class="idea-container border border-danger my-2 width="480">
                  <a hred="${url}">
                    <image src="${imageUrl}" width="580" height="450">
                  </a>
                  <div><strong>${name}</strong></div>
                  <div>Rating: ${rating} ⭐</div>
                  <div>${location}</div>
                  </div>
              </div>
            </div>
          `;               
          hotSpotsEl.innerHTML = template;             
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
        getHotspot(category);
    }
}

//when user click on a category button 
categoryContainerEl.addEventListener("click", function(event){
    let category = event.target.textContent;
    getHotspot(category);
});

// Adding a search bar for user to search location
searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value)
})

