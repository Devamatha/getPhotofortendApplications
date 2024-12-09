import { Component } from '@angular/core';
import { EventServiceService } from '../Services/event-service.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
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
       // console.log(data.body+"data");                                    
        this.responseData = data.body;
       // console.log(this.responseData,"responseData");
      });
  }
}
