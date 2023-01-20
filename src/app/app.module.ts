import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaDischiComponent } from './lista-dischi/lista-dischi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ListaDischiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
