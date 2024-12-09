import { Component } from '@angular/core';
import { RegistrionAndLoginServiceService } from '../../Services/registrion-and-login-service.service';
import { usersDTO } from './usersDTO';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registred-users',
  templateUrl: './registred-users.component.html',
  styleUrl: './registred-users.component.css',
})
export class RegistredUsersComponent {
  getdata: usersDTO[] = [];
  viewDataOfUsers: usersDTO[] = [];
  searchText: string = '';
  searchFullName: string = '';
  searhMobileNumber: string = '';
  searchEventName: string = '';
  searchDate: string = '';
  searcheventAddress: string = '';
  isLoading = false;

  constructor(
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private route: ActivatedRoute,

  ) {}

  ngOnInit() {

    this.route.params.subscribe((params) => {
      const eventId = params['id'];
      this.getallregistreList(eventId);
    });
    // this.getallregistreList();
  }

  getallregistreList(id: any) {
    this.registrionAndLoginServiceService
      .getallrigistredList(id)
      .subscribe((data) => {
        this.getdata = data.reverse();
        this.viewDataOfUsers = this.getdata;
      });
  }

  overAllSerach() {
    this.viewDataOfUsers = this.getdata.filter(
      (getdata) =>
        getdata.fullName
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        getdata.eventName
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        getdata.number
          .toString()
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        getdata.eventAddress
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }

  filterFullName() {
    this.viewDataOfUsers = this.getdata.filter((getdata) =>
      getdata.fullName.toLowerCase().includes(this.searchFullName.toLowerCase())
    );
  }

  filterMobileNumber() {
    this.viewDataOfUsers = this.getdata.filter((getdata) =>
      getdata.number
        .toString()
        .toLowerCase()
        .includes(this.searhMobileNumber.toLowerCase())
    );
  }

  filterEventName() {
    this.viewDataOfUsers = this.getdata.filter((getdata) =>
      getdata.eventName
        .toLowerCase()
        .includes(this.searchEventName.toLowerCase())
    );
  }

  filterEventAddress() {
    this.viewDataOfUsers = this.getdata.filter((getdata) =>
      getdata.eventAddress
        .toLowerCase()
        .includes(this.searcheventAddress.toLowerCase())
    );
  }
  filterDate() {
    this.viewDataOfUsers = this.getdata.filter((getdata) =>
      getdata.registredDate
        .toString()
        .toLowerCase()
        .includes(this.searchDate.toLowerCase())
    );
  }
 
}
