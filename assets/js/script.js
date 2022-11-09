// select elements and store them in variables
const apiKeyYouTube = "AIzaSyBT5Jp3mNr4LyeII6cjqzdru5xFWPs-Prw";
let categoryContainerEl = document.querySelector("#category-buttons-container");
let projectContainerEl = document.querySelector("#project-container");
let allCategories=["Calligraphy", 
                "Scrapbooking",
                "Knitting",
                "Jewelry Making",
                "Drawing",
                "Candles",
                "Polymer Clay",
                "Metal Stamping",
                "Crocheting",];
 


function getProjectIdeas(cat) {
    //
    // let catString = cat.trim().replace(" ", "+");
    let queryString = `${cat.trim().replace(" ", "+")}+DIY+HowTo`
    console.log("queryString: ", queryString);
    
    urlYouTubeSearch = `https://www.googleapis.com/youtube/v3/search?key=${apiKeyYouTube}&q=${queryString}&kind=video&part=snippet&maxResults=6`;
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
            let title = data.items[i].snippet.title;
            console.log("title", i, title);
            // build HTML to display the title, the video and the favorite button
            template += `
                <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <div class="text-dark fs-5 my-2">${title}</div>
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
                    <button type="button" class="btn btn-outline-light mt-1 mb-5 data-video-id=${videoId}">
                        🤍&nbsp&nbspFavorite Me
                    </button>
                </div>
            `;   
        }      
        projectContainerEl.innerHTML = template;   
        
    })
}

// handler when one of the Category buttons is clicked
categoryContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        category = event.target.textContent;
        getProjectIdeas(category); //get project ideas of the category
    }
});

// handler when one of the Favorite buttons is clicked





