import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
