var img = document.createElement('button');
img.setAttribute('src','cute shiorin.jpg');

const sounds = ['giggle01', 'giggle02', 'giggle03', 'giggle04', 'giggle05', 'giggle06', 'giggle07', 'giggle08', 'giggle09', 'giggle10', 'giggle11', 'giggle12', 'giggle13'];

function randomGiggles() {
  const audioContent = Math.floor(Math.random() * sounds.length);
  var audio = new Audio('audio/' + audioContent);
  audio.play();
}
