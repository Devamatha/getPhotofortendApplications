import { HttpClient} from '@angular/common/http';
import{ HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

import { RegistrionAndLoginServiceService } from '../Services/registrion-and-login-service.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-whatsappotp',
  templateUrl: './whatsappotp.component.html',
  styleUrl: './whatsappotp.component.css',
})
export class WhatsappotpComponent {
  whatsauthetication!: FormGroup;
  eventId!: number;
  otp: boolean = false;
  verify: boolean = true;
  isLoading = false;
  isVerifyingOtp: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.whatsauthetication = this.formBuilder.group({
      number: [null, [Validators.required, this.validateWhatsAppNumber]],
      body: [null, Validators.required],
      fullName: [null, Validators.required]
    });
    this.route.params.subscribe((params) => {
      this.eventId = +params['id'];
      //console.log('eventId' + this.eventId);
      //console.log('params: ', params);
    });
  }
  number: string = '';
  statusmessage: any;

  validateWhatsAppNumber(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const whatsappNumber = control.value;
    if (
      !whatsappNumber ||
      !whatsappNumber.startsWith('91') ||
      !/^\d{12}$/.test(whatsappNumber)
    ) {
      return { invalidWhatsAppNumber: true };
    }
    return null;
  }

  async verifyWhatsAppNumber(number: string) {
    this.isLoading = true;
    const url =
      'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-rapidapi-host': 'whatsapp-number-validator3.p.rapidapi.com',
      'x-rapidapi-key': 'b67ea09343mshc9347fced5fafd1p170d30jsn87a8ba147287',
    });

    const body = { phone_number:"91" +this.whatsauthetication.get('number')?.value };

    try {
      const response = await firstValueFrom(
        this.http.post(url, body, { headers, responseType: 'text' })
      );
      console.log(headers+"headers");
      console.log(response, 'response');
      const parsedResponse = response ? JSON.parse(response) : null;

      console.log(parsedResponse, 'parsedResponse');

      if (parsedResponse && parsedResponse.status === 'valid') {
        // Swal.fire({
        //   title: 'Success!',
        //   text: 'Valid WhatsApp Number',
        //   icon: 'success'
        // });

        this.isLoading = false;

        this.smsMethod();
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid WhatsApp Number',
          icon: 'error',
        });
        this.isLoading = false;

      }
    } catch (error) {
      this.isLoading = false;

      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while verifying the WhatsApp number',
        icon: 'error',
      });
    }
  }
  validateNumber() {

   const phone_number="91" +this.whatsauthetication.get('number')?.value ;

    if (phone_number) {
      this.registrionAndLoginServiceService.validatePhoneNumber(phone_number)
        .subscribe(
          (response) => {
            console.log(response+"response");
            //this.validationResponse = response;
          },
          (error) => {
            console.error(error);
           // this.validationResponse = { error: 'Validation failed!' };
          }
        );
    } else {
      alert('Please enter a phone number.');
    }
  }


  // async verifyWhatsAppNumber(number: string) {
  //   this.isLoading = true;

  //   const url =
  //     'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken';
  //   const headers = new HttpHeaders({
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': 'f5c2beb046msh8df3c25268b0868p15d9d9jsnb95e09cbeb5c',
  //     'X-RapidAPI-Host': 'whatsapp-number-validator3.p.rapidapi.com',
  //   });

  //   const body = { phone_number: this.whatsauthetication.get('number')?.value };

  //   try {
  //     const response = await this.http
  //       .post(url, body, { headers, responseType: 'text' })
  //       .toPromise();
  //     console.log(response, "response");
  //     const parsedResponse = response ? JSON.parse(response) : null;

  //     console.log(parsedResponse, "parsedResponse");

  //     if (parsedResponse && parsedResponse.status === 'valid') {
  //       // Swal.fire({
  //       //   title: 'Success!',
  //       //   text: 'Valid WhatsApp Number',
  //       //   icon: 'success'
  //       // });

  //      this.isLoading = false;

  //       this.smsMethod()
  //     } else {
  //       Swal.fire({
  //         title: 'Error!',
  //         text: 'Invalid WhatsApp Number',
  //         icon: 'error'
  //       });
  //     }

  //   } catch (error) {
  //  this.isLoading = false;

  //     console.error(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'An error occurred while verifying the WhatsApp number',
  //       icon: 'error'
  //     });
  //   }
  // }

  onVerifyButtonClick(number: string) {
    this.verifyWhatsAppNumber(number);
   // this.smsMethod();

  }

  smsMethod() {
    const number = this.whatsauthetication.get('number')?.value;
    const formattedNumber = number.startsWith('91')
      ? number.substring(2)
      : number;
    const formData: FormData = new FormData();
    formData.append('number', formattedNumber);
    console.log(formattedNumber + 'formattedNumber');
    this.registrionAndLoginServiceService
      .smsSending(formattedNumber, this.eventId)
      .subscribe(
        (response) => {
          console.log(response);
          Swal.fire({
            title: 'otp send succesfully  ' + formattedNumber,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            this.otp = true;
            this.verify = false;
            //this.router.navigateByUrl('/camera');
          });
        },
        (error) => {
          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending the request',
            icon: 'error',
          });
        }
      );
  }

  verifyOtp() {
    this.isVerifyingOtp=true;
    const formData: FormData = new FormData();
    const number = this.whatsauthetication.get('number')?.value;

    const formattedNumber = number.startsWith('91')
      ? number.substring(2)
      : number;
    formData.append('number', formattedNumber);
    formData.append('fullName', this.whatsauthetication.get('fullName')?.value)
    formData.append('body', this.whatsauthetication.get('body')?.getRawValue());
    this.registrionAndLoginServiceService
      .validateOtp(this.eventId, formData)
      .subscribe(
        (response) => {
          this.isVerifyingOtp=false;
          console.log(response);
          localStorage.setItem('userId', response.userId);

          Swal.fire({
            title: 'Please keep the camera straight on your face',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            this.router.navigateByUrl('/camera');
          });
        },
        (error) => {
          this.isVerifyingOtp=false;

          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending the request',
            icon: 'error',
          });
        }
      );
  }
}
