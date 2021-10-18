import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePageRoutingModule } from './simple-page-routing.module';
import { SimplePageComponent } from './simple-page.component';
import {SharedModule} from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    SimplePageRoutingModule,
    SharedModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [SimplePageComponent]
})
export class SimplePageModule { }
