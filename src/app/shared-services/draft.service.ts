import {Injectable} from '@angular/core';

const localStorageKey = 'FormStateStorage';

type StoredValue = { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export class DraftService {

  cachedState: StoredValue = {};

  constructor() {
  }

  private static getLocalStorageKey(key: string) {
    return `${localStorageKey}/${key}`
  }

  public load(key: string): StoredValue {
    const storageItem = localStorage.getItem(DraftService.getLocalStorageKey(key)) ?? '{}';
    this.cachedState = JSON.parse(storageItem);
    return this.cachedState;
  }

  public save(key: string, draft: StoredValue) {
    const strDraft = JSON.stringify(draft);
    localStorage.setItem(DraftService.getLocalStorageKey(key), strDraft);
  }

  public clearAll(key: string) {
    localStorage.removeItem(DraftService.getLocalStorageKey(key));
  }

  public setDraft(key: string, newDraft: any) {
    this.cachedState = newDraft;
    const newDraftStr = JSON.stringify(newDraft);
    localStorage.setItem(DraftService.getLocalStorageKey(key), newDraftStr);
  }
}
