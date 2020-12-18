import {
  Component,
  OnInit,
  Host,
  SkipSelf,
  DoCheck,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HeroesService, Hero } from '../service/heroes.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, DoCheck, OnChanges {
  selectHero: Hero = null;
  constructor(public heroes: HeroesService, private fb: FormBuilder) {}
  ngOnInit(): void {}
  ngDoCheck() {
    // console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  newHero() {
    this.selectHero = {
      name: '',
      img: '',
      wiki: '',
      campSkills: [],
      heroSkills: [],
    } as Hero;
  }
  selected(hero) {
    this.selectHero = hero;
  }

  delete() {
    if (this.selectHero.key) this.heroes.deleteItem(this.selectHero.key);
    this.selectHero = null;
  }
  save() {
    const key = this.selectHero.key;
    if (key) {
      this.heroes.setItem(key, this.selectHero).then((key) => {
        this.selectHero = null;
      });
    } else {
      this.heroes.addItem(this.selectHero).then((key) => {
        this.selectHero = null;
      });
    }
  }
}
