import { EventEmitter } from 'events';
import io from 'socket.io-client';
import { settings } from '../conf/settings';

console.log(settings);

export class PostEvent extends EventEmitter {
  constructor() {
    super();
    this.socket = io(settings.socketio.address);
    this.socket.on('connect', () => {
      this.socket.on('text', (data) => {
        // console.log(`Receive text data: ${data}`);
        this.emit('text', data);
      });
      this.socket.on('audio', (data) => {
        // console.log(`Receive audio data: ${data}`);
        this.emit('audio', data);
      });
    });
  }
}
