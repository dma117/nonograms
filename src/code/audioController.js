class AudioController {
  constructor(soundsAvailable) {
    this.soundsOn = soundsAvailable;
    this.soundsData = {
      'fill': () => new Audio("././assets/sound-effects/fill.wav"),
      'unfill': () => new Audio("././assets/sound-effects/unfill2.wav"),
      'cross': () => new Audio("././assets/sound-effects/cross.wav"),
      'uncross': () => new Audio("././assets/sound-effects/uncross.wav"),
      'win': () => new Audio("././assets/sound-effects/win.wav"),
      'score': () => new Audio("././assets/sound-effects/score.wav"),
      'close': () => new Audio("././assets/sound-effects/close.wav"),
      'solution': () => new Audio("././assets/sound-effects/solution.wav"),
      'randomize': () => new Audio("././assets/sound-effects/randomize.wav"),
      'other': () => new Audio("././assets/sound-effects/other.wav"),
    };
  }

  playAudio(effect) {
    if (this.soundsOn) {
      this.soundsData[effect]().play();
    }
  }

  toggleSoundOn() {
    if (this.soundsOn) {
      this.soundsOn = 0;
    } else {
      this.soundsOn = 1;
    }
  }
}

export default AudioController;