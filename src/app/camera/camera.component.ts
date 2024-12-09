import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { RegistrionAndLoginServiceService } from '../Services/registrion-and-login-service.service';
import * as faceapi from 'face-api.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  faceCapturing!: FormGroup;
  isLoading = false;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  public webcamImage: WebcamImage | null = null;
  imageCaptured: boolean = false; // Flag to check if an image is already captured
  captureInterval: any;  // To store the setInterval reference

  constructor(
    private formBuilder: FormBuilder,
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.faceCapturing = this.formBuilder.group({
      // fullName: [null, Validators.required],
      image: [null, Validators.required],
      userId: [localStorage.getItem('userId')],
    });
    this.startAutomaticCapture();

    // Load face-api.js models
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');

    // Start automatic capture
  }

  // Function to start automatic image capture
  startAutomaticCapture() {
    this.captureInterval = setInterval(() => {
      if (!this.imageCaptured) {
        this.triggerSnapshot();
      }
    }, 1000);  // Capture every second
  }

  // Function to stop the automatic image capture
  stopAutomaticCapture() {
    if (this.captureInterval) {
      clearInterval(this.captureInterval);
    }
  }

  snapshot(event: WebcamImage) {
    this.previewImage = event.imageAsDataUrl;
  }

  captureImage() {
    this.trigger.next();
  }

  private async detectFaces(image: Blob): Promise<number> {
    const img = await faceapi.bufferToImage(image);
    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
    return detections.length;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.saveImageToDatabase(webcamImage.imageAsDataUrl);
  }

  async saveImageToDatabase(imageBase64: string) {
    const blob = this.dataURItoBlob(imageBase64);
    
    const facesCount = await this.detectFaces(blob);

    if (facesCount === 1) {
      this.imageCaptured = true; 
      this.stopAutomaticCapture();  
      const formData = new FormData();
      formData.append('image', blob, 'image.jpeg');
      // formData.append('fullName', this.faceCapturing.get('fullName')?.getRawValue());
      const Id = this.faceCapturing.get('userId')?.getRawValue();

      this.isLoading = true;
     
      this.registrionAndLoginServiceService.faceCapturing(Id, formData).subscribe(
        (response) => {
          this.isLoading = false;
          Swal.fire({
            title: 'Data saved successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            this.router.navigateByUrl('/');
          });
        },
        (error) => {
          this.imageCaptured = false;  

          this.isLoading = false;
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while sending the request',
            icon: 'error',
          });
        }
      );
    } else if (facesCount > 1) {
      this.imageCaptured = false; 
      this.isLoading = false;

      Swal.fire({
        title: 'Multiple faces detected!',
        text: 'Please ensure there is only one face in the image.',
        icon: 'warning',
      });
      
      // Retry if multiple faces are found
    } else {
      this.imageCaptured = false; 
      this.isLoading = false;

    
     // Retry if no face is detected
    }
  }

  // Helper function to convert Base64 to Blob
  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }


  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      alert("Camera access was not allowed by user!");
    }
  }
}