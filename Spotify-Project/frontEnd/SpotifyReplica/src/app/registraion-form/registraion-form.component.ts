import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../model/User';
import { SpotifyUserService } from '../services/userSpotify/spotify-user.service';
import { NotificationService } from '../services/notification/notification.service';
import { UserLogInService } from '../services/userlogin/user-log-in.service';

@Component({
  selector: 'app-registraion-form',
  templateUrl: './registraion-form.component.html',
  styleUrls: ['./registraion-form.component.css']
})
export class RegistraionFormComponent {
  constructor(
    private userService: SpotifyUserService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: UserLogInService
  ) { }
  userDetails: User = {
    email: '',
    name: '',
    password: ''
  }
  error = null;
  registerUser() {
    if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null) {
      this.notificationService.displayNotification("you are already logged in", "not allowed");
    } else {
      this.userService.registerUserToSpotify(this.userDetails).subscribe(data => {
        this.notificationService.displayNotification(`${data.name} is registered to spotify successfully`, "welcome");
        this.router.navigateByUrl("login");
      }, (error) => {
        this.error = error.error;
        console.log(error);
      });
    }

  }


}
