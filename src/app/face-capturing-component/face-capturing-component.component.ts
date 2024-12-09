import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { RegistrionAndLoginServiceService } from '../Services/registrion-and-login-service.service';
import * as faceapi from 'face-api.js';  // Import face-api.js

@Component({
  selector: 'app-face-capturing-component',
  templateUrl: './face-capturing-component.component.html',
  styleUrl: './face-capturing-component.component.css'
})
export class FaceCapturingComponentComponent implements OnInit{
  faceCapturing!: FormGroup;
  isLoading = false;
  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';
  eventId!: number;

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(private formBuilder: FormBuilder, private registrionAndLoginServiceService: RegistrionAndLoginServiceService, private route: ActivatedRoute) {

  }
  async ngOnInit() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');
  }
  captureImage() {
    this.trigger.next();
  }
  onSubmit() {
    this.isLoading = true;
    this.captureImage();

    const formData: FormData = new FormData();
    formData.append('fullName', this.faceCapturing.get('fullName')?.getRawValue());

    const dataURLtoBlob = (dataURL: string) => {
      const byteString = atob(dataURL.split(',')[1]);
      const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };

    const imageBlob = dataURLtoBlob(this.previewImage);
    const imageFile = new File([imageBlob], 'image.jpeg', { type: 'image/jpeg' });
    formData.append('image', imageFile);

    this.detectFaces(imageBlob).then((facesCount) => {
      this.isLoading = false;

      if (facesCount > 1) {
        Swal.fire({
          title: 'Multiple faces detected!',
          text: 'Please upload an image with only one face.',
          icon: 'warning',
        });
      } else {
        this.saveData(formData);
      }
    }).catch((error) => {
      this.isLoading = false;
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while detecting faces',
        icon: 'error',
      });
    });
  }

  private async detectFaces(image: Blob): Promise<number> {
    const img = await faceapi.bufferToImage(image);
    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
    return detections.length;
  }

  private saveData(formData: FormData) {
    const Id = this.faceCapturing.get('userId')?.getRawValue();
    this.registrionAndLoginServiceService.faceCapturing(Id, formData).subscribe(
      (response) => {
        Swal.fire({
          title: 'Data saved successfully!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
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
}
