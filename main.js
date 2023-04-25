const downloadBtn = document.getElementById('download1');
const audio = document.getElementById('audio');

downloadBtn.addEventListener('click', () => {
  const audioSrc = audio.src;
  const a = document.createElement('a');
  a.href = audioSrc;
  a.download = 'hay Tamanna hame.mp3';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
