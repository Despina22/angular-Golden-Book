import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setKey(key: string, value: any): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getKey(key: string): any {
    return localStorage.getItem(key);
  } //TODO:

  removeKey(key: string): void {
    return localStorage.removeItem(key);
  }
}
