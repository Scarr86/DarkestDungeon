import { Injectable } from '@angular/core';
import FireBase from './firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { LogService } from './logger.service';
export interface Hero {
  id: number;
  name: string;
  wiki: string;
  hasCommonCampSkills: boolean;
  skillsHero: {
    id: number;
    name: string;
  }[];
  skillsCamp: {
    id: number;
    name: string;
  }[];
}
export interface HeroList {
  commonSkillsCamp: { id: number; name: string }[];
  heroes: Hero[];
}

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends FireBase<Hero> {
  // constructor(rtdb: AngularFireDatabase, log: LogService) {
  //   super('heroes', rtdb, log);
  // }
}
