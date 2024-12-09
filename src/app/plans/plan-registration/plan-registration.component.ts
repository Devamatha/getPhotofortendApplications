import { Component } from '@angular/core';
import { EventServiceService } from '../../Services/event-service.service';

@Component({
  selector: 'app-plan-registration',
  templateUrl: './plan-registration.component.html',
  styleUrl: './plan-registration.component.css',
})
export class PlanRegistrationComponent {
  responseData: any[]=[];
  constructor(private eventServiceService: EventServiceService) {}
  adminId = localStorage.getItem('Id');
  ngOnInit(): void {
    this.getallData();
  }
  getallData() {
    this.eventServiceService
      .getallplansByAdminId()
      .subscribe((data: any) => {
        console.log(data.body, "sucess data");
        this.responseData = data.body;
        console.log(this.responseData,"responseData");
      });
  }
}
