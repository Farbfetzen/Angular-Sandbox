import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AComponent } from './a/a.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [AppComponent, AComponent, BComponent, CComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
