var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');



const sounds = ['audio/giggle01.mp3', 'audio/giggle02.mp3', 'audio/giggle03.mp3', 'audio/giggle04.mp3', 'audio/giggle05.mp3', 'audio/giggle06.mp3', 'audio/giggle07.mp3', 'audio/giggle08.mp3', 'audio/giggle09.mp3', 'audio/giggle10.mp3', 'audio/giggle11.mp3', 'audio/giggle12.mp3', 'audio/giggle13.mp3'];

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[audioContent]);
  audio.play();
}
