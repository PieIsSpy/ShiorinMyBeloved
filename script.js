var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');

var button = document.getElementById("button"), nowCounter = 0, currentCounter = document.getElementById("currentCounter");

function clickCounter()
{
  nowCounter++;
  currentCounter.innerHTML = nowCounter;
}

const sounds = ["audio/rare.mp3", "audio/giggle01.mp3", "audio/giggle02.mp3", "audio/giggle03.mp3", "audio/giggle04.mp3", "audio/giggle05.mp3", "audio/giggle06.mp3", "audio/giggle07.mp3", "audio/giggle08.mp3", "audio/giggle09.mp3", "audio/giggle10.mp3", "audio/giggle11.mp3", "audio/giggle12.mp3", "audio/giggle13.mp3", "audio/giggle14.mp3", "audio/giggle15.mp3", "audio/giggle16.mp3", "audio/giggle17.mp3", "audio/giggle18.mp3", "audio/giggle19.mp3", "audio/giggle20.mp3", "audio/giggle21.mp3", "audio/giggle22.mp3", "audio/giggle23.mp3", "audio/giggle24.mp3", "audio/giggle25.mp3", "audio/giggle26.mp3", "audio/giggle27.mp3", "audio/giggle28.mp3", "audio/giggle29.mp3", "audio/giggle30.mp3", "audio/giggle31.mp3", "audio/giggle32.mp3", "audio/giggle33.mp3", "audio/giggle34.mp3", "audio/giggle35.mp3", "audio/giggle36.mp3", "audio/giggle37.mp3", "audio/giggle38.mp3", "audio/giggle39.mp3", "audio/giggle40.mp3", "audio/giggle41.mp3", "audio/giggle42.mp3", "audio/giggle43.mp3", "audio/giggle44.mp3", "audio/giggle45.mp3", "audio/giggle46.mp3", "audio/giggle47.mp3", "audio/giggle48.mp3", "audio/giggle49.mp3", "audio/giggle50.mp3", "audio/giggle51.mp3", "audio/giggle52.mp3", "audio/giggle53.mp3", "audio/giggle54.mp3", "audio/giggle55.mp3", "audio/giggle56.mp3", "audio/giggle57.mp3", "audio/giggle58.mp3", "audio/giggle59.mp3", "audio/giggle60.mp3", "audio/giggle61.mp3", "audio/giggle62.mp3"];

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[audioContent]);
  audio.play();
}
