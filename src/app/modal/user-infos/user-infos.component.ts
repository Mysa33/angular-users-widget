import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-infos',
  template: `
  <div class="user-infos-comp">
    <div class= "row">
      <div class="col-lg-12">
        <h3>
          {{user.first}} {{user.last}}, {{user.dob.age}}.
        </h3>
      </div>        
    </div>
    <div class= "row">
      <div class="col-lg-4 user-info-title">Email :</div>
      <div class="col-lg-8">
        {{user.email}}
      </div>        
    </div>
    <div class= "row">
      <div class="col-lg-4 user-info-title">Cell :</div>
      <div class="col-lg-8">
        {{user.cell}}
      </div>        
    </div>
    <div class= "row">
      <div class="col-lg-4 user-info-title">City :</div>
      <div class="col-lg-8">
        {{user.location.city}}
      </div>        
    </div>
  </div>
  `,
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {

  constructor() { }
  
  @Input() user;

  ngOnInit() {

  }

}
