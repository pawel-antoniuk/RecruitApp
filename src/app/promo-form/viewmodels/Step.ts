export class Step {
  constructor(public id: string,
              public label: string,
              public tooltip: string = '',
              public available: boolean = true,
              public active: boolean = false) {
  }
}
