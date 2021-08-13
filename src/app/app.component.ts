// COMPOENT HAS 3 PARTS:
// 1. IMPORTS
import { Component } from '@angular/core';


// Available Options in @Component Decorator
// providers: Resources that will be injected into the component constructor
// selector: The query selector that will find the element in the HTML and replace by the component
// styles: Inline styles. NOTE: DO NOT use this parameter with require, it works on development but when you
// build the application in production all your styles are lost
// styleUrls: Array of path to style files
// template: String that contains your HTML
// templateUrl: Path to a HTML file

// 2. METADATA
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 3. Controller/ Class
export class AppComponent {
  title = 'angularmart';

  selectedCurrency: string = 'INR';

  onCurrencyChange(value: string){
    this.selectedCurrency = value;
  }
}
