import { Injectable } from '@angular/core';
import { Soba } from '../soba/soba.model';

@Injectable({
  providedIn: 'root'
})
export class SobaServiceService {
  getPrice():Soba[]{
    return [];
  }
  constructor() { }
}
