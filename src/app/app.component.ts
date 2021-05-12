import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FirstStepComponent} from './components/first-step/first-step.component';
import {SecondStepComponent} from './components/second-step/second-step.component';
import {ThirdStepComponent} from './components/third-step/third-step.component';
import {ChangeDetection} from '@angular/cli/lib/config/schema';
import {BehaviorSubject} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  steps = 'FirstStepComponent';


  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit(): void {
    this.loadSteps();
  }

  loadSteps() {
    const containerRef = this.container;
    containerRef.clear();
    const componentRef = containerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(this.getTemplateName(this.steps))
    );

    componentRef.instance.changeStep.subscribe(val => {
      this.steps = val;
      this.loadSteps();
    });
  }

  getTemplateName(parm) {
    switch (parm) {
      case 'FirstStepComponent':
        return FirstStepComponent;
      case 'SecondStepComponent':
        return SecondStepComponent;
      case 'ThirdStepComponent':
        return ThirdStepComponent;
    }
  }
}
