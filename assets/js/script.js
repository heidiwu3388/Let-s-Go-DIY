// select elements and store them in variables
let categoryContainerEl = document.querySelector("#category-buttons-container");



function goToIdeasPage(event){
    if (event.target.matches("button")){
        let category = event.target.textContent;
        document.location.href = `./hotspots.html?q=${category}`;
    }
}

categoryContainerEl.addEventListener("click", goToIdeasPage);




