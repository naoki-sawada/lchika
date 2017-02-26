import { Music } from './utils/Music';
import { TagCloud } from './utils/TagCloud';
import { ClientId } from './utils/ClientId';
import { PostEvent } from './utils/PostEvent';

const clientId = new ClientId();
const id = clientId.get();

const bgMusic = new Music();
const tagcloud = new TagCloud();

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
    bgMusic.reload(data.audio);
  }
});
