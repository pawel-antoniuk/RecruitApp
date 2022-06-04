export class Step {
  constructor(public url: string,
              public label: string,
              public tooltip: string = '',
              public available: boolean = true,
              public active: boolean = false) {
  }
}
