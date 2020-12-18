import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private _msg: string[] = [];
  get msg() {
    return this._msg.reverse();
  }
  constructor() {}
  add(msg) {
    this._msg.push(msg);
  }
  clear() {
    this._msg = [];
  }
}
