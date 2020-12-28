import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import { Hero, HeroList } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  @Input() heroes: Hero[] = null;
  @Output() selected = new EventEmitter<Hero>();
  @Input() isNoName = false;
  constructor() {}
  ngOnInit(): void {}
  select(hero) {
    this.selected.emit(hero);
  }
}
