let favoritesContainerEl = document.querySelector("#favorites-container");
let allFavorites = JSON.parse(localStorage.getItem("MyFavoriteProjects"));
console.log("allFavorites", allFavorites)
console.log(allFavorites.length)
function renderFavorite(){

    template = ``;
    for (let i = 0; i < allFavorites.length; i++) {
        let id = allFavorites[i].id;
        let title = allFavorites[i].title;
        console.log("id,title", i, id, title);
        template += `
        <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
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
    favoritesContainerEl.innerHTML = template;
}
// Start Here 
renderFavorite();
favoritesContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")){
        let id = event.target.dataset.videoId;
        let removeIndex;
        for (let i = 0; i < allFavorites.length; i++){
            if (id === allFavorites[i].id){
                removeIndex; 
            }
        }
        allFavorites.splice(removeIndex, 1);
        console.log(allFavorites);
        localStorage.setItem("MyFavoriteProjects",JSON.stringify(allFavorites));
        renderFavorite();
    }
})




