import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { applicationForm } from '../registration/registration/applicationForm';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegistrionAndLoginServiceService {
  constructor(private http: HttpClient) {}
  //photographer Registration Method
  addApplicationForm(

    candidate: FormData
  ): Observable<applicationForm> {
    return this.http.post<applicationForm>(
      `${environment.apiUrl}clients/registrationPhotographer`,
      candidate,
      { responseType: 'json' }
    );
  }
  // admin and Photographer login
  login(candidate: any): Observable<applicationForm> {
    return this.http.post<applicationForm>(
      `${environment.apiUrl}clients/login`,
      candidate,
      { responseType: 'json' }
    );
  }
  generateOderId(subscriptionPlan: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}save/oderId`,
      subscriptionPlan,
      { responseType: 'json' }
    );
  }
  

  getallphotographerList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}photographer/getall`);
  }

  getallphotographerListById(): Observable<any> {
    return this.http.get(`${environment.apiUrl}clients/photoGrapher`);
  }
  //update photographer Details
  updateDetails(id: any, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}photographer/update/${id}`, formData);
  }

  updatePlanDetails(id: any, formData: FormData): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}photographer/UpgradeSubscriptionPlan/${id}`,
      formData
    );
  }

  //delete photographer Details
  deletePhotographer(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}photographer/delete/${id}`, {
      responseType: 'text',
    });
  }

  //Change Password
  chnagePassword(id: any, formData: FormData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}clients/changepassword/${id}`,
      formData
    );
  }
  PhotographerchnagePassword(id: any, formData: FormData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}photographer/changepassword/${id}`,
      formData
    );
  }
  faceCapturing(id: any, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}users/upload/${id}`, formData);
  }
  //forgot Password
  forgotPassword(formData: FormData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}clients/forgotPassword`,
      formData
    );
  }
 

  //getById MEthod For Phototgrapher
  getbyPhotographerId(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}photographer/get/${id}`);
  }
  getPhotographerId(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}photographer/image-count/${id}`);
  }

  smsSending(phoneNumber: string, eventId: any): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    const body = {
      number: phoneNumber,
    };

    return this.http.post(
      `${environment.apiUrl}users/envirollment/${eventId}`,
      body,
      { headers }
    );
  }
  validateOtp(id: any, formData: FormData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}users/validating/${id}`,
      formData
    );
  }

  getallrigistredList(photographer_Id: any): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}event/listregisterUsers/${photographer_Id}`
    );
  }

  //send images to whatsapp number

  sendMessageTowhatsapp(eventId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}images/compare/${eventId}`);
  }

  getbyIdSubscription(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}photographer/getById/${id}`);
  }

  private apiUrl = 'https://gmail-checker4.p.rapidapi.com/GmailCheck';
  private apiKey = 'f5c2beb046msh8df3c25268b0868p15d9d9jsnb95e09cbeb5c';
  private apiHost = 'gmail-checker4.p.rapidapi.com';


  validateEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}?email=${email}`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    });

    return this.http.get(url, { headers, responseType: 'text' });
  }


  private apiUrlDetails = 'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken';
  private apiKeyDetails = 'b67ea09343mshc9347fced5fafd1p170d30jsn87a8ba147287';
  validatePhoneNumber(phoneNumber: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': 'whatsapp-number-validator3.p.rapidapi.com',
      'X-RapidAPI-Key': this.apiKeyDetails
    });

    const body = {
      phone_number: phoneNumber
    };

    return this.http.post(this.apiUrlDetails, body, { headers });
  }
}
