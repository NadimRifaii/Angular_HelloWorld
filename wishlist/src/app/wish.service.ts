import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }
  getWishes() {
    return this.http.get(`assets/wishes.json`)
    /**
     * The get method returns an observable 
     * By calling the get method , the actual request has not been sent yet 
     * Since this is an observable object, there is a subscribe method that we can use
     * When we call the subscribe method , then the request is sent 
     */
  }
}
