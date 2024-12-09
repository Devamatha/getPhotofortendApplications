import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventServiceService } from '../Services/event-service.service';

@Component({
  selector: 'app-plans-creation',
  templateUrl: './plans-creation.component.html',
  styleUrl: './plans-creation.component.css'
})
export class PlansCreationComponent {

    planform!: FormGroup;
    isLoading = false;
    minDate?:string;
  
    constructor(
      private eventServiceService: EventServiceService,
      private formBuilder: FormBuilder,
      private router: Router
    ) {
  
      
    }
    ngOnInit(): void {
      this.planform = this.formBuilder.group({
        planType: [null, Validators.required],
        amount: [null, Validators.required],
        totalImages: [null, Validators.required],
      
        discription: [null, Validators.required],
        additionalFeatures: [null, Validators.required],
        Id: [localStorage.getItem('Id')]
      });
  
    }
    onSubmit() {
      if (this.planform.valid) {
        Swal.fire({
          icon: 'success',
          title: 'Are you surely want to create  the Event ?',
          text: 'Are you surely want to create  the Event ?',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Submit',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            this.isLoading = true;
  
            const planData = {
              planType: this.planform.get('planType')?.getRawValue(),
              totalImages: this.planform.get('totalImages')?.getRawValue(),
              amount: this.planform.get('amount')?.getRawValue(),
              additionalFeatures: this.planform.get('additionalFeatures')?.getRawValue(),
              discription: this.planform.get('discription')?.getRawValue(),
            };

            const Id =this.planform.get('Id')?.getRawValue();
  
            this.eventServiceService
              .addplan(Id,planData)
              .subscribe(
                (response) => {
                  console.log(response);
                  Swal.fire({
                    title: 'Plan Created Successfully!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                  }).then(() => {
                    this.isLoading = false;
                    this.planform.reset();
                    // this.router.navigateByUrl("admin-homepage/listcandidates");
                  });
                },
                (error) => {
                  // Error callback
                  console.log(error.error.error,"error")
                  let errorMessage = 'An unknown error occurred!';
                  if (error.status === 404) {
                    errorMessage = 'Resource not found!';
                  } else if (error.status === 500) {
                    errorMessage = 'Internal server error!';
                  } else if (error.message) {
                    errorMessage = error.message;
                  }
                  this.isLoading = false;
                  Swal.fire({
                    title: error.error.error,
                    icon: 'error',
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
  
      for (let controlName in this.planform.controls) {
        let control = this.planform.get(controlName);
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

