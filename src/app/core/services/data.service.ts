import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient,
    private _cookie: CookieService
  ) { }

  private getUrlWithParams = function (url: string, params: { key: string, val: any }[] | null) {
    if (params === null) {
      return url;
    } else {
      let urlWithParams = '?';
      let variable;
      if (Array.isArray(params)) {
        for (variable in params) {
          urlWithParams += params[variable].key + '=' + params[variable].val + '&';
        }
        urlWithParams = urlWithParams.substring(0, urlWithParams.length - 1);
      }
      urlWithParams = url + (urlWithParams);
      return urlWithParams;
    }
  };

  private getHttpOptions(extraHeaders?: {} | undefined) {
    let headersObj: any = {
      'Content-Type': 'application/json',
      'access-id': this._cookie.get("access_id"),
      'access-token': this._cookie.get("access_token"),
    };

    if (typeof extraHeaders === "object" && Object.keys(extraHeaders).length > 0) {
      headersObj = Object.assign(headersObj, extraHeaders)
    }

    let httpOptions: any = {
      headers: new HttpHeaders(headersObj)
    };

    return httpOptions;
  }

  private getHttpOptionsForDownload() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-id': this._cookie.get("access_id"),
        'access-token': this._cookie.get("access_token"),
      }),
      observe : 'response' as const,
      responseType: 'arraybuffer' as 'json'
    };
    return httpOptions;
  }

  private getHttpOptionsWithoutAccess() {
    const httpOptionsWithoutAccess = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return httpOptionsWithoutAccess;
  }

  private getFormHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-id': this._cookie.get("access_id"),
        'access-token': this._cookie.get("access_token")
      })
    }
    httpOptions.headers.delete("Content-Type");
    return httpOptions;
  }
  private getHttpOptionsForMedia() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-id': this._cookie.get("access_id"),
        'access-token': this._cookie.get("access_token"),
      }),
      responseType: 'blob' as 'json'
    };
    // httpOptions.headers.delete("Content-Type");
    return httpOptions;
  }


  postData(url: string, data: any, sendHeaders: boolean, extraHeaders?: any) {
    return (sendHeaders === false ? this._http.post(url, data, this.getHttpOptionsWithoutAccess()) : this._http.post(url, data, this.getHttpOptions(extraHeaders)))
  };

  getData(url: string, urlParams: { key: string, val: any }[] | null, sendHeaders: boolean, extraHeaders?: any) {
    const urlWithParams = this.getUrlWithParams(url, urlParams);
    return (sendHeaders === false ? this._http.get(urlWithParams, this.getHttpOptionsWithoutAccess()) : this._http.get(urlWithParams, this.getHttpOptions(extraHeaders)))
  }

  patchData(url: string, data: any, sendHeaders: boolean, extraHeaders?: any) {
    return (sendHeaders === false ? this._http.patch(url, data, this.getHttpOptionsWithoutAccess()) : this._http.patch(url, data, this.getHttpOptions(extraHeaders)))
  };

  deleteData(url: string, urlParams: { key: string, val: any }[] | null, sendHeaders: boolean, extraHeaders?: any) {
    const urlWithParams = this.getUrlWithParams(url, urlParams);
    return (sendHeaders === false ? this._http.delete(urlWithParams, this.getHttpOptionsWithoutAccess()) : this._http.delete(urlWithParams, this.getHttpOptions(extraHeaders)))
  }

  downloadData(url: string, urlParams: { key: string, val: any }[] | null) {
    const urlWithParams = this.getUrlWithParams(url, urlParams);
    return this._http.get(urlWithParams, this.getHttpOptionsForDownload())
  }

  getFile(mediaUrl:string) {
    return this._http.get(mediaUrl, this.getHttpOptionsForMedia());
  }
}
