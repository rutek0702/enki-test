import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FirstStepComponent} from '../first-step/first-step.component';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {
  @Output() changeStep = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getStep(): void {
    this.changeStep.emit('FirstStepComponent');
  }
}
