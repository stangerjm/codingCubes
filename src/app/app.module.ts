import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CcGridComponent } from './cc-grid/cc-grid.component';
import { CcGridListComponent } from './cc-grid/cc-grid-list/cc-grid-list.component';
import { CcParserService } from './cc-parser.service';
import { CcInputComponent } from './cc-input/cc-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CcGridComponent,
    CcGridListComponent,
    CcInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CcParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
