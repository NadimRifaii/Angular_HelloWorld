import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';
import { catchError } from 'rxjs/operators';//this is an operator from the reactive javascript library
import { throwError } from 'rxjs';
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
      fromObject: {//we want to create our url parameters from this object
        format: 'json'
      }
    })
    return this.http.get(`assets/wishes.json`, options).pipe(catchError(this.handleError))
    return this.http.get(`assets/wishes.json?format=json`, options)
    /**
     * The get method returns an observable 
     * By calling the get method , the actual request has not been sent yet 
     * Since this is an observable object, there is a subscribe method that we can use
     * When we call the subscribe method , then the request is sent 
    */
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      //client or network error
      console.error(`There is an issue with the client or newtork:` + error.error)
    } else {
      console.error(`Server-side error: ` + error.error)
    }

    return throwError(() => new Error(`Cannot retreive wishes from the server. Please try again`))//this gives us an observable

  }
  private addWish(wish: WishItem) {
    const options = this.getStandardOptions()
    options.headers = options.headers.set(`Authorization`, 'value')
    this.http.post(`url`, wish, options)
    //url, body, options
  }
}
