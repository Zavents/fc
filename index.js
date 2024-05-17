const desc = document.getElementById("desc-title");
const wrapper = document.getElementsByClassName("description");
const video1 = document.getElementById("fifa-1");
// const video_2 = document.getElementsById("video-2");
// const video_3 = document.getElementsById("video-3");

video1.addEventListener("mouseenter", function(){
desc.innerHTML = "<p> Saya Fajriandi </p>"
});
video1.addEventListener("mouseleave", function(){
desc.innerHTML = "<p> The new EA SPORTS FC 24 Ratings have arrived along with the new PlayStyles for players across The World's Game. Check out the Ratings Database to see how your favourites rank </p>"
});


