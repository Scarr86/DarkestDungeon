import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero, HeroesService } from 'src/app/service/heroes.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  commonCampSkills = environment.heroList.commonSkillsCamp;
  @Input() hero: Hero = null;
  @Output() heroChange = new EventEmitter<Hero>();
  constructor() {}
  ngOnInit(): void {}
  goback() {
    this.hero = null;
    this.heroChange.emit(null);
  }
}
