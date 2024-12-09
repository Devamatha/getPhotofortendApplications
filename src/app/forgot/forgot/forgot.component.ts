import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { RegistrionAndLoginServiceService } from '../../Services/registrion-and-login-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  getallData: any;
  forgetPasswordFormGroup!: FormGroup;
  loading: boolean = false;
  constructor(
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.forgetPasswordFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, this.emailDomainValidator]],


      Id: [null],
    });
  }


  emailDomainValidator(control: AbstractControl) {
    const email = control.value;
    if (email && !email.match(/@gmail\.com$|@org\.com$/)) {
      return { invalidDomain: true };
    }
    return null;
  }
  
 
  submit() {
    if (this.forgetPasswordFormGroup.valid) {
      Swal.fire({
        title: 'Are you surely want to ressend the Password',
        text: 'Are you surely want to ressend the Password',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          const formData: FormData = new FormData();
          formData.append(
            'email',
            this.forgetPasswordFormGroup.get('email')?.getRawValue()
          );
        

          this.registrionAndLoginServiceService
            .forgotPassword(formData)
            .subscribe((result) => {
              this.loading = false;

              Swal.fire({
                title: 'Your New Password Send To Your Registred Email',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
              })
            },
            (error) => {
              this.loading = false;

              Swal.fire({
                title: 'Please Enter Your Registred Email ?',
                icon: 'error',
                timer: 2000,
                showConfirmButton: false,
              })
            }
            );
        } else if (result.isDenied) {
          console.log('result is denied');
        }
      });
    } else {
      this.showValidationError();
    }
  }
  showValidationError() {
    let missingFields = '';

    for (let controlName in this.forgetPasswordFormGroup.controls) {
      let control = this.forgetPasswordFormGroup.get(controlName);
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
    });
  }
}
