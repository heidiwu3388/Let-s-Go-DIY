// select elements and store them in variables
const apiKeyYouTube = "AIzaSyBT5Jp3mNr4LyeII6cjqzdru5xFWPs-Prw";
let categoryContainerEl = document.querySelector("#category-buttons-container");
let allCategories=["Calligraphy", 
                "Scrapbooking",
                "Knitting",
                "Jewelry Making",
                "Drawing",
                "Candles",
                "Polymer Clay",
                "Metal Stamping",
                "Crocheting",];
 


function projectOfTheDay() {
    // let randomIndex = Math.floor(Math.random()*allCategories.length);
    // let randomCategory = allCategories[randomIndex];
    // let queryString = `${randomCategory}+DIY+HowTo`
    // console.log("random: ", randomIndex, randomCategory);
    
    // urlYouTubeSearch = `https://www.googleapis.com/youtube/v3/search?key=${apiKeyYouTube}&q=${queryString}+DIY+howto&kind=video&part=snippet`;
    // fetch(urlYouTubeSearch)
    // .then(function(response){
    //     return response.json();
    // })
    // .then (function(data){
    //     console.log("YouTube Search data: ", data);
    //     // get video id from data
    //     let videoId = data.items[0].id.videoId;
    //     console.log("video id: ", videoId);
    //     // get embed HTML by video id
    //     let urlGetVideoById =`https://youtube.googleapis.com/youtube/v3/videos?key=${apiKeyYouTube}&part=player&id=${videoId}`;
    //     fetch(urlGetVideoById)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(data){
    //         console.log("Get Video by ID data: ", data);
    //         let embedHtml = data.items[0].player.embedHtml;
    //         console.log("embed HTML: ", embedHtml);


    //     });
    // });
}
function goToIdeasPage(event){
    if (event.target.matches("button")){
        let category = event.target.textContent;
        document.location.href = `./ideas.html?q=${category}`;
    }
}



// when the page is loaded, get Project of the day form YouTube
projectOfTheDay();
categoryContainerEl.addEventListener("click", goToIdeasPage);




