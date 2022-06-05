import {Component, OnInit} from '@angular/core';
import {StepService} from "../../services/step.service";
import {Step} from "../../models/Step";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  steps: Step[];

  constructor(private stepService: StepService) {
    this.steps = stepService.steps;
  }

  ngOnInit(): void {
  }

}
