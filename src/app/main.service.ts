import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl="https://test.greenkoncepts.com/gktest/";
  token:any='';


  constructor(private http: HttpClient,private cookieService:CookieService) { 
    if(this.cookieService.get('token')){
      this.token=this.cookieService.get('token');
    }
  }

  loginCall(params){
    return this.http.get(this.apiUrl+"login?username="+params.userName+"&password="+params.passWord);
  }

  logout(){
    return this.http.get(this.apiUrl+"logout?token="+this.token);
  }

  getOrders(){
    return this.http.get(this.apiUrl+"getAllOrders?token="+this.token);
  }

  getHierarchy(){
    return this.http.get(this.apiUrl+"node-hierarchy?token="+this.token);
  }

  postCustomer(params){
    return this.http.post(this.apiUrl+"createCustomer?token="+this.token,params);
  }
  
}
