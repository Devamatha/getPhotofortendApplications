import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistrionAndLoginServiceService } from '../../Services/registrion-and-login-service.service';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login!: FormGroup;
  isLoading = false;
  passwordVisible: boolean = false; // Add this line
  constructor(
    private formBuilder: FormBuilder,
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      emailOrMobileNumber: [
        null,
        [Validators.required, this.emailOrMobileValidator],
      ],
      password: [null, Validators.required],
    });
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById(
      'floatingPassword'
    ) as HTMLInputElement;
    if (this.passwordVisible) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  emailOrMobileValidator(control: AbstractControl) {
    const value = control.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|org\.com)$/;
    const mobilePattern = /^[91]+[6-9]\d{9}$/;

    if (value && !(emailPattern.test(value) || mobilePattern.test(value))) {
      return { invalidEmailOrMobile: true };
    }
    return null;
  }
  onSubmit() {
    if (this.login.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Are you surely want to submit the Details ?',
        text: 'Are you surely want to submit the Details ?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          const payload = {
            password: this.login.get('password')?.getRawValue(),
            username: this.login.get('emailOrMobileNumber')?.getRawValue(),
          };
          this.registrionAndLoginServiceService.login(payload).subscribe(
            (response) => {
              console.log(response);
              console.log(response.role, 'Role Of Admin');
              window.sessionStorage.setItem("Authorization",
                response.jwtToken);
              
              Swal.fire({
                title: 'Login successfully!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
              }).then(() => {
                this.isLoading = false;
                this.login.reset();
                localStorage.setItem('UserName', response.fullName);
                localStorage.setItem('Id', response.id);
                localStorage.setItem('clientId', response.clientId);

                if (response.role !== null && response.role === 'ROLE_ADMIN') {

                  this.router.navigateByUrl('dashboard');
                } else if (
                  response.role !== null &&
                  response.role === 'ROLE_PHOTOGRAPHER'
                ) {

                  this.router.navigateByUrl('photographerDashboard');
                } else {
                  console.log('He is not admin and photographer');
                }
              });
            },
            (error) => {
              console.log(error);

              this.isLoading = false;

              //   let errorMessage = 'An unknown error occurred!';
              //   if (error.status === 404) {
              //     errorMessage = 'Resource not found!';
              //   } else if (error.error && error.error.error) {
              //     errorMessage = error.error.error;
              //   } else if (error.status === 500) {
              //     errorMessage =
              //       'please check your EmailOrMobileNumber and Password';
              //   } else if (error.message) {
              //     errorMessage = error.message;
              //   }
              //   this.isLoading = false;
              Swal.fire({
                title: error.error.message,
                text: error.error.message,
                icon: 'error',
                showConfirmButton:true
              });
            }
          );
        } else if (result.isDenied) {
          this.isLoading = false;
        }
      });
    } else {
      this.showValidationError();
    }
  }

  showValidationError() {
    let missingFields = '';

    for (let controlName in this.login.controls) {
      let control = this.login.get(controlName);
      if (control?.invalid) {
        const fieldName =
          controlName.charAt(0).toUpperCase() + controlName.slice(1);
        missingFields += `<span style="color: red;">${fieldName}</span>, `;
      }
    }

    missingFields = missingFields.slice(0, -2);

    Swal.fire({
      icon: 'error',
      text: 'Missing Fields',
      html: `Please enter valid details for the following fields: ${missingFields}`,
      showCancelButton: true,
    });
  }
}
