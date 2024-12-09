import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { EventComponent } from './event/event/event.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { authGuard } from './auth.guard';
import { CreatePhotographerComponent } from './createPhotographer/create-photographer/create-photographer.component';
import { PhotographerDashboardComponent } from './photographerDashboard/photographer-dashboard/photographer-dashboard.component';
import { PlansComponent } from './plans/plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ForgotComponent } from './forgot/forgot/forgot.component';
import { OtpComponent } from './otp/otp/otp.component';
import { ChangepasswordComponent } from './changepassword/changepassword/changepassword.component';
import { PhotographersListComponent } from './createPhotographer/photographers-list/photographers-list.component';
import { EventlistComponent } from './event/eventlist/eventlist.component';
import { EventsimgessComponent } from './event/eventsimgess/eventsimgess.component';
import { WhatsappotpComponent } from './whatsappotp/whatsappotp.component';
import { PhotographerPlansComponent } from './plans/photographer-plans/photographer-plans.component';
import { PlanRegistrationComponent } from './plans/plan-registration/plan-registration.component';
import { CameraComponent } from './camera/camera.component';
import { IamgeViewComponent } from './iamge-view/iamge-view.component';
import { RegistredUsersComponent } from './event/registred-users/registred-users.component';
import { FaceCapturingComponentComponent } from './face-capturing-component/face-capturing-component.component';
import { PhotographerdashboardDesignComponent } from './photographerdashboard-design/photographerdashboard-design.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PlansCreationComponent } from './plans-creation/plans-creation.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'miss', component: ContactUsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'photodesign', component:PhotographerdashboardDesignComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'termsConditions', component: TermsConditionsComponent},
 {path:'whatsappPage/:id',component: WhatsappotpComponent },
 {path:'privacyPolicy',component: PrivacyPolicyComponent },
 {
  path:'imagesview',component:IamgeViewComponent
 },

  { path: 'forgot', component: ForgotComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'camera', component: CameraComponent},
  {path:'face',component: FaceCapturingComponentComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'photographerlist', component: PhotographersListComponent },
      { path: 'plansCreation', component: PlansCreationComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      {path:'plansRegistration',component:PlanRegistrationComponent,
    children:[
      { path: 'createphotographer', component: CreatePhotographerComponent },

    ]
    
    }
    ],
  },

  {path: 'photographerDashboard',
  component: PhotographerdashboardDesignComponent},
  {
    path: 'photographerDashboard',
    component: PhotographerdashboardDesignComponent,
    canActivate: [authGuard],
    children: [
      { path: 'createevent', component: EventComponent },
      {
        path: 'changepasswordphotographer',
        component: ChangepasswordComponent,
      },
      { path: 'eventsimgess/:id',component:EventsimgessComponent},
        { path: 'registeredUsers/:id', component: RegistredUsersComponent },
        { path: 'dashboardlayout', component: DashboardLayoutComponent },
      
      {
        path: 'eventlist',
        component: EventlistComponent,
        
        // children: [{ path: 'eventsimgess/:id',component:EventsimgessComponent},
        // { path: 'registeredUsers/:id', component: RegistredUsersComponent } 
       // ]
        
      },

      { path: 'plansphotographer', component: PhotographerPlansComponent },

     
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash:false
    }
),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
