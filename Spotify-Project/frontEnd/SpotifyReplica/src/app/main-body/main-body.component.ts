import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserLogInService } from '../services/userlogin/user-log-in.service';
import { NotificationService } from '../services/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor( private breakpointObserver: BreakpointObserver,
    private loginService: UserLogInService,
    private router: Router,
    private notificationService: NotificationService) { }

  userLoggedInButton: boolean = true
  userLogOutButton: boolean = false;
  userRegisterationButton: boolean = true;

  alreadyLoggedIn() {
    if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null) {
      this.notificationService.displayNotification("you are already logged in", "not allowed")

    } else {
      this.notificationService.displayNotification("please login ","login");
      this.router.navigateByUrl("login");
    }
  }
  checkForRegistration() {
    if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null) {
      this.notificationService.displayNotification("you are already registered in", "please log in")
    } else {
      this.router.navigateByUrl("register");
    }
  }
  logOutUser() {
    this.loginService.isLoggendIn = false;
    this.userLogOutButton = false;
    this.userRegisterationButton = true;
    this.userLoggedInButton = true
    this.notificationService.displayNotification("logged out successfully !", "have a nice day");
    this.router.navigateByUrl("login");
  }
  checkForUserRegistration(){
    this.userLogOutButton = true;
    this.userRegisterationButton = false;
    this.userLoggedInButton = false;
  }
  checkforUserLogin(){
    if (this.loginService.isLoggendIn == true && this.loginService.loginToken != null){

    }else {
      this.router.navigateByUrl("login");
    }
  }

}
