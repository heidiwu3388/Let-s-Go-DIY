// get html elements and store them in variables 
let favoritesContainerEl = document.querySelector("#favorites-container");
let allFavorites = JSON.parse(localStorage.getItem("MyFavoriteProjects"));

// render HTML to display favorites from the array allFavorities
function renderFavorite(){
    template = ``;
    // loop through the array allFavarites
    for (let i = 0; i < allFavorites.length; i++) {
        // get favorite project data from the object of the array
        let id = allFavorites[i].id;
        let title = allFavorites[i].title;
        // build the HTML for each project
        template += `
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <div class="text-dark fs-5 my-2">${title}</div>
            <div class="iframe-container">
                <iframe class="mb-1"
                    width="480" 
                    height="270" 
                    src="https://www.youtube.com/embed/${id}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <button type="button" class="btn btn-outline-light mt-1 mb-5" data-video-id="${id}" data-video-title="${title}">
            🗑️&nbsp&nbspRemove Me
            </button>
        </div>
        `;
    }
    // attach the dynamically generated HTML to the container element (favoritesContainerEl)
    favoritesContainerEl.innerHTML = template;
}

// *** Start Here ***
renderFavorite(); 
favoritesContainerEl.addEventListener("click", function(event){
    // if button is clicked
    if (event.target.matches("button")){
        // get video id (custom data attributes) from the button element
        let id = event.target.dataset.videoId;
        // loop through the array to match the video id
        let removeIndex;
        for (let i = 0; i < allFavorites.length; i++){
            if (id === allFavorites[i].id){
                removeIndex = i; 
                break;
            }
        }
        // remove the matched item from the array allFavorites
        allFavorites.splice(removeIndex, 1);
        // store the updated array to local storage
        localStorage.setItem("MyFavoriteProjects",JSON.stringify(allFavorites));
        // display updated favorite project
        renderFavorite();
    }
})




