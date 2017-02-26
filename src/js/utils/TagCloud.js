import { firstEntries, settings } from '../conf/tagCloud';

export class TagCloud {
  constructor() {
    this.entries = this._makeEntries(firstEntries);
    this.loadOnce = false;
    this.firstLoad();
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
    this.entries.push(this._makeEntries([text])[0]);
    console.log(this.entries);
  }

  remove() {
    let holderObj = document.getElementById('holder');
    holderObj.removeChild(holderObj.firstChild);
  }

  firstLoad() {
    settings.entries = this.entries;
    window.onload = () => {
      let holderObj = document.getElementById('holder');
      let svg3DTagCloud = new SVG3DTagCloud(holderObj, settings);
    };
  }

  load() {
    this.remove();
    settings.entries = this.entries;
    let holderObj = document.getElementById('holder');
    let svg3DTagCloud = new SVG3DTagCloud(holderObj, settings);
  }
}
