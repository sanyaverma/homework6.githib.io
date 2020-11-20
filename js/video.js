var video;
var volume;

window.addEventListener("load", function () {
  video = document.querySelector("#myVideo");
  console.log("Starting");
  console.log(video.volume);
});

//play
document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  let vol = (doccument.querySelector("#volume").innerHTML = "100%");
});

//pause
document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

// Volume Slider
document.querySelector("#volumeSlider").addEventListener("change", function () {
  console.log(this);
  video.volume = this.value / 100;
  volume.innerHTML = this.value + "%";
  console.log(this.value);
});

//Slow down
doccument.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down");
  video.playbackRate *= 0.9;
  console.log(video.playbackRate);
});

//Speed up
doccument.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up");
  video.playbackRate /= 0.9;
  console.log(video.playbackRate);
});

//Skip ahead
//doccument.querySelector("#skip").addEventListener("click", function () {});
