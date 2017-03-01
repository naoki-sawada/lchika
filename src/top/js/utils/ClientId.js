import { settings } from '../conf/settings';

export class ClientId {
  constructor() {}

  get() {
    let result = prompt('Please input the your client ID: ', settings.clientID);
    if (result) {
      console.log('Your client ID is: ' + result);
    } else {
      console.log('Canceled!');
    }
    return result;
  }
}
