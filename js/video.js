var video;
var previousVolume = 0;
var muted = false;

window.addEventListener("load", function () {
  video = document.querySelector("#myVideo");
  console.log("Starting");
  console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  let vol = (document.querySelector("#volume").innerHTML =
    video.volume * 100 + "%");
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function () {
  console.log(this);
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
  console.log(this.value);
});

document.querySelector("#mute").addEventListener("click", function () {
  console.log(this);
  if (muted === false) {
    previousVolume = video.volume;
    video.volume = 0;
    muted = true;
    this.innerHTML = "Unmute";
  } else {
    video.volume = previousVolume;
    muted = false;
    this.innerHTML = "Mute";
  }
  console.log(this.value);
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down");
  if (video.playbackRate >= 0.15) {
    video.playbackRate -= 0.1;
  }
  console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up");
  video.playbackRate += 0.1;
  console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime > video.duration) {
    video.currentTime = 0;
    video.play();
  } else {
    video.currentTime += 5;
  }
  console.log("Current Location" + video.currentTime);
  video.play();
});

document.querySelector("#original").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldTime");
});

document.querySelector("#old").addEventListener("click", function () {
  console.log("Old");
  video.classList.add("oldTime");
});
