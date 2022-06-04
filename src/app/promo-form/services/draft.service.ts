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

  public loadAll(): StoredValue {
    const storageItem = localStorage.getItem(localStorageKey) ?? '{}';
    this.cachedState = JSON.parse(storageItem);
    return this.cachedState;
  }

  public load(key: string): StoredValue {
    const storedValues = this.loadAll();
    return storedValues[key] ?? {};
  }

  public save(key: string, state: StoredValue) {
    this.cachedState[key] = state;
    const strState = JSON.stringify(this.cachedState);
    localStorage.setItem(localStorageKey, strState);
  }

  public clearAll() {
    localStorage.removeItem(localStorageKey);
  }
}
