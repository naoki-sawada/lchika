// import { settings } from '../conf/settings';

export class Music {
  constructor(defaultSrc) {
    this.audio = new Audio();
    this.reload(defaultSrc);
  }

  reload(musicSrc) {
    console.log(`${musicSrc}`);
    this.audio.src = `${musicSrc}`;
    this.audio.loop = true;
    this.audio.play();
  }
}
