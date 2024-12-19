import { leadingZero } from '../utils/formatters.js';

export class TVControls {
  constructor(tv) {
    this.tv = tv;
  }

  changeChannel(direction) {
    const updateMessage = () => {
      const channelsDecimal = (this.tv.channels.length + 1) / 10;
      const channelIndex = leadingZero(
        this.tv.dial.channel.currentIndex + 1,
        channelsDecimal < 2 ? 2 : channelsDecimal
      );
      this.tv.messageSystem.updateMessage(this.tv.dial.channel, `CH ${channelIndex}`);
    };

    this.tv.audioSystem.playSound(this.tv.sound.dial, this.tv.dial.volume.currentIndex, this.tv.switch.mute.isActive);
    this.tv.audioSystem.playSound(this.tv.sound.static, this.tv.dial.volume.currentIndex / 50, this.tv.switch.mute.isActive);
    this.tv.display.showStatic();

    if (direction === 'up') {
      this.tv.dial.channel.currentIndex = this.tv.dial.channel.currentIndex === this.tv.channels.length - 1 
        ? 0 
        : this.tv.dial.channel.currentIndex + 1;
    } else if (direction === 'down') {
      this.tv.dial.channel.currentIndex = this.tv.dial.channel.currentIndex === 0 
        ? this.tv.channels.length - 1 
        : this.tv.dial.channel.currentIndex - 1;
    }

    updateMessage();

    setTimeout(() => {
      this.tv.currentChannelURL = this.tv.channels[this.tv.dial.channel.currentIndex];
      this.tv.display.showChannel();
    }, 333);
  }

  changeVolume(direction) {
    const updateMessage = () => {
      const volumeIndex = leadingZero(this.tv.dial.volume.currentIndex, 2);
      this.tv.messageSystem.updateMessage(this.tv.dial.volume, `VOL ${volumeIndex}`);
    };

    this.tv.audioSystem.playSound(this.tv.sound.dial, this.tv.dial.volume.currentIndex, this.tv.switch.mute.isActive);

    if (direction === 'up' && this.tv.dial.volume.currentIndex < 10) {
      this.tv.dial.volume.currentIndex++;
    } else if (direction === 'down' && this.tv.dial.volume.currentIndex > 1) {
      this.tv.dial.volume.currentIndex--;
    }

    updateMessage();
  }

  toggleMute() {
    this.tv.switch.mute.isActive = !this.tv.switch.mute.isActive;
    this.tv.audioSystem.playSound(
      this.tv.sound.switch, 
      this.tv.dial.volume.currentIndex, 
      this.tv.switch.mute.isActive
    );
    this.tv.messageSystem.updateMessage(
      this.tv.switch.mute, 
      this.tv.switch.mute.isActive ? 'MUTE' : 'SOUND'
    );
  }

  toggleHighDef() {
    this.tv.audioSystem.playSound(
      this.tv.sound.switch, 
      this.tv.dial.volume.currentIndex, 
      this.tv.switch.mute.isActive
    );
    this.tv.switch.hd.isActive = !this.tv.switch.hd.isActive;
    this.tv.display.setHighDef(this.tv.switch.hd.isActive);
    this.tv.messageSystem.updateMessage(
      this.tv.switch.hd, 
      this.tv.switch.hd.isActive ? 'STND DEF' : 'HIGH DEF'
    );
  }

  toggleHueShift() {
    this.tv.audioSystem.playSound(
      this.tv.sound.switch, 
      this.tv.dial.volume.currentIndex, 
      this.tv.switch.mute.isActive
    );
    this.tv.switch.hue.isActive = !this.tv.switch.hue.isActive;
    this.tv.display.setHueShift(this.tv.switch.hue.isActive);
    this.tv.switch.color.isActive = true;
    this.tv.messageSystem.updateMessage(
      this.tv.switch.hue, 
      this.tv.switch.hue.isActive ? 'HUE SHIFT' : 'NO SHIFT'
    );
  }

  toggleBright() {
    this.tv.audioSystem.playSound(
      this.tv.sound.switch, 
      this.tv.dial.volume.currentIndex, 
      this.tv.switch.mute.isActive
    );
    this.tv.switch.bright.isActive = !this.tv.switch.bright.isActive;
    this.tv.display.setBrightness(this.tv.switch.bright.isActive);
    this.tv.messageSystem.updateMessage(
      this.tv.switch.bright, 
      this.tv.switch.bright.isActive ? 'BRIGHT' : 'DARK'
    );
  }

  toggleColor() {
    this.tv.audioSystem.playSound(
      this.tv.sound.switch, 
      this.tv.dial.volume.currentIndex, 
      this.tv.switch.mute.isActive
    );
    this.tv.switch.color.isActive = !this.tv.switch.color.isActive;
    this.tv.display.setColor(this.tv.switch.color.isActive);
    this.tv.switch.hue.isActive = false;
    this.tv.messageSystem.updateMessage(
      this.tv.switch.color, 
      this.tv.switch.color.isActive ? 'COLOR' : 'B&W'
    );
  }
}