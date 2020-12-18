import { Injectable } from '@angular/core';
import { LogService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  constructor(log: LogService) {}
}
