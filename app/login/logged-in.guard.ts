import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './credentials.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
	
  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}