export class EventDetails{
    eventDate!:Date;
    eventAddress!:string;
    eventName!:string;
    event_Id:any;
    qrCode:any;
    selected!: boolean;
    events: Event[];
    eventId:any;
    totalImages!:number;
    images!: Images[]; // Add the images array here

  constructor() {
    this.events = [];
  }
  photographer_Id:any;
  fullName!:string;

}
export interface Event {
    eventDate: Date;
    eventAddress: string;
    eventName: string;
    event_Id: any;
    eventId:any;
  }
  export interface Images {
    type: string;
    image: string;
    id: number;
  }
  