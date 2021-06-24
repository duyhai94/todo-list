import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BaseButtonModule } from '../base-button/base-button.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

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
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule, BaseButtonModule ],
  exports: [NewTaskComponent ]
})
export class NewTaskModule{}
