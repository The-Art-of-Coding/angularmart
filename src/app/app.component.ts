import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmart';

  selectedCurrency: string = 'INR';

  onCurrencyChange(value: string){
    this.selectedCurrency = value;
  }
}
