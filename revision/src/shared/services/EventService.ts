import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

/**
 * The Subject is a special type of Observable that allows us to emit values to multiple subscribers
 */
@Injectable({
  providedIn: "root"
})
/*
where we want to provide this EventService
  providedIn:AppModule <=> Providers:[EventService]
  providedIn:root => application level injector , the EventService is available througout the entire application
  providedIn:platform 
  providedIn:any
*/
export class EventService {
  private subject = new Subject<any>()//allow us to pass messages from the Observable object to the subscribers
  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload })
  }
  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (nextObj.eventName === eventName)
        callback(nextObj.payload)
    })
  }
}
// export default new EventService()
