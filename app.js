var toll = document.querySelector(".img1");
var mell = document.querySelector(".img2");
var tell = document.querySelector(".menuna");
var close = document.querySelector(".close");

toll.onclick = function () {
  tell.style.display = "block";
};

close.onclick = function () {
  tell.style.display = "none";
};
