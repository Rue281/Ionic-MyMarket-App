import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private apiUrl =
    "https://5bcce576cf2e850013874767.mockapi.io/task/categories";
  constructor(public http: HttpClient) {
    console.log("Hello ApiProvider Provider");
  }

  getCategories(): Observable<string[]> {
    return this.http
      .get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //extract categories
  private extractData(res: Response) {
    let categories = res;
    return categories || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || "";
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
