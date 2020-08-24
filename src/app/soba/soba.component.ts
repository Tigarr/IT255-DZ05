import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Soba } from './soba.model';
@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {

  @Output() roomToDelete: EventEmitter<Soba> = new EventEmitter();;
  @Output() updateRoom: EventEmitter<Soba> = new EventEmitter();;
  @HostBinding('attr.class') cssClass = 'row';
  @Input() soba: Soba;
  
  constructor() { }
  public deleteRoom(): void {
    this.roomToDelete.emit(this.soba);
  }
  public changeContent(): void {
    this.updateRoom.emit(this.soba);
  }

  ngOnInit() {
  }
  public getPrice( cena:number, brojsoba:number) {
   let brojNoci = ((cena * brojsoba))
    return brojNoci;
  }
}
