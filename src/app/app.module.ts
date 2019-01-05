import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './shared/services/user.service';
import { ModalComponent } from './modal/modal.component';
import { UserInfosComponent } from './modal/user-infos/user-infos.component';
import { ButtonsComponent } from './modal/buttons/buttons.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModalComponent,
    UserInfosComponent,
    ButtonsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
