import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  name = 'name';
  constructor(public heroes: HeroesService) {}

  ngOnInit(): void {
    this.heroes.items.subscribe(console.log);
  }
  addItem(name: string) {
    this.heroes.addItem({ name });
  }
  deleteEverything() {
    this.heroes.deleteEverything();
  }

  updateItem(key, name) {
    this.heroes.updateItem(key, { name });
  }
  deleteItem(key) {
    this.heroes.deleteItem(key);
  }
}
