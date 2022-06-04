import {Component, Input, OnInit} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {

  @Input() tooltip = '';
  @Input() tooltipPosition: TooltipPosition = 'below';

  constructor() {
  }

  ngOnInit(): void {
  }

}
