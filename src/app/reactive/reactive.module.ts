import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRountingRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRountingRoutingModule
  ]
})
export class ReactiveRountingModule { }
