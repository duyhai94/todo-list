import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() btnTitle;
  @Input() type :any;
  @Input() data: any;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.btnTitle,this.type);
  }
}

@NgModule({
  declarations: [BaseButtonComponent],
  imports: [CommonModule],
  exports: [BaseButtonComponent]
})
export class BaseButtonModule{}

// 1 add
// 2 del
// 3 update
// 4 detail
// 5 cancel