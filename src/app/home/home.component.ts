import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myVar = 'Hello There, welcome to this Angular 12 course.';
  newVar = 'This is one Way Data binding with {{ }}'

  constructor() { }

  ngOnInit(): void {
  }

  onClickFn(){
    console.log("Button Clicked !!!")
    alert("Button Clicked !!!");
  }

}
