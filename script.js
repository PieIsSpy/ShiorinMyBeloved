const sounds = ["audio/rare.mp3", "audio/giggle01.mp3", "audio/giggle02.mp3", "audio/giggle03.mp3", "audio/giggle04.mp3", "audio/giggle05.mp3", "audio/giggle06.mp3", "audio/giggle07.mp3", "audio/giggle08.mp3", "audio/giggle09.mp3", "audio/giggle10.mp3", "audio/giggle11.mp3", "audio/giggle12.mp3", "audio/giggle13.mp3", "audio/giggle14.mp3", "audio/giggle17.mp3", "audio/giggle18.mp3", "audio/giggle19.mp3", "audio/giggle20.mp3", "audio/giggle21.mp3", "audio/giggle22.mp3", "audio/giggle23.mp3", "audio/giggle24.mp3", "audio/giggle25.mp3", "audio/giggle26.mp3", "audio/giggle27.mp3", "audio/giggle28.mp3", "audio/giggle29.mp3", "audio/giggle30.mp3", "audio/giggle33.mp3", "audio/giggle34.mp3", "audio/giggle35.mp3", "audio/giggle36.mp3", "audio/giggle37.mp3", "audio/giggle38.mp3", "audio/giggle39.mp3", "audio/giggle40.mp3", "audio/giggle41.mp3", "audio/giggle42.mp3", "audio/giggle43.mp3", "audio/giggle45.mp3", "audio/giggle46.mp3", "audio/giggle47.mp3", "audio/giggle48.mp3", "audio/giggle49.mp3", "audio/giggle50.mp3", "audio/giggle51.mp3", "audio/giggle54.mp3", "audio/giggle56.mp3", "audio/giggle57.mp3", "audio/giggle58.mp3", "audio/giggle59.mp3", "audio/giggle60.mp3", "audio/giggle61.mp3", "audio/giggle62.mp3"];

var nowCounter = 0; 
var allRecord = parseInt(localStorage.nowCounter || JSON.stringify(0))
var highShiorium = parseInt(localStorage.highShiorium || JSON.stringify(0))

document.getElementById("currentCounter").innerText = nowCounter;
document.getElementById("totalRecord").innerText = allRecord;
document.getElementById("highRecord").innerText = highShiorium;

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[audioContent]);
  audio.play();
  
  nowCounter++;
  currentCounter.innerHTML = nowCounter;

  allRecord++;
  localStorage.nowCounter = allRecord;
  totalRecord.innerHTML = allRecord;

  if (nowCounter > highShiorium)
  {
    highShiorium = nowCounter;
    localStorage.highShiorium = nowCounter;
    highRecord.innerHTML = highShiorium;
  }
}

/*Cucumbers have a slightly lower calorific value as compared to zucchini. Zucchini is richer in vitamin B and vitamin C as compared to cucumbers. Both vegetables have relatively equal amounts of calcium but zucchini is richer than cucumbers in potassium and iron.*/


