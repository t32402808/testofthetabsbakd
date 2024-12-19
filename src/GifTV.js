import { gifTVURLs } from './constants/channels.js';
import { SOUNDS } from './constants/sounds.js';
import { Controls } from './components/Controls.js';
import { Display } from './components/Display.js';
import { MessageSystem } from './components/MessageSystem.js';
import { AudioSystem } from './components/AudioSystem.js';
import { TVControls } from './components/TVControls.js';

export class GifTV {
  constructor(channels = ['https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571155222/giphy_n0r827.gif']) {
    this.channels = channels;
    this.staticGIF = 'https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571155222/giphy_n0r827.gif';
    this.currentChannelURL = this.channels[0];
    this.sound = SOUNDS;

    // Initialize state first
    this.initializeState();
    
    // Then initialize components that depend on the state
    this.initializeComponents();
  }

  initializeComponents() {
    this.display = new Display(this);
    this.messageSystem = new MessageSystem();
    this.audioSystem = new AudioSystem();
    this.tvControls = new TVControls(this);
    this.controls = new Controls(this);
  }

  initializeState() {
    // Initialize dials and switches state
    this.dial = {
      channel: {
        button: document.getElementById('gif_tv_button_channel'),
        currentIndex: 0,
        message: document.getElementById('gif_tv_message_channel'),
        messageTimer: null,
      },
      volume: {
        button: document.getElementById('gif_tv_button_volume'),
        currentIndex: 8,
        message: document.getElementById('gif_tv_message_volume'),
        messageTimer: null,
      },
    };

    this.switch = {
      mute: {
        button: document.getElementById('gif_tv_button_mute'),
        isActive: false,
        message: document.getElementById('gif_tv_message_mute'),
        messageTimer: null,
      },
      hd: {
        button: document.getElementById('gif_tv_button_hd'),
        isActive: true,
        message: document.getElementById('gif_tv_message_hd'),
        messageTimer: null,
      },
      hue: {
        button: document.getElementById('gif_tv_button_hue_shift'),
        isActive: false,
        message: document.getElementById('gif_tv_message_hue_shift'),
        messageTimer: null,
      },
      bright: {
        button: document.getElementById('gif_tv_button_bright'),
        isActive: true,
        message: document.getElementById('gif_tv_message_bright'),
        messageTimer: null,
      },
      color: {
        button: document.getElementById('gif_tv_button_color'),
        isActive: true,
        message: document.getElementById('gif_tv_message_color'),
        messageTimer: null,
      },
    };
  }

  // Delegate all control methods to TVControls
  changeChannel(direction) {
    this.tvControls.changeChannel(direction);
  }

  changeVolume(direction) {
    this.tvControls.changeVolume(direction);
  }

  toggleMute() {
    this.tvControls.toggleMute();
  }

  toggleHighDef() {
    this.tvControls.toggleHighDef();
  }

  toggleHueShift() {
    this.tvControls.toggleHueShift();
  }

  toggleBright() {
    this.tvControls.toggleBright();
  }

  toggleColor() {
    this.tvControls.toggleColor();
  }

  init() {
    this.display.showChannel();
  }
}