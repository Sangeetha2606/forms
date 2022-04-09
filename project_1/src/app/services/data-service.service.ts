import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public message1:string ="Welcome to ALLU GROUP";
  private messageSource = new BehaviorSubject(this.message1);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  getMessage(){
    return this.message1;
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
