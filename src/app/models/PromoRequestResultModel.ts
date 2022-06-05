export class PromoRequestResultModel<T = null> {
  constructor(public status: 'ok' | 'error',
              public message: string = 'Everything ok!',
              public payload: T | null = null) {
  }
}
