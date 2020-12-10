import { Injectable } from '@angular/core';
import FireBase from './firebase';
import { AngularFireDatabase } from '@angular/fire/database';

export interface Hero {
  key?: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends FireBase<Hero> {
  constructor(rtdb: AngularFireDatabase) {
    super('heroes', rtdb);
  }
}
