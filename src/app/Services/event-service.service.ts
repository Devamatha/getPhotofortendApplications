import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { EventDetails } from '../event/event/event';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor(private http: HttpClient) {}
  addEvent(Id: any, candidate: FormData): Observable<HttpResponse<EventDetails>> {
    return this.http.post<EventDetails>(
      `${environment.apiUrl}event/save/${Id}`,
      candidate,
      { responseType: 'json',observe: 'response',withCredentials: true  }
    );
  }
  getalleventList(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}photographer/get/${id}`,{ observe: 'response',withCredentials: true });
  }
  getalleventListById(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}photographer/eventslist/${id}`,{ observe: 'response',withCredentials: true });
  }
  viewImagesSend(userId: any, eventId: any): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}otp/compare/${userId}/${eventId}`,{ observe: 'response',withCredentials: true }
    );
  }
  updateDetails(id: any, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}event/update/${id}`, formData,{ observe: 'response',withCredentials: true });
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}event/delete/${id}`, {
      responseType: 'text',
      observe: 'response',withCredentials: true 
    });
  }

  UploadImges(Id: any, candidate: FormData): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}images/upload/${Id}`,
      candidate,
      { responseType: 'json',observe: 'response',withCredentials: true  }, 
    );
  }

  getallImagesByEvent(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}event/event/${id}`,{ observe: 'response',withCredentials: true });
  }

  deleteimgaeList(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}images/delete/${id}`,{ observe: 'response',withCredentials: true });
  }

  downloadQr(id: any, imageSize: any): Observable<Blob> {
    return this.http.get(
      `${environment.apiUrl}event/${id}/qr-code/${imageSize}`,
      { responseType: 'blob' }
    );
  }

  addplan(Id: any, candidate: any): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}plan/save/${Id}`,
      candidate,{ observe: 'response',withCredentials: true }
    );
  }

  getallplansByIds(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}clients/plan/${id}`,{ observe: 'response',withCredentials: true });
   }

  getallplansByAdminId(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}plan/getAll`,{ observe: 'response',withCredentials: true });
   }
}
