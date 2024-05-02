import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddClaimComponent } from './employee/add-claim/add-claim.component';
import { ClaimListComponent } from './employee/claim-list/claim-list.component';
import { ApprovedClaimsComponent } from './employee/approved-claims/approved-claims.component';
import { EmployeeClaimsComponent } from './admin/employee-claims/employee-claims.component';
import { ClaimAssignmentComponent } from './admin/claim-assignment/claim-assignment.component';
import { NgModule } from '@angular/core';
import { DoctorClaimsComponent } from './doctor/doctor-claims/doctor-claims.component';
import { BidPatientComponent } from './doctor/bid-patient/bid-patient.component';
import { DoctorBidsComponent } from './admin/doctor-bids/doctor-bids.component';
import { ApproveDoctorComponent } from './admin/approve-doctor/approve-doctor.component';
import { DoctorBidsClaimComponent } from './admin/doctor-bids-claim/doctor-bids-claim.component';

// import { RoleGuard } from '../tools/services/role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    // canActivate: [RoleGuard] ,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-claim', component: AddClaimComponent },
      { path: 'claim-list', component: ClaimListComponent },
      { path: 'approved', component: ApprovedClaimsComponent },
      { path: 'employee-claims', component: EmployeeClaimsComponent },
      { path: 'assign-claim', component: ClaimAssignmentComponent },
      { path: 'patient-claims', component: DoctorClaimsComponent },
      { path: 'set-prices', component: BidPatientComponent},
      { path: 'doctor-bids', component: DoctorBidsComponent},
      { path: 'approve-doctor', component: ApproveDoctorComponent},
      { path: 'doctor-claims', component: DoctorBidsClaimComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutes {}
