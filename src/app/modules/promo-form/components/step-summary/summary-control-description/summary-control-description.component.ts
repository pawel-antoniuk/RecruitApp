import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

function formatCamelCaseToWords(name: string | undefined): string | undefined {
  if (name !== undefined) {
    return name?.toString().replace(/([A-Z])/g, m => " " + m)
      .replace(/^./, m => m.toUpperCase());
  } else {
    return undefined;
  }
}

@Component({
  selector: 'app-summary-control-description',
  templateUrl: './summary-control-description.component.html',
  styleUrls: ['./summary-control-description.component.scss']
})
export class SummaryControlDescriptionComponent implements OnInit {

  @Input() control?: AbstractControl;
  @Input() name?: string;

  formattedName?: string;
  formattedValue?: string;
  isControlValueEmpty?: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.formattedName = formatCamelCaseToWords(this.name);
    this.formattedValue = formatCamelCaseToWords(this.control?.value);
    const value = (this.control as FormControl)?.value;
    this.isControlValueEmpty = value === undefined || value === '';
  }

  public get isGroup(): boolean {
    return this.control instanceof FormGroup;
  }

  public get isControl(): boolean {
    return this.control instanceof FormControl;
  }

  public get childrenNameControlPairs(): any[] {
    return Object.entries((this.control as FormGroup)?.controls)
  }

  public get isValid(): boolean | undefined {
    return this.control?.valid;
  }

  public get hasControlChildren(): boolean {
    const children = Object.values((this.control as FormGroup).controls);
    return !!children.find(c => c instanceof FormControl);
  }
}

