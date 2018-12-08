import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';
import { Modal } from '../shared/class/modal';

@Component({
  selector: 'app-user',
  template: `
   <div class="row" *ngIf = "_isVisible">
    <div class="col-md-4 user-container" *ngFor="let user of users">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="{{user.picture.large}}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{user.name.title}} {{user.name.first}} {{user.name.last}}</h5>
          <p class="card-text user-mail">{{user.email}}</p>
          <p class="card-text user-phone">{{user.cell}}</p>
          <a (click)="openModal(show);emitData(users)" href="#" class="btn btn-primary user-action">Read more</a>
        </div>
      </div>
    </div>
   </div>
   <app-modal [show] = "show" [data] = "data"></app-modal>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _isVisible:boolean;
  public show:boolean = false;
  public url:string;
  public users;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.url = "https://randomuser.me/api/?results=12";
    this.getUsers(this.url, this._isVisible);
  }

  public getUsers(url, _isVisible):any{
    this._userService.getData(this.url).subscribe(
      data => { 
        this.users = data; 
        this.users = this.users.results;
        return this._isVisible = true;
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  public openModal(show){
    this.show = show;
    console.log("openModal called");
    console.log("show :", this.show);
    return !this.show;
  }

  public emitData(users){
    this.users = users;
    console.log("emiData called");
    console.log("user : ", this.users);
    return this.users;
  }
}
