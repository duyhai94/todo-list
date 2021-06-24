import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewTaskModule } from '../new-task/new-task.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.scss']
})
export class CardTodoComponent implements OnInit {
  step = 0;


  constructor() { }

  ngOnInit(): void {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
@NgModule({
  declarations: [CardTodoComponent],
  imports: [CommonModule,MatExpansionModule,MatIconModule,MatFormFieldModule,NewTaskModule,MatCheckboxModule],
  exports : [CardTodoComponent]
})

export class CardTodoModule{}
