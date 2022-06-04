export class PromoRequestResult {
  constructor(public status: 'ok' | 'error',
              public message: string = 'Everything ok!') {
  }
}
