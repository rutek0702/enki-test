import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SecondStepComponent} from '../second-step/second-step.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit, AfterViewInit {
  @Output() changeStep = new EventEmitter();
  form: FormGroup | undefined;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  getStep(): void {
    this.changeStep.emit('SecondStepComponent');
  }

  ngAfterViewInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });

    this.cd.detectChanges();
  }

}
