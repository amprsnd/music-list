import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeaderComponent } from './_partials/header.component';
import { FooterComponent } from './_partials/footer.component';

import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PerpageComponent } from './perpage/perpage.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    TableComponent,
    FilterComponent,
    PaginationComponent,
    PerpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, AppComponent, FooterComponent]
})
export class AppModule { }
