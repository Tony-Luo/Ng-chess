import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketServiceService {

  constructor() {
    console.log(io);
  }

  initSocket() {
    console.log(io);
  }

}
