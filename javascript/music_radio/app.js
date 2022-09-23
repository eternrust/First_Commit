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

// 클릭 중인가?
let clicked = false;

// 마우스를 움직이는 중인가?
let moving = false;

// bar_btn를 클릭했을 때 X좌표
let bar_btn_x = null;


// 음악 파일 불러오기
const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(selectedFile[0]);

  fileReader.onload = function () {
    // audio.src = fileReader.result;
    pause = true;
    MyAudio.src = fileReader.result;
    MyAudio.addEventListener('loadedmetadata', () => Audio_start());
    bar_btn.style.backgroundColor = '#222';
  };
};

// 음악 시작(정지) 버튼 눌렀을 때
const pause_click = () => {
  if (pause) {
    if (MyAudio.src !== undefined) {
      Audio_start();
    }
    pause_btn.innerText = "❚❚";
    pause = false;
  } else {
    if (MyAudio.src !== undefined) {
      MyAudio.pause();
    }
    pause_btn.innerText = "▶︎";
    pause = true;
  }
}

const set_time = () => {
  let f_minute = Math.floor(MyAudio.currentTime / 60);
  let f_second = Math.floor(MyAudio.currentTime % 60);
  if (f_second < 10) {
    f_second = `0${f_second}`;
  }

  let b_minute = Math.floor(MyAudio.duration / 60);
  let b_second = Math.floor(MyAudio.duration % 60);
  if (b_second < 10) {
    b_second = `0${b_second}`;
  }

  time_text.innerText = `${f_minute} : ${f_second} / ${b_minute} : ${b_second}`;
}

// 음악 시작
const Audio_start = () => {
  pause_btn.innerText = "❚❚";
  MyAudio.play();
  pause = false;

  const Time_view = setInterval(() => {
    set_time();
    bar_set();

    if (pause || MyAudio.currentTime == MyAudio.duration) {
      clearInterval(Time_view);
      pause_btn.innerText = "▶︎";
      pause = true;
    }
  }, 1000)
}

// 절대 좌표 구하는 함수(왼쪽)
const getAbsoluteLeft = (element) => {
  return window.pageXOffset + element.getBoundingClientRect().left;
}

// 음악 재생 위치 결정하기(미완성)
const bar_set = () => {
  // const parentAbsoluteLeft = getAbsoluteLeft(audio_bar); 
  // const AbsoluteLeft = getAbsoluteLeft(bar_btn);
  // // bar_btn의 현재 상대 좌표
  // const relativeLeft =  AbsoluteLeft - parentAbsoluteLeft;
  // const elementPercent = relativeLeft / 175 * 100;
  const percentTime = MyAudio.currentTime / MyAudio.duration * 100;
  bar_btn.style.marginLeft = `${percentTime / 100 * 175}px`;
}

// audio_bar 클릭 위치를 재생 위치로 변환
const bar_click = (e) => {
  const parentAbsoluteLeft = getAbsoluteLeft(audio_bar);
  let x = e.clientX;
  // bar_btn의 현재 상대 좌표
  const relativeLeft = x - parentAbsoluteLeft;
  MyAudio.currentTime = (relativeLeft - 12.5) / 175 * MyAudio.duration

  set_time();
  bar_set();
}

// bar_btn의 Drog&Drop(미완)
const drog_drop = (e) => {
  let x = e.clientX;
  let relativeLeft;

  MyAudio.currentTime = (relativeLeft - 12.5) / 175 * MyAudio.duration
}

// 초기 기본 시작(정지) 버튼 설정
pause_btn.innerText = "▶︎";
pause_btn.addEventListener("click", () => pause_click());

// 초기 기본 초 설정
time_text.innerText = '0 : 00 / 0 : 00';

// audio_bar를 클릭했을 때
audio_bar.addEventListener("click", (event) => { clicked = true; moving = false; bar_click(event); });
// bar_btn 드래그 앤 드롭
bar_btn.addEventListener('mousedown', () =>   bar_btn_x = e.clientX);
// audio_bar.addEventListener('mousemove', (event) => { moving = true; bar_click(event); });
// audio_bar.addEventListener('mouseup', () => { clicked = false; moving = false;);

  // 음악 파일 불러오기
fileInput.addEventListener("change", handleFiles);