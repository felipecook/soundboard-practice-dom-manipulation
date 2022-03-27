window.addEventListener('keydown', playSound(e));


function playSound(sound){
  console.log(sound);
  const audio = document.querySelector(`audio[data-key=${sound.code}]`)
  console.log(audio);
  if(!audio) return;


  audio.currentTime = 0;
  audio.play();

  
}