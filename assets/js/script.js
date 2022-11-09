// select elements and store them in variables
const apiKeyYouTube = "AIzaSyBT5Jp3mNr4LyeII6cjqzdru5xFWPs-Prw";
let categoryContainerEl = document.querySelector("#category-buttons-container");
let iframeContainerEl = document.querySelector("#iframe-container");
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
    
    urlYouTubeSearch = `https://www.googleapis.com/youtube/v3/search?key=${apiKeyYouTube}&q=${queryString}+DIY+howto&kind=video&part=snippet`;
    fetch(urlYouTubeSearch)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log("YouTube Search data: ", data);
        // get title and video id from data
        let videoId = data.items[0].id.videoId;
        let title = data.items[0].snippet.title;
        console.log("title: ",title);
        // build HTML to display the title, the video and the favorite button
        let template = `
            <div class="text-dark fs-5 my-2">${title}</div>
            <iframe class="mb-1"
                width="480" 
                height="270" 
                src="https://www.youtube.com/embed/${videoId}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <button type="button" class="btn btn-outline-light my-1 data-video-id=${videoId}">
                🤍&nbsp&nbspFavorite Me
            </button>
        `;         
        iframeContainerEl.innerHTML = template;   
        
    })
}
// when the page is loaded, get Project of the day form YouTube
categoryContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        category = event.target.textContent;
        getProjectIdeas(category);
    }
});




