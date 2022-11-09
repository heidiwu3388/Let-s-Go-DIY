// select elements and store them in variables
const apiKeyYouTube = "AIzaSyBT5Jp3mNr4LyeII6cjqzdru5xFWPs-Prw";
let categoryContainerEl = document.querySelector("#category-buttons-container");
let projectContainerEl = document.querySelector("#project-container");
let allFavorites = [];
    
 function init() {
    allFavorites = JSON.parse(localStorage.getItem("MyFavoriteProjects")||"[]");
    console.log("allFavorites: ", allFavorites);
 }


function getProjectIdeas(cat) {
    // build the YouTube search API URL
    urlYouTubeSearch = `https://www.googleapis.com/youtube/v3/search`
    urlYouTubeSearch += `?key=${apiKeyYouTube}`
    urlYouTubeSearch += `&q=${cat.trim().replace(" ", "+")}+DIY+HowTo`
    urlYouTubeSearch += `&kind=video`
    urlYouTubeSearch += `&part=snippet`
    urlYouTubeSearch += `&maxResults=6`
    urlYouTubeSearch += `&order=viewCount`;

    fetch(urlYouTubeSearch)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log("YouTube Search data: ", data);
        
        template = ``;
        for (let i=0; i<data.items.length; i++) {
            // get title and video id from data
            let videoId = data.items[i].id.videoId;
            let videoTitle = data.items[i].snippet.title;
            console.log("title", i, videoTitle);
            // build HTML to display the title, the video and the favorite button
            template += `
                <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <div class="text-dark fs-5 my-2">${videoTitle}</div>
                    <div class="iframe-container">
                        <iframe class="mb-1"
                            width="480" 
                            height="270" 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <button type="button" class="btn btn-outline-light mt-1 mb-5" data-video-id="${videoId}" data-video-title="${videoTitle}">
                        🤍&nbsp&nbspFavorite Me
                    </button>
                </div>
            `;   
        } 
        projectContainerEl.innerHTML = template;   
        // if the project is already in favorite list (allFavorites), disable the favorite button
        
    })
}

// call init() to load local storage (MyFavoriteProjects) into array allFavorites
init();

// handler when one of the Category buttons is clicked
categoryContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        category = event.target.textContent;
        getProjectIdeas(category); //get project ideas of the category
    }
});

// handler when one of the Favorite buttons is clicked
projectContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        // build the favorite object
        let vTitle = event.target.dataset.videoTitle;
        console.log("vTitle: ", vTitle);
        let vId = event.target.dataset.videoId;
        console.log("vId: ", vId);
        let favorite = {
            title : vTitle,
            id : vId,
        }
        // add new favorite to allFavorites array
        allFavorites.push(favorite);
        // store allFavorites to local storage
        localStorage.setItem("MyFavoriteProjects", JSON.stringify(allFavorites));
        // disable the favorite button
        event.target.setAttribute("disabled", "true");
    }
})





