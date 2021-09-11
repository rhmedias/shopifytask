const image = document.querySelector(".image");
const title = document.querySelector(".title");
const date = document.querySelector(".date");
const desc = document.querySelector(".description");
const thumbs = document.querySelector(".fa-thumbs-up");

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "cyaVQhIlSZdwSWpPUOpn6a0eZSgUyICs2UT3S7RU";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function () {
    if (req.status == 200 && req.readyState == 4) {
        var response = JSON.parse(req.responseText);
        title.textContent = response.title;
        date.textContent = response.date;
        image.src = response.hdurl;
        desc.textContent = response.explanation;
    }
});

function myFunction() {
    thumbs.classList.toggle("fa-thumbs-down");

    console.log("click");
}
