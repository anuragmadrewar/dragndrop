import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { DragndropDirective } from './directives/dragndrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragndropComponent,
    FileListComponent,
    DragndropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
