import {Component, OnInit} from '@angular/core';
import {StepService} from "../../services/step.service";
import {Step} from "../../models/Step";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  steps: Step[] = [];

  constructor(private stepService: StepService) {
  }

  ngOnInit(): void {
    this.steps = this.stepService.steps;
  }
}

