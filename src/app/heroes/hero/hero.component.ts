import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero, HeroesService } from 'src/app/service/heroes.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero = null;
  @Output() heroChange = new EventEmitter<Hero>();
  heroForm: FormGroup;
  constructor(public heroes: HeroesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required]],
      wiki: ['', [Validators.required]],
      img: ['', [Validators.required]],
      campSkills: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          img: ['', [Validators.required]],
        }),
      ]),
      heroSkills: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          img: ['', [Validators.required]],
        }),
        this.fb.group({
          name: ['', [Validators.required]],
          img: ['', [Validators.required]],
        }),
      ]),
    });
    this.heroForm.patchValue(this.hero);

    this.heroForm.valueChanges.subscribe((v) => {
      this.hero = this.hero.key ? { key: this.hero.key, ...v } : v;
      this.heroChange.emit(this.hero);
    });
  }

  get campSkills() {
    return this.heroForm.get('campSkills') as FormArray;
  }
  get heroSkills() {
    return this.heroForm.get('heroSkills') as FormArray;
  }
  addSkillsForm(arr: FormArray) {
    arr.push(
      this.fb.group({
        name: ['', [Validators.required]],
        img: ['', [Validators.required]],
      })
    );
    // console.log(this.heroForm.valid, this.heroForm.value);
  }

  get wiki() {
    return this.heroForm.value['wiki'];
    // window.open(wiki);
  }

  get img() {
    return this.heroForm.value['img'];
  }

  save() {
    const key = this.hero.key || null;
    const hero = this.heroForm.value;
    if (key) {
      this.heroes
        .setItem(key, hero)
        .then((key) => (this.hero = { key: this.hero.key, ...hero }));
    } else {
      this.heroes.addItem(hero).then((key) => (this.hero = { key, ...hero }));
      console.log(this.hero);
    }
  }

  cancel() {
    this.hero = null;
  }

  delete() {
    console.log(this.hero.key);
    this.heroes.deleteItem(this.hero.key);
  }

  addItem(name: string, age: number) {
    // this.heroes.addItem({ name, age });
  }
  deleteEverything() {
    // this.heroes.deleteEverything();
  }
  setItem(key, name) {
    // this.heroes.setItem(key, { name } as Hero);
  }
  updateItem(key, age) {
    // this.heroes.updateItem(key, { age } as Hero);
  }
  deleteItem(key) {
    // this.heroes.deleteItem(key);
  }
}
