import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';


import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    DashboardDefaultRoutingModule,
    SharedModule,
    ChartModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [DashboardDefaultComponent]
})
export class DashboardDefaultModule { }
