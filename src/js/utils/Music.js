import { settings } from '../conf/settings';

export class Music {
  constructor() {
    this.audio = new Audio();
    this.reload(settings.defaltMusic);
  }

  reload(musicSrc) {
    console.log(`img/${musicSrc}`);
    this.audio.src = `img/${musicSrc}`;
    this.audio.loop = true;
    this.audio.play();
  }
}
