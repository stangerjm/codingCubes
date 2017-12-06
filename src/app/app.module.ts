import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CcGridComponent } from './cc-grid/cc-grid.component';
import { CcGridListComponent } from './cc-grid/cc-grid-list/cc-grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CcGridComponent,
    CcGridListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
