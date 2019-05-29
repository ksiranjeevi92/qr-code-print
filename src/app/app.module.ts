import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserAnimationsModule,
       BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule
        
         ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
