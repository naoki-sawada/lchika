import Vue from 'vue';
import { ClientId } from './utils/ClientId';
import { Music } from './utils/Music';
import { TagCloud } from './utils/TagCloud';
import { PostEvent } from './utils/PostEvent';
import trans from './trans';

const clientId = new ClientId();
const id = clientId.get();

const idlow = id.toLowerCase();
let page = '';
let idInvalid = true;
if (idlow.includes('wd')) {
  page = 'wedding';
} else if (idlow.includes('ch')) {
  page = 'christmas';
} else if (idlow.includes('ev')) {
  page = 'event';
} else if (idlow.includes('vl')) {
  page = 'valentine';
} else {
  idInvalid = false;
}

if (idInvalid) {
  const bgMusic = new Music(`assets/audio/${trans[page].defaltMusic}`);
  const tagcloud = new TagCloud(trans[page].tagCloud);
  const postEvent = new PostEvent();
  postEvent.on('text', (data) => {
    console.log(data);
    if (data.clientID === id) {
      tagcloud.pushEntries(data.text);
      tagcloud.load();
    }
  });
  postEvent.on('audio', (data) => {
    console.log(data);
    if (data.clientID === id) {
      bgMusic.reload(`assets/audio/${data.audio}`);
    }
  });

  window.onload = () => {
    tagcloud.firstLoad();
    const logo = new Vue({
      el: '#logo',
      data: {
        name: `assets/img/${trans[page].logo}`
      }
    });
    const video = new Vue({
      el: '#video',
      data: {
        name: `assets/movie/${trans[page].video}`
      }
    });
    const videoImg = new Vue({
      el: '#videoImg',
      data: {
        name: `assets/img/${trans[page].videoImg}`
      }
    });
    const css = new Vue({
      el: '#css',
      data: {
        name: `assets/css/main.css`
      }
    });
  }
}
