import {Component, OnInit} from '@angular/core';
import {FormStepService} from "../../services/form-step.service";
import {Step} from "../../models/Step";
import {MessageDialogService} from "../../../dialog/message-dialog.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  steps: Step[] = [];

  constructor(private stepService: FormStepService,
              private messageDialog: MessageDialogService) {
  }

  ngOnInit(): void {
    this.steps = this.stepService.steps;
  }

  public navigationButtonPressed(step: Step) {
    if (!step.available && step.tooltip) {
      this.messageDialog.showMessage('This step is unavailable', step.tooltip);
    }
  }
}

