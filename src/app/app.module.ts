import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, InstructionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
