import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalVariableRoutingModule } from './global-variable-routing.module';
import { CreateComponent } from './create/create.component';
import { GlobalVariableComponent } from './global-variable.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { GlobalVariableService } from 'src/app/services/global-variable/global-variable.service';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [CreateComponent, GlobalVariableComponent, ListComponent, FormComponent, ReadComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    GlobalVariableRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    GlobalVariableService
  ]
})
export class GlobalVariableModule { }
