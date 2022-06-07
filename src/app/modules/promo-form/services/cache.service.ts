import {Injectable} from '@angular/core';

const localStorageKey = 'FormStateStorage';

@Injectable({
  providedIn: 'root'
})
export class CacheService<T extends {}> {

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

    const storageItem = localStorage.getItem(CacheService.getLocalStorageKey(key));
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
    localStorage.setItem(CacheService.getLocalStorageKey(key), strDraft);
  }

  public clearAll(key: string) {
    localStorage.removeItem(CacheService.getLocalStorageKey(key));
  }

  public setDraft(key: string, newDraft: T) {
    this.cachedState = newDraft;
    const newDraftStr = JSON.stringify(newDraft);
    localStorage.setItem(CacheService.getLocalStorageKey(key), newDraftStr);
  }
}
