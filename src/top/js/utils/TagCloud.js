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
      let obj = { label: texts[i] };
      entries.push(obj);
    }
    return entries;
  }

  _clearNewMark() {
    // reset all elements to default.
    this.entries.forEach((val, index, arr) => {
      this.entries[index] = { label: val.label };
    });
  }

  pushEntries(text) {
    this._clearNewMark();
    if (this.entries.length >= settings.maxTextNum) {
      this.entries.shift();
    }
    this.entries.push({ label: text, fontColor: '#ff0000', fontWeight: 'bold' });
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
