import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';

import { Modal } from '../shared/class/modal';

@Component({
  selector: 'app-user',
  template: `
   <div class="row" *ngIf = "_isVisible">
    <div class="col-md-4 user-container" *ngFor="let user of users; let i = index">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="{{user.picture.large}}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{user.name.title}} {{user.name.first}} {{user.name.last}}</h5>
          <p class="card-text user-mail">{{user.email}}</p>
          <p class="card-text user-phone">{{user.cell}}</p>
          <a (click)="openModal(show);setUser(user,users,i)" href="#" id="{{i}}" class="btn btn-primary user-action">Read more</a>
        </div>
      </div>
    </div>
   </div>
   <div *ngIf = "show">
    <app-modal [user] = "user"></app-modal>
   </div>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _isVisible:boolean = false;
  private _i:number;
  public user:any;
  public show:boolean = false;
  public url:string;
  public users;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.url = "https://randomuser.me/api/?results=12";
    this.getUsers(this.url, this._isVisible);
  }

  public getUsers(url, _isVisible){
    this._userService.getData(this.url).subscribe(
      data => { 
        this.users = data; 
        this.users = this.users.results;
        this._isVisible = true;
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  public openModal(show):boolean{
    this.show = show;
    this.show = true;
    return this.show;
  }

  public setUser(user,users,_i):void{
  
    this.user = user;
    this.users = users;
    this._i = _i;
    this.user = this.users[this._i];

    console.log('users :', this.users);
    console.log("emiData called");
    console.log("_i :",this._i);
    console.log("user : ", this.user);

  }
}
