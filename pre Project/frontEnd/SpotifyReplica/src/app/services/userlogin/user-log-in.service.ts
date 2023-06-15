import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/model/LoginUser';
@Injectable({
  providedIn: 'root'
})
export class UserLogInService {
  isLoggendIn:boolean=false;
  loginToken:HttpHeaders|undefined;
  constructor(private httpClient:HttpClient) { }
  loginUser(user:LoginUser):Observable<any>{
    return this.httpClient.post<LoginUser>("http://localhost:8079/userAuth/userLogin",user);
  }
}
