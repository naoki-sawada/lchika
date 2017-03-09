import { settingsTC } from '../conf/tagCloud';
import { settings } from '../conf/settings';

export class TagCloud {
  constructor(firstEntries) {
    this.entries = this._makeEntries(firstEntries);
    this.loadOnce = false;
  }

  _makeEntries(texts) {
    let entries = [];
    for (let i = 0; i < texts.length; i++) {
      let obj = { label: texts[i], url: '', target: '_top' };
      entries.push(obj);
    }
    return entries;
  }

  pushEntries(text) {
    if (this.entries.length >= settings.maxTextNum) {
      this.entries.shift();
    }
    this.entries.push(this._makeEntries([text])[0]);
  }

  remove() {
    let holderObj = document.getElementById('holder');
    holderObj.removeChild(holderObj.firstChild);
  }

  firstLoad() {
    settingsTC.entries = this.entries;
    let holderObj = document.getElementById('holder');
    let svg3DTagCloud = new SVG3DTagCloud(holderObj, settingsTC);
  }

  load() {
    this.remove();
    settingsTC.entries = this.entries;
    let holderObj = document.getElementById('holder');
    let svg3DTagCloud = new SVG3DTagCloud(holderObj, settingsTC);
  }
}
