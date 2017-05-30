function play(){
  let arr_bgms = ["daojianrumeng.mp3","jianghuxiao.mp3","nanniandejing.mp3"];let audio = document.querySelector("audio");
  // console.dir(audio);
  audio.src=`mp3\\${arr_bgms[Math.floor(Math.random()*arr_bgms.length)]}`;
  audio.play();
  audio.volume=0.1;

};
play();
document.querySelector("audio").onended = play;
