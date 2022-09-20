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
    MyAudio.addEventListener('loadedmetadata', () => Audio_start());
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

const Audio_start = () => {
  if(!pause) {
    MyAudio.play();
    MyAudio.currentTime = 0;
  }

  let b_minute = Math.floor(MyAudio.duration/60);
  let b_second = Math.floor(MyAudio.duration%60);
  if(b_second < 10) {
    b_second = `0${b_second}`;
  }

  setInterval(() => {
    let f_minute = Math.floor(MyAudio.currentTime/60);
  let f_second = Math.floor(MyAudio.currentTime%60);
  if(f_second < 10) {
    f_second = `0${f_second}`;
  }

  time_text.innerText = `${f_minute} : ${f_second} / ${b_minute} : ${b_second}`;
  },1000)
}

pause_btn.innerText = "▶︎";
pause_btn.addEventListener("click", () => pause_click());

time_text.innerText = '0 : 00 / 0 : 00';

fileInput.addEventListener("change", handleFiles);