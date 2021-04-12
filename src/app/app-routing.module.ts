import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import { FileListComponent } from './components/file-list/file-list.component';

const routes: Routes = [
  {
    path: 'uploadFiles',
    component: DragndropComponent,
  },
  {
    path: 'viewFiles',
    component: FileListComponent,
  },
  {
    path: '',
    redirectTo: 'uploadFiles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
