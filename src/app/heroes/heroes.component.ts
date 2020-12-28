import {
  Component,
  OnInit,
  Host,
  SkipSelf,
  DoCheck,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HeroesService, Hero, HeroList } from '../service/heroes.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero = null;
  heroesList: HeroList = environment.heroList;
  constructor() {}
  ngOnInit() {}
  get heroes() {
    return this.heroesList.heroes;
  }
}
