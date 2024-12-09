import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EventServiceService } from '../../Services/event-service.service';
import { EventDetails } from '../event/event';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrionAndLoginServiceService } from '../../Services/registrion-and-login-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css',
})
export class EventlistComponent {
  selectedFile: File | null = null;
  selectedFiles: File[] = [];
  isContentVisible: boolean = true;
  displayDialog: boolean = false;
  // clickedRowIndex!: number;
  QrCodeVisible: boolean = false;
  getdata: EventDetails[] = [];
  viewDataOfphotographer: EventDetails[] = [];
  uploading: boolean = false;

  isuploading: boolean = false;
  responseData: any;
  isLoadingMap: { [key: number]: boolean } = {};
  searchText: string = '';
  selectAll: boolean = false;
  searcheventName: string = '';
  searcheventAddress: string = '';
  searhMobileNumber: string = '';
  searhPassword: string = '';
  searchDate: string = '';
  editForm!: FormGroup;
  uploadphotos!: FormGroup;
  expandedRows: { [key: number]: boolean } = {};
  showOptions: boolean = false;
  private routeSub!: Subscription;
  isLoadingQRCode: { [key: string]: boolean } = {};

  constructor(
    private eventServiceService: EventServiceService,
    private formBuilder: FormBuilder,
    private registrionAndLoginServiceService: RegistrionAndLoginServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.routeSub = this.route.params.subscribe(params => {
    //   this.getEventData();
    // });
    this.getEventData();

    // this.getallPhotographerDetails();
    this.getCount();
    this.editForm = this.formBuilder.group({
      eventName: [null],
      eventAddress: [null],
      eventDate: [null],
      event_Id: [null],
    });

    this.uploadphotos = this.formBuilder.group({
      image: [null, Validators.required],
      event_Id: [null],
    });
  }

  // ngOnDestroy(): void {
  //   if (this.routeSub) {
  //     this.routeSub.unsubscribe();
  //   }
  // }
  getCount() {
    this.registrionAndLoginServiceService
      .getPhotographerId(localStorage.getItem('Id'))
      .subscribe(
        (data: any) => {
          this.responseData = data;
          this.getEventData();
          console.log(data, 'success');
        },

        (error) => {
          console.log(error, 'failure');
        }
      );
  }
  getEventData() {
    this.eventServiceService
      .getalleventListById(localStorage.getItem('Id'))
      .subscribe(
        (data: any) => {
          console.log(data.body, 'sucess data');
          this.getdata = data.body.map((event: any) => ({
            eventDate: event.eventDate,
            eventAddress: event.eventAddress,
            eventName: event.eventName,
            event_Id: event.event_Id,
            selected: false,
            qrCode: event.qrCode,
            isVaild:event.isvalid,
            events: [],
          }));
          console.log(this.getdata, 'Hloo world');
          this.viewDataOfphotographer = this.getdata.reverse();
          console.log(this.viewDataOfphotographer + 'view all data');
        
          this.filtereventName();
        },
        (error) => {
          console.error(error, 'error message');
        }
      );
  }

  filtereventName() {
    this.viewDataOfphotographer = this.getdata.filter((getdata) =>
      getdata.eventName
        .toLowerCase()
        .includes(this.searcheventName.toLowerCase())
    );
  }
  filterDate() {
    this.viewDataOfphotographer = this.getdata.filter((getdata) =>
      getdata.eventDate
        .toString()
        .toLowerCase()
        .includes(this.searchDate.toLowerCase())
    );
  }
  filtereventAddress() {
    this.viewDataOfphotographer = this.getdata.filter((getdata) =>
      getdata.eventAddress
        .toLowerCase()
        .includes(this.searcheventAddress.toLowerCase())
    );
  }

  toggleSelectAll() {
    this.viewDataOfphotographer.forEach(
      (getdata) => (getdata.selected = this.selectAll)
    );
  }
  overAllSerach() {
    this.viewDataOfphotographer = this.getdata.filter(
      (getdata) =>
        getdata.eventName
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        getdata.eventAddress
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        getdata.eventDate
          .toString()
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }
  // Add this variable in your component class
  currentlyEditingRow: number | null = null;

  onRowEditInit(viewDataOfphotographer: EventDetails, index: number) {
    console.log('Row edit initialized');
    if (this.currentlyEditingRow !== null) {
      return; // Prevent editing if another row is being edited
    }
    this.currentlyEditingRow = index;

    this.editForm.patchValue({
      eventName: viewDataOfphotographer.eventName,
      eventAddress: viewDataOfphotographer.eventAddress,
      eventDate: viewDataOfphotographer.eventDate,

      // Patch other form controls as needed
    });
  }
  onRowEditCancel(book: EventDetails, index: number) {
    console.log('Row edit cancelled');
    this.currentlyEditingRow = null;
  }

  onRowEditSave(viewDataOfphotographer: EventDetails) {
    const formData: FormData = new FormData();
    formData.append('eventName', this.editForm.get('eventName')?.getRawValue());
    formData.append(
      'eventAddress',
      this.editForm.get('eventAddress')?.getRawValue()
    );
    formData.append('eventDate', this.editForm.get('eventDate')?.getRawValue());

    const id = viewDataOfphotographer.event_Id;

    this.eventServiceService.updateDetails(id, formData).subscribe(
      (response) => {
        console.log('Data updated successfully', response);
        this.getEventData();
        Swal.fire({
          title: 'Data Edited saved successfully!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.getEventData();
          this.currentlyEditingRow = null;
        });
      },
      (error) => {
        let errorMessage = 'An unknown error occurred!';

        if (error.message) {
          errorMessage = error.error;
        }
        Swal.fire({
          title: 'please try again!',
          icon: 'error',
          text: errorMessage,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.getEventData();
          this.currentlyEditingRow = null;
        });
      }
    );
  }
  toggleSubItems(viewDataOfphotographer: EventDetails) {
    this.expandedRows[viewDataOfphotographer.event_Id] =
      !this.expandedRows[viewDataOfphotographer.event_Id];
  }
  deletePhotographer(id: number) {
    this.eventServiceService.delete(id).subscribe(
      (data) => {
        Swal.fire({
          title: 'Photographer deleted successfully',
          icon: 'success',
          text: 'Photographer deleted successfully',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.getEventData();
        });
        console.log('Photographer deleted successfully');
      },
      (error) => {
        console.error('Error deleting photographer:', error);
        Swal.fire({
          title: 'internal Server Error !',
          icon: 'error',
          text: 'internal Server Error !',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          this.getEventData();
        });
      }
    );
  }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = [];
    if (files && files.length > 0) {
      const allowedTypes = ['.png', '.jpg', '.jpeg'];
      const invalidFiles: File[] = [];

      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        const fileExtension = file.name.slice(
          ((file.name.lastIndexOf('.') - 1) >>> 0) + 2
        );

        if (!allowedTypes.includes('.' + fileExtension)) {
          invalidFiles.push(file);
        }
      }

      if (invalidFiles.length > 0) {
        // Handle invalid files
        invalidFiles.forEach((file) => {
          this.uploadphotos.get('image')?.setErrors({ invalidType: true });
        });
        this.selectedFiles = [];
      } else {
        this.selectedFiles = Array.from(files);
        this.uploadphotos.get('image')?.setErrors(null);
      }
    }
  }

  uploadPhotoss(id: number) {
    // this.isuploading=true;
    const formData: FormData = new FormData();
    //console.log(this.selectedFile, 'Hlojdkfshjk');
    if (this.selectedFiles.length > 0) {
      this.selectedFiles.forEach((file) => {
        formData.append('images', file);
      });
    }
    const eventDetails = this.getdata.find(
      (event: EventDetails) => event.event_Id === id
    );
    if (!eventDetails) {
      console.error('Event with provided ID not found');
      return;
    }

    const eventId = eventDetails.event_Id;
    // this.uploading = true;
    this.eventServiceService.UploadImges(eventId, formData).subscribe(
      (response) => {
        console.log('Data updated successfully', response);
        console.log(response, 'success response');
        Swal.fire({
          title: 'image is uploaded!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
        this.getEventData();
        this.getCount();
        const url = `photographerDashboard/eventlist/eventsimgess/${eventId}`;
        this.router.navigateByUrl(url);
        this.clickedRowIndex = null;
        this.uploading = false;
        // this.isuploading=false;
      },
      (error) => {
        let errorMessage = 'An unknown error occurred!';
        console.log(error.error, 'error response');

        if (error.message) {
          errorMessage = error.error;
        }
        Swal.fire({
          title: error.error.error,
          icon: 'error',
          text: error.error.message,
          timer: 2000,
          showConfirmButton: false,
        });
        // this.isuploading=false;
        this.clickedRowIndex = null;
        this.uploading = false;
      }
    );
  }
  clickedRowIndex: number | null = null;
  // clickedRowIndex!: number;
  onClickUploadIcon(index: number) {
    this.clickedRowIndex = index;

    this.uploading = true;
    console.log('uploading method' + this.uploading);
  }

  cancelUpload() {
    this.clickedRowIndex = null;
    this.uploading = false;
  }

  toggleContentVisibility(eventId: any): void {
    this.router.navigateByUrl(`/photographerDashboard/eventsimgess/${eventId}`);
  }

  toggleContentVisibilityOfRegisteredUser(eventId: any): void {
    // console.log("toggleContentVisibilityOfRegisteredUser method ");
    // this.isContentVisible = false;
    // console.log(this.isContentVisible+"------------this.isContentVisible");
    this.router.navigateByUrl(
      `/photographerDashboard/registeredUsers/${eventId}`
    );
  }

  selectedPhotographer: any;

  showDialog(photographer: any) {
    this.selectedPhotographer = photographer;
    this.displayDialog = true;
  }

  toggleOptions() {
    this.showOptions = true;
  }
  downloadQr(id: number, imageSize: string) {
    this.isLoadingQRCode[imageSize] = true;

    this.eventServiceService.downloadQr(id, imageSize).subscribe(
      (response) => {
        this.isLoadingQRCode[imageSize] = false;

        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrCode.png';
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        console.log('Data updated successfully', response);
        console.log(response, 'success response');
        this.QrCodeVisible = false;
        Swal.fire({
          title: 'QR downlaoded!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
        this.isLoadingQRCode[imageSize] = false;

        this.displayDialog = false;
      },
      (error) => {
        this.displayDialog = false;
        this.isLoadingQRCode[imageSize] = false;

        let errorMessage = 'An unknown error occurred!';
        console.log(error.error, 'error response');

        if (error.message) {
          errorMessage = error.error;
        }
        Swal.fire({
          title: 'internal Server Error !',
          icon: 'error',
          text: errorMessage,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    );
  }

  finalSubmit(eventId: any, rowIndex: number) {
    // Set loading state for the specific row
    this.isLoadingMap[rowIndex] = true;

    this.registrionAndLoginServiceService
      .sendMessageTowhatsapp(eventId)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Photos Send To Registred Users !',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            // Reset loading state for the specific row
            this.isLoadingMap[rowIndex] = false;
          });
        },
        (error) => {
          let errorMessage = 'An unknown error occurred!';
          if (error.status === 404) {
            errorMessage = 'Resource not found!';
          } else if (error.status === 500) {
            errorMessage = 'Internal server error!';
          } else if (error.message) {
            errorMessage = error.message;
          }
          Swal.fire({
            title: error.error.error,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            // Reset loading state for the specific row
            this.isLoadingMap[rowIndex] = false;
          });
        }
      );
  }
}
