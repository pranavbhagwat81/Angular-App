import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  coursesPicLink:string = "https://image.shutterstock.com/image-photo/online-courses-260nw-255297163.jpg";

  clickButton(){
    alert("Button Clicked");
  }
}
