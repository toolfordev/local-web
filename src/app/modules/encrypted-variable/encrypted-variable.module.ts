import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncryptedVariableRoutingModule } from './encrypted-variable-routing.module';
import { CreateComponent } from './create/create.component';
import { EncryptedVariableComponent } from './encrypted-variable.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { EncryptedVariableService } from 'src/app/services/encrypted-variable/encrypted-variable.service';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [CreateComponent, EncryptedVariableComponent, ListComponent, FormComponent, ReadComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    EncryptedVariableRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    EncryptedVariableService
  ]
})
export class EncryptedVariableModule { }
