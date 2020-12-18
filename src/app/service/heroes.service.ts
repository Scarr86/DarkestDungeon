import { Injectable } from '@angular/core';
import FireBase from './firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { LogService } from './logger.service';

export interface Hero {
  key?: string;
  name: string;
  wiki: string;
  img: string;
  campSkills: {
    name: string;
    img: string;
  }[];
  heroSkills: {
    name: string;
    img: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends FireBase<Hero> {
  constructor(rtdb: AngularFireDatabase, log: LogService) {
    super('heroes', rtdb, log);
  }
}
