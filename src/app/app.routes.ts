import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddClaimComponent } from './employee/add-claim/add-claim.component';
import { ClaimListComponent } from './employee/claim-list/claim-list.component';
import { ApprovedClaimsComponent } from './employee/approved-claims/approved-claims.component';
import { EmployeeClaimsComponent } from './admin/employee-claims/employee-claims.component';
import { ClaimAssignmentComponent } from './admin/claim-assignment/claim-assignment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-claim', component: AddClaimComponent },
      { path: 'claim-list', component: ClaimListComponent },
      { path: 'approved', component: ApprovedClaimsComponent },
      { path: 'employee-claims', component: EmployeeClaimsComponent },
      { path: 'assign-claim', component: ClaimAssignmentComponent },
    ],
  },
];
