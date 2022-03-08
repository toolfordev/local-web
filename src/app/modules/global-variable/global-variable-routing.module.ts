import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalVariableComponent } from './global-variable.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path: '',
    component: GlobalVariableComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'read/:id', component: ReadComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'delete/:id', component: DeleteComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalVariableRoutingModule { }
