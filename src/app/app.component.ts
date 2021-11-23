import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SO GOOD';
  n1:number = 5;
  n2:number = 2;
  picName:string ="https://i.redd.it/sczjp2mui8q61.jpg";

  hi(){
    alert("So Sad");
  }
}
