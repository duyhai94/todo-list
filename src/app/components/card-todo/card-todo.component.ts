import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewTaskModule } from '../new-task/new-task.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MockData } from 'src/app/datas/mock-data';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.scss']
})
export class CardTodoComponent implements OnInit {
  form = new FormGroup({
    nameTask : new FormControl(''),
    description : new FormControl(''),
    date: new FormControl(''),
    piority: new FormControl
  })

  step = 0;

  data = MockData;
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
  onSubmit() { }
  
  btnRemove(ev) {
    alert(ev)
  }
}
@NgModule({
  declarations: [CardTodoComponent],
  imports: [CommonModule,MatExpansionModule,MatIconModule,MatFormFieldModule,NewTaskModule,MatCheckboxModule, ReactiveFormsModule,FormsModule],
  exports : [CardTodoComponent]
})

export class CardTodoModule{}
