import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headersidenav',
  templateUrl: './headersidenav.component.html',
  styleUrl: './headersidenav.component.css'
})
export class HeadersidenavComponent {
  toggleNavbar = true;
  username: any;
  constructor(

    private router: Router,
    private ngZone: NgZone
  ) { }
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
  // logout() {
  //   const confirmation = confirm('Do you want to logout');
  //   if (confirmation) {
  //     localStorage.removeItem('UserName');
  //     localStorage.removeItem('photographer_Id');
  //     localStorage.removeItem('adminId');
  //     localStorage.clear();
  //     sessionStorage.clear();
  //   }
  // }

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
