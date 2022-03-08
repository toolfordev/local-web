import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalVariableModule } from './global-variable/global-variable.module';
import { EncryptedVariableModule } from './encrypted-variable/encrypted-variable.module';
import { ModulesComponent } from './modules.component';


const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'global-variable',
        loadChildren: () => GlobalVariableModule
      },
      {
        path: 'encrypted-variable',
        loadChildren: () => EncryptedVariableModule
      },
      { path: '', redirectTo: 'global-variable', pathMatch: 'full' },
      { path: '**', redirectTo: 'global-variable' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
