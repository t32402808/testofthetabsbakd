export class Controls {
  constructor(tv) {
    this.tv = tv;
    this.initializeControls();
  }

  initializeControls() {
    // Channel Dial
    this.tv.dial.channel.button.addEventListener('click', () => this.tv.changeChannel('up'));
    this.tv.dial.channel.button.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.tv.changeChannel('down');
    });

    // Volume Dial
    this.tv.dial.volume.button.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.tv.changeVolume('up');
    });
    this.tv.dial.volume.button.addEventListener('click', () => this.tv.changeVolume('down'));

    // Switches
    this.tv.switch.mute.button.addEventListener('click', () => this.tv.toggleMute());
    this.tv.switch.hd.button.addEventListener('click', () => this.tv.toggleHighDef());
    this.tv.switch.hue.button.addEventListener('click', () => this.tv.toggleHueShift());
    this.tv.switch.bright.button.addEventListener('click', () => this.tv.toggleBright());
    this.tv.switch.color.button.addEventListener('click', () => this.tv.toggleColor());

    this.initializeKeyboardControls();
  }

  initializeKeyboardControls() {
    document.onkeydown = (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case 39: // right
          this.tv.changeChannel('up');
          break;
        case 37: // left
          this.tv.changeChannel('down');
          break;
        case 38: // up
          this.tv.changeVolume('up');
          break;
        case 40: // down
          this.tv.changeVolume('down');
          break;
      }
    };
  }
}