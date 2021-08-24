import { Injectable } from '@angular/core';
import { Ichats } from './ichats';

@Injectable({ providedIn: 'root' })
export class MessageStorageService {
  constructor() {}
  /* get method for accessing private local storage*/
  private getLocalStorageData(key: number): string {
    return localStorage.getItem(String(key));
  }
  /* set method for setting local storage*/
  private setLocalStorageData(id: number, message: Ichats[]): void {
    localStorage.setItem(String(id), JSON.stringify(message));
  }
  getMessage(id: number): string {
    return this.getLocalStorageData(id);
  }
  setMessage(id: number, message: Ichats[]): void {
    this.setLocalStorageData(id, message);
  }
}
