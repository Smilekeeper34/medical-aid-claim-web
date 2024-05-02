import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private jwtHelper: JwtHelperService) {}

  canActivate(): boolean {
    const token = this.auth.getToken();
    const decoded = this.jwtHelper.decodeToken(token);

    if (!token || this.jwtHelper.isTokenExpired(token) || !decoded.groupName) {
      this.router.navigate(['/login']);
      return false;
    }

    // Replace with actual logic to check if the user's group has access 
    const allowedRoles = ['DOCTOR', 'ADMIN','EMPLOYEE']; // Example
    if (!allowedRoles.includes(decoded.groupName)) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
