import { Component, OnInit } from '@angular/core';
import { PartyService } from '../service/party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit {
  constructor(party: PartyService) {}

  ngOnInit(): void {}
}
