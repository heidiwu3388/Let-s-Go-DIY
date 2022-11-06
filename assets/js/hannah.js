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

// var post= document.getElementById("post");
// post.addEventListener("click", function(){
//     var commentBoxValue= document.getElementById("comment-box").value;
 
//     var li = document.createElement("li");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(li);
 
// });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}
