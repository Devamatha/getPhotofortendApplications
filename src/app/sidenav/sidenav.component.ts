import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(

    private router: Router
  ) { }
  logout() {
    const confirmation = confirm('Do you want to logout');
    if (confirmation) {
      localStorage.removeItem('UserName');
      localStorage.removeItem('photographer_Id');
      localStorage.removeItem('adminId');
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
  }
}
