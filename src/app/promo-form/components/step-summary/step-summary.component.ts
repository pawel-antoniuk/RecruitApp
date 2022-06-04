import {Component, OnInit} from '@angular/core';
import {DraftService} from "../../services/draft.service";


@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})
export class StepSummaryComponent implements OnInit {

  constructor(private draftService: DraftService) {
  }

  ngOnInit(): void {
  }

  get summary(): any {
    return this.draftService.loadAll()
  }

  onSaveClicked() {
    this.draftService.clearAll();
  }
}
