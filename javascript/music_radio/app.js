const fileInput = document.getElementById("fileUpload");
// const audio = document.getElementById("myAudio");
const pause_btn = document.getElementById("Audio_pause");
const time_text = document.getElementById("Audio_time");
const audio_bar = document.getElementById("Audio_bar");
const bar_btn = document.getElementById("Audio_bar_button");

// 음악을 멈추지 않았다 == false │ 음악이 멈췄다 == true
let pause = false;

//오디오 객체 불러오기
let MyAudio = new Audio();

// 음악 파일 불러오기
const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(selectedFile[0]);

  fileReader.onload = function () {
    // audio.src = fileReader.result;
    MyAudio.src = fileReader.result;
    MyAudio.addEventListener('loadedmetadata', () => Audio_start());
    bar_btn.style.backgroundColor = '#222';
  };
};

// 음악 시작(정지) 버튼 눌렀을 때
const pause_click = () => {
  if(pause) {
    if(MyAudio.src == undefined) {
      Audio_start();
    }
    pause_btn.innerText = "▶︎";
    pause = false;
  } else {
    if(MyAudio.src == undefined) {
      MyAudio.pause();
    }
    pause_btn.innerText = "❚❚";
    pause = true;
  }
}

// 음악 시작
const Audio_start = () => {
  MyAudio.play();

  let b_minute = Math.floor(MyAudio.duration/60);
  let b_second = Math.floor(MyAudio.duration%60);
  if(b_second < 10) {
    b_second = `0${b_second}`;
  }

  const Time_view = setInterval(() => {
    let f_minute = Math.floor(MyAudio.currentTime/60);
    let f_second = Math.floor(MyAudio.currentTime%60);
    if(f_second < 10) {
      f_second = `0${f_second}`;
    }
    // 오류!
    bar_set();

    time_text.innerText = `${f_minute} : ${f_second} / ${b_minute} : ${b_second}`;
    if(pause) {
      clearInterval(Time_view);
    }
  },1000)
}

// 절대 좌표 구하는 함수(왼쪽)
const getAbsoluteLeft = (element) => {
  return window.pageXOffset + element.getBoundingClientRect().left;
}

// 음악 재생 위치 결정하기(미완성)
const bar_set = () => {
  const parentAbsoluteLeft = getAbsoluteLeft(audio_bar); 
  const AbsoluteLeft = getAbsoluteLeft(bar_btn);
  // bar_btn의 현재 상대 좌표
  const relativeLeft =  AbsoluteLeft - parentAbsoluteLeft;
  const percentTime =  MyAudio.currentTime / MyAudio.duration * 100;
  const elementPercent = relativeLeft / 175 * 100;
  bar_btn.style.marginLeft = Math.floor(percentTime / 100 * 175);
}

// 초기 기본 시작(정지) 버튼 설정
pause_btn.innerText = "▶︎";
pause_btn.addEventListener("click", () => pause_click());

// 초기 기본 초 설정
time_text.innerText = '0 : 00 / 0 : 00';

// 음악 파일 불러오기
fileInput.addEventListener("change", handleFiles);