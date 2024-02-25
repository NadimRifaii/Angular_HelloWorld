import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  getWishes() {
    const options = this.getStandardOptions()
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get(`assets/wishes.json`, options)
    return this.http.get(`assets/wishes.json?format=json`, options)
    /**
     * The get method returns an observable 
     * By calling the get method , the actual request has not been sent yet 
     * Since this is an observable object, there is a subscribe method that we can use
     * When we call the subscribe method , then the request is sent 
    */
  }
  private addWish(wish: WishItem) {
    const options = this.getStandardOptions()
    options.headers = options.headers.set(`Authorization`, 'value')
    this.http.post(`url`, wish, options)
    //url, body, options
  }
}
