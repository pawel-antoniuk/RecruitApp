export class Step {
  constructor(public url: string,
              public label: string,
              public available: boolean = true,
              public active: boolean = false) {
  }
}
