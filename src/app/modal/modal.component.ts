import { Component, OnInit, Input } from '@angular/core';

import { User } from '../shared/class/User';

@Component({
  selector: 'app-modal',
  template:`
  <div class="container-fluid user-modal-container">
    <div class="row user-modal-body">
      <div class="col-lg-4">
        <div>
          <img class="card-img-top" src="{{data.img}}" alt="Card image cap">
        </div>
        <hr>
        <div class="user-modal-btn-container">
          <app-buttons></app-buttons>  
        </div>
      </div> 
      <div class="col-lg-8">
        <app-user-infos [user] = "data"></app-user-infos>
        <hr>
        <app-maps [loc] = "userLocation"></app-maps>
      </div>  
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor() { }
  
  @Input() user;
  private _display:boolean;
  public data:User;
  public item:any;
  public userLocation:any;
  public loc:any;
  

  ngOnInit() {

    this.setUser(this.user,this.data,this.userLocation);

  }

  setUser(user,data,userLocation){
    
    this.user = user;
    this.data = new User().set(this.user);
    this.userLocation = this.data.location;
  }

}
