import {Injectable} from '@angular/core';

const localStorageKey = 'FormStateStorage';

@Injectable({
  providedIn: 'root'
})
export class DraftService<T extends {}> {

  cachedState?: T;

  constructor() {
  }

  private static getLocalStorageKey(key: string) {
    return `${localStorageKey}/${key}`
  }

  public load(key: string): T | undefined {
    const storageItem = localStorage.getItem(DraftService.getLocalStorageKey(key));
    if(storageItem) {
      this.cachedState = JSON.parse(storageItem) as T;
      return this.cachedState;
    } else {
      return undefined;
    }
  }

  public save(key: string, draft: T) {
    const strDraft = JSON.stringify(draft);
    localStorage.setItem(DraftService.getLocalStorageKey(key), strDraft);
  }

  public clearAll(key: string) {
    localStorage.removeItem(DraftService.getLocalStorageKey(key));
  }

  public setDraft(key: string, newDraft: T) {
    this.cachedState = newDraft;
    const newDraftStr = JSON.stringify(newDraft);
    localStorage.setItem(DraftService.getLocalStorageKey(key), newDraftStr);
  }
}
