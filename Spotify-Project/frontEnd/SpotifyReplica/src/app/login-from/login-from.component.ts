import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../model/LoginUser';
import { User } from '../model/User';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { MainBodyComponent } from '../main-body/main-body.component';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent {
  constructor(private userLoginService: UserLogInService,
     private router: Router,
     private mainBodyComponent:MainBodyComponent) { }

  userLogInDetails: LoginUser = {
    email: '',
    password: ''
  }
  error = null;

  userLogIn() {
    this.userLoginService.loginUser(this.userLogInDetails).subscribe(data => {


      this.userLoginService.isLoggendIn = true;
      let headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + data.token);
      this.userLoginService.loginToken = headers;
      console.log(headers);
      console.log(data.token)

      this.router.navigateByUrl("");
      this.mainBodyComponent.checkForUserRegistration();
    }, (error) => {
      this.error = error.error
    });
  }

}
