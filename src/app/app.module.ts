import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { AppToggleButtonComponent } from './components/app-toggle-button/app-toggle-button.component';
import { AppItemListComponent } from './components/app-item-list/app-item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToggleButtonComponent,
    AppItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
