import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PartyComponent } from './party/party.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'party', component: PartyComponent },
  { path: 'dungeon', component: DungeonComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
