export class Display {
  constructor(tv) {
    this.tv = tv;
    this.gifVideo = document.getElementById('gif_tv_video');
    this.pixels = document.getElementById('gif_tv_pixels');
    this.viewport = document.getElementById('gif_tv_viewport');
  }

  showStatic() {
    this.gifVideo.setAttribute("src", this.tv.staticGIF);
  }

  showChannel() {
    this.gifVideo.setAttribute("src", this.tv.currentChannelURL);
  }

  setHueShift(enabled) {
    this.gifVideo.setAttribute("style", enabled ? 
      'animation: rainbow_barf infinite 2000ms;' : 'filter: none');
  }

  setBrightness(enabled) {
    this.viewport.setAttribute("style", `opacity: ${enabled ? '1' : '0.5'};`);
  }

  setColor(enabled) {
    this.gifVideo.setAttribute("style", enabled ? 
      'filter: none' : 'filter: grayscale(100%);');
  }

  setHighDef(enabled) {
    this.pixels.style.setProperty('visibility', enabled ? 'visible' : 'hidden');
  }
}