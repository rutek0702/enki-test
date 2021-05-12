import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ThirdStepComponent} from '../third-step/third-step.component';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {
  @Output() changeStep = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getStep(): void {
    this.changeStep.emit('ThirdStepComponent');
  }

}
