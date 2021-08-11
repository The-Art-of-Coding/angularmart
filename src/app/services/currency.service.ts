import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _code: string = 'INR'; // current currency code
  private currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable = this.currencySubject.asObservable(); // used to fetch the data
  constructor() {}

  updateCurrency(code: string) {
    this._code = code;
    // on every data change : publish a notification
    this.currencySubject.next(this._code);
  }
}
