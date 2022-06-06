import {Injectable} from '@angular/core';

const localStorageKey = 'FormStateStorage';

@Injectable({
  providedIn: 'root'
})
export class FormDraftService<T extends {}> {

  cachedState?: T;

  constructor() {
  }

  private static getLocalStorageKey(key: string) {
    return `${localStorageKey}/${key}`
  }

  public load(key: string): T | undefined {
    if(this.cachedState) {
      return this.cachedState
    }

    const storageItem = localStorage.getItem(FormDraftService.getLocalStorageKey(key));
    if(storageItem) {
      this.cachedState = JSON.parse(storageItem) as T;
      return this.cachedState;
    } else {
      return undefined;
    }
  }

  public save(key: string, draft: T) {
    this.cachedState = draft;
    const strDraft = JSON.stringify(draft);
    localStorage.setItem(FormDraftService.getLocalStorageKey(key), strDraft);
  }

  public clearAll(key: string) {
    localStorage.removeItem(FormDraftService.getLocalStorageKey(key));
  }

  public setDraft(key: string, newDraft: T) {
    this.cachedState = newDraft;
    const newDraftStr = JSON.stringify(newDraft);
    localStorage.setItem(FormDraftService.getLocalStorageKey(key), newDraftStr);
  }
}
