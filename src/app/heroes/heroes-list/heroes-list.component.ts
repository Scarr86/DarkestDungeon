import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Output() selected = new EventEmitter<Hero>();
  constructor() {}

  ngOnInit(): void {}
  select(hero) {
    this.selected.emit(hero);
  }
}
