//get elements from document(HTML) and store them in variables

var cityEL = document.querySelector("#cityname")
var searchEl = document.querySelector("#btn-search")


searchEl.addEventListener("click", function(event) {
    event.preventDefault();
    var cityName = cityEl.value;
    // console.log(cityEl.value);

    // var apiUrl1 = 'hello $(cityName)';
    // var apiUrl2 = "hello " + cityName;

        // console.log("apiUrl1")

    var apiUrl = ``
    fetch(apiUrl)
    .then(function(response) {
        console.log(response);
        response.json();

    })

  
});