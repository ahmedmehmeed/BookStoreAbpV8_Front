import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgbDatepickerModule,
    SharedModule
  ]
})
export class AuthorModule { }
