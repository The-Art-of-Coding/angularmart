import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyCodes: string[] = ['INR', 'EUR', 'USD', 'GBP', 'CAD'];
  @Output() currencyChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:Event) {
    let val = event.target as HTMLSelectElement;
    this.currencyChanged.emit(val.value);
  }

}
