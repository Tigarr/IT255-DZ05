import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { MaxCenaPipe } from './max-cena.pipe';
import { DodajSobuComponent } from './dodaj-sobu/dodaj-sobu.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    MaxCenaPipe,
    DodajSobuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
