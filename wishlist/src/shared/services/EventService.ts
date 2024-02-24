import { Observable, Subject } from "rxjs";
/**
 * This is the Reactive Extensions for javascript wich angular uses extensively
 * It uses Observable extensively not just for events 
 * 
 * Whenever we talk about HTTP requests it uses Observable then it is used throughout the framework
 * 
 * Subject is a special type of Observable object
 * It is going to allow us to emulate typical events
 * So that we can have multiple objects that subscribe the our Observable object
 * Meaning that we can issue a single event then multiple objects can be listening for that same event
 */

class EventServie {
  private subject = new Subject()
  /**
   * We need the Subject wich is going to allow us to essentially pass messages (events) from the Observable object
   * To the subscriber objects
   */
  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload })
    // we pass in the object that we want the subscribers to work with
  }
  listen(eventName: string, callBack: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName == nextObj.eventName)
        callBack(nextObj.payload)
    })
    /**
     * Whenever we emit any event , the next method will execute
     * It will pass in this object ({eventName,payload}) will be passed to the callback function that the subscribe method takes
     */
  }
}

export default new EventServie()