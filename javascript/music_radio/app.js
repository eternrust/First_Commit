const fileInput = document.getElementById("fileUpload");
// const audio = document.getElementById("myAudio");
const Pause_btn = document.getElementById("Audio_pause");
const Time_text = document.getElementById("Audio_time");
const Audio_bar = document.getElementById("Audio_bar");
const Audio_bar_btn = document.getElementById("Audio_bar_button");
const Audio_sound = document.getElementById("Audio_sound");
const Sound_box = document.getElementById("Sound_box");
const Sound_volume = document.getElementById("Sound_volume");
const Sound_bar = document.getElementById("Sound_bar");
const Sound_bar_btn = document.getElementById("Sound_bar_button");

//오디오 객체 불러오기
let MyAudio = new Audio();

// 음악을 멈추지 않았다 == false │ 음악이 멈췄다 == true
let pause = false;

// 마우스 이동을 시작했는가? (Drog&Drop)
let isDragging = false;

// 볼륨은 몇인가?
let volume = 50;

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
    Audio_bar_btn.style.backgroundColor = '#222';
    Pause_btn.style.filter= 'opacity(1) drop-shadow(0 0 0 #000)';
    Audio_sound.style.filter= 'opacity(1) drop-shadow(0 0 0 #000)';
    Audio_bar_btn.style.display = 'block';
  };
};

// 음악 시작(정지) 버튼 눌렀을 때
const pause_click = () => {
  if (pause) {
    if (MyAudio.src !== undefined) {
      Audio_start();
    }
    Pause_btn.innerText = "❚❚";
    pause = false;
  } else {
    if (MyAudio.src !== undefined) {
      MyAudio.pause();
    }
    Pause_btn.innerText = "▶︎";
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

  Time_text.innerText = `${f_minute} : ${f_second} / ${b_minute} : ${b_second}`;
}

// 음악 시작
const Audio_start = () => {
  Pause_btn.innerText = "❚❚";
  MyAudio.play();
  pause = false;

  const Time_view = setInterval(() => {
    set_time();
    bar_set_time();

    if (pause || MyAudio.currentTime == MyAudio.duration) {
      clearInterval(Time_view);
      Pause_btn.innerText = "▶︎";
      pause = true;
    }
  }, 1000)
}

// 절대 좌표 구하는 함수(위쪽)
const getAbsoluteTop = (element) => {
  return window.pageYOffset + element.getBoundingClientRect().top;
}

// 절대 좌표 구하는 함수(왼쪽)
const getAbsoluteLeft = (element) => {
  return window.pageXOffset + element.getBoundingClientRect().left;
}

// 음악 재생 위치 결정하기(미완성)
const bar_set_time = () => {
  // const parentAbsoluteLeft = getAbsoluteLeft(Audio_bar); 
  // const AbsoluteLeft = getAbsoluteLeft(Audio_bar_btn);
  // // bar_btn의 현재 상대 좌표
  // const relativeLeft =  AbsoluteLeft - parentAbsoluteLeft;
  // const elementPercent = relativeLeft / 175 * 100;
  const percentTime = MyAudio.currentTime / MyAudio.duration * 100;
  Audio_bar_btn.style.marginLeft = `${percentTime / 100 * 130}px`;
}

// Audio_bar 클릭 위치를 재생 위치로 변환
const bar_click = (e) => {
  if(isDragging && !pause) {
    if (MyAudio.src !== undefined) {
      MyAudio.pause();
    }
    Pause_btn.innerText = "▶︎";
    pause = true;
  }
  let x = e.clientX;
  // bar_btn의 현재 상대 좌표
  const relativeLeft = x - parentAbsoluteLeft;
  MyAudio.currentTime = (relativeLeft - 10) / 130 * MyAudio.duration

  set_time();
  bar_set_time();
}

// 볼륨 이미지 변경
const set_volume = () => {
  if(volume == 0) {
    Audio_sound.src = './sound_off.png';
  } else {
    Audio_sound.src = './sound_on.png';
  }
}

const bar_set_sound = () => {
  MyAudio.volume = volume / 100;

}

bar_set_sound();

// 초기 기본 시작(정지) 버튼 설정
Pause_btn.innerText = "▶︎";
Pause_btn.addEventListener("click", () => pause_click());

// 초기 기본 초 설정
Time_text.innerText = '0 : 00 / 0 : 00';

// audio_bar의 절대위치
const parentAbsoluteLeft = getAbsoluteLeft(Audio_bar);
const parentAbsoluteTop = getAbsoluteTop(Audio_sound);

// audio_bar를 클릭했을 때
Audio_bar.addEventListener("click", (event) => { clicked = true; moving = false; bar_click(event); });
// Audio_bar_btn 드래그 앤 드롭
Audio_bar_btn.addEventListener('mousedown', () =>   {isDragging = true;});
document.addEventListener('mousemove', (event) => { if(isDragging) {bar_click(event);} });
document.addEventListener('mouseup', () => { if(isDragging) { Audio_start(); } isDragging = false; });

  // 음악 파일 불러오기
fileInput.addEventListener("change", handleFiles);