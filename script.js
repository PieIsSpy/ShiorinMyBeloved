var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');

const sounds = ['giggle01.mp3', 'giggle02.mp3', 'giggle03.mp3', 'giggle04.mp3', 'giggle05.mp3', 'giggle06.mp3', 'giggle07.mp3', 'giggle08.mp3', 'giggle09.mp3', 'giggle10.mp3', 'giggle11.mp3', 'giggle12.mp3', 'giggle13.mp3'];

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[audioContent]);
  audio.play();
}
