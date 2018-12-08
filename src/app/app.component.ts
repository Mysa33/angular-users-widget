import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `   
    <div class="container-fluid users-header">
    </div>
    
    <div class="container" style="min-height:50vh;margin-top:10vh;">
      <app-user></app-user>
    </div>
    
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  ngOnInit() {
  
  }

}
