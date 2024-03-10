import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient:HttpClient) {

  }

setregister(userdata:object):Observable<any>
{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata);
}
setlogin(userdata:{}):Observable<any>{
 return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata);
}

}
