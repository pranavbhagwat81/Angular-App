import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";
  title = 'Angular';
  coursesPicLink:string = "https://image.shutterstock.com/image-photo/online-courses-260nw-255297163.jpg";
  isActive = true;

  clickButton(){
    alert("Button Clicked");
  }

  isActiveTrue(){
    console.log("Mouse Leave");
    this.isActive = true;
  }

  isActiveFalse(){
    console.log("Mouse Enter");
    this.isActive =false;
  }

  consoleUserName(){
    console.log(this.userName);
  }

}
