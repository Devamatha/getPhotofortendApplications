import { Component, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetails } from '../event/event/event';
import { EventServiceService } from '../Services/event-service.service';
import { RegistrionAndLoginServiceService } from '../Services/registrion-and-login-service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {
  getdata: EventDetails[] = [];
  getdataDetails: any;

  viewDataOfphotographer: EventDetails[] = [];
  constructor(
    private eventServiceService: EventServiceService,
    private formBuilder: FormBuilder,
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
   
    this.getEventData();
    this.getCount();
  }

  getEventData() {
    this.eventServiceService
      .getalleventListById(localStorage.getItem('Id'))
      .subscribe(
        (data: any) => {
          console.log(data.body, "sucess data");
          console.log(data.email, "sucess data");
          console.log(data.event, "sucess data");

          if(data.event){
            console.log(data.body.event[0].eventName, "sucess data");
            console.log(data.body.event[0].totalImages, "total data");

          }
          this.getdataDetails=localStorage.getItem('UserName');
          this.getdata = data.body.map((event: any) => ({
            eventDate: event.eventDate,
            eventAddress: event.eventAddress,
            eventName: event.eventName,
            event_Id: event.event_Id,
            totalImages:event.totalImages,
            selected: false,
            qrCode: event.qrCode,
            events: [],
          }));
          console.log(this.getdata, 'Hloo world');
          this.viewDataOfphotographer = this.getdata.reverse();
          console.log(this.viewDataOfphotographer+ 'view all data');

        },
        (error) => {
          console.error(error, 'error message');
        }
      );
  }

  responseData: any;
  getCount() {
    this.registrionAndLoginServiceService
      .getPhotographerId(localStorage.getItem('Id'))
      .subscribe(
        (data: any) => {
          this.responseData = data;
          this.getEventData();
          console.log(data, 'success');
        },

        (error) => {
          console.log(error, 'failure');
        }
      );
  }
  toggleNavbar = true;
  username: any;
  // constructor(private router: Router, private ngZone: NgZone) {}
  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.username = localStorage.getItem('UserName');
          console.log("Hello")
        });
      }, 0);
    });
  }

  dashboard() {
    const body = document.querySelector('body') as HTMLBodyElement;
    const sidebar = body.querySelector('nav') as HTMLElement;
    const toggle = body.querySelector('.toggle') as HTMLElement;
    const searchBtn = body.querySelector('.search-box') as HTMLElement;
    const modeSwitch = body.querySelector('.toggle-switch') as HTMLElement;
    const modeText = body.querySelector('.mode-text') as HTMLElement;

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close');
    });

    modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        modeText.innerText = 'Light mode';
        console.log('fail');
      } else {
        modeText.innerText = 'Dark mode';
        console.log('succes');
      }
    });
  }
  logout() {
    const confirmation = confirm('Do you want to logout');
    if (confirmation) {
      localStorage.removeItem('UserName');
      localStorage.removeItem('photographer_Id');
      localStorage.removeItem('adminId');
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
