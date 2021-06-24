import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Output() callback =  new EventEmitter;
  @Input() btnName;
  form = new FormGroup({
    nameTask : new FormControl(''),
    description : new FormControl(''),
    date: new FormControl(''),
    piority: new FormControl
  })
  constructor() { }

  onSubmit(){
    console.log(this.form.value);

  }


}
@NgModule({
  declarations: [NewTaskComponent ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  exports: [NewTaskComponent ]
})
export class NewTaskModule{}
