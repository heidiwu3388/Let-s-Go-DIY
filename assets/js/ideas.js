// select elements and store them in variables
let categoryContainerEl = document.querySelector("#category-buttons-container");


function GetIdeas(cat) {
    console.log("inside GetIdeas(", cat, ")");
    // *** compose API URL
    let apiUrl = ``;
    // get data from API server
    // fetch(apiUrl)
    // .then(function(response){
    //     return response.json();
    //     console.log(response)
    // })
    // .then(function(data){
    //     // *** store required data in variables
        
    //     // *** build HTML and display project ideas
    // })

}


//when page is loaded, parse query string from the URL to get the category
let category = document.location.search.split("=")[1];
console.log("categary: ", category);
if (category.length !== 0) {
    GetIdeas(category);
}

//when user click on a category button 
categoryContainerEl.addEventListener("click", function(event){
    let category = event.target.textContent;
    GetIdeas(category);
});


