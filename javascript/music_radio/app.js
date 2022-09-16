const fileInput = document.getElementById("fileUpload");
const audio = document.getElementById("myAudio");

const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();

  fileReader.readAsDataURL(selectedFile[0]);

  fileReader.onload = function () {
    audio.src = fileReader.result;
  };
};

fileInput.addEventListener("change", handleFiles);