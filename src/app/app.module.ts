import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardformComponent } from './cardform/cardform.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardformComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
