const fileInput = document.getElementById("fileUpload");
// const audio = document.getElementById("myAudio");
const pause_btn = document.getElementById("Audio_pause");
const time_text = document.getElementById("Audio_time");

let pause = false;

let MyAudio = new Audio();
const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(selectedFile[0]);

  fileReader.onload = function () {
    // audio.src = fileReader.result;
    MyAudio.src = fileReader.result;
    if(!pause) {
      MyAudio.play();
      MyAudio.currentTime = "0";
      MyAudio.textTracks.onaddtrack = (event) => {
        console.log(`Text track: ${event.track.label} added`);
      };
    }
  };
};

const pause_click = () => {
  if(pause) {
    MyAudio.play();
    pause_btn.innerText = "▶︎";
    pause = false;
  } else {    
    MyAudio.pause();
    pause_btn.innerText = "❚❚";
    pause = true;
  }
}

pause_btn.innerText = "▶︎";
pause_btn.addEventListener("click", () => pause_click());


fileInput.addEventListener("change", handleFiles);