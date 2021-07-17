import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssc-exam';
  constructor(){
    setTimeout(() => {
      // console.clear();
    }, 100);
    
  }
}
