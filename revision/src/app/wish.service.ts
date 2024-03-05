import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/WishItem';
import { catchError } from 'rxjs/operators';//operator
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private httpClient: HttpClient) {

  }
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorisation': 'Bearer <token>'
      })
    }
  }
  getWishes() {
    // the get method returns an observable 
    // and since there's an observable object , there is a subscribe method
    /**
     * When you call the subscribe method , then the request is made
     */
    let options = this.getStandardOptions()
    options.params = new HttpParams({
      fromObject: {
        format: 'xml'
        // we want to create our url parameters from this object 
      }
    })
    return this.httpClient.get('assetss/wishes.json?format=json', options).pipe(catchError(this.handleError))//piping a process that will process an error if it occurs
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      // it's a client or a network error
      console.error('Client or Network Error', error.error)
    } else {
      // it's an http response problem
      console.error(`Server side error `, error.error)
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))// throwing an error 
    // but calling throwError returns an observable wrapping around that error
  }
  private createWish(wish: WishItem) {
    let options = this.getStandardOptions()
    options.headers = options.headers.set('Authorisation', 'Bearer <token>')
    return this.httpClient.post('assets/wishes.json', wish, options)
  }
}
