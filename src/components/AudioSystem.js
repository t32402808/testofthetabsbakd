export class AudioSystem {
  playSound(url, volume, isMuted) {
    if (isMuted) return;
    
    const sound = new Audio();
    sound.src = url;
    sound.volume = volume / 10;
    sound.play();
  }
}