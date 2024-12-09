import { Component, NgZone } from '@angular/core';
import { EventServiceService } from '../Services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RegistrionAndLoginServiceService } from '../Services/registrion-and-login-service.service';
import { EventDetails } from '../event/event/event';

@Component({
  selector: 'app-photographerdashboard-design',
  templateUrl: './photographerdashboard-design.component.html',
  styleUrl: './photographerdashboard-design.component.css'
})
export class PhotographerdashboardDesignComponent {
  getdata: EventDetails[] = [];
  getdataDetails: any;

  viewDataOfphotographer: EventDetails[] = [];
  constructor(
    private eventServiceService: EventServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
   
    //this.getEventData();
  }

  getEventData() {
    this.eventServiceService
      .getalleventList(localStorage.getItem('Id'))
      .subscribe(
        (data: any) => {
          console.log(data, "sucess data");
          console.log(data.email, "sucess data");
          console.log(data.event, "sucess data");

          if(data.event){
            console.log(data.event[0].eventName, "sucess data");
            console.log(data.event[0].totalImages, "total data");

          }
          this.getdataDetails=data.fullName;
          this.getdata = data.event.map((event: any) => ({
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
