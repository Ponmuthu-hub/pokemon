import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public router:Router,private http:HttpClient) {
  }
  
  Get(url:string){
    return this.http.get(url);
  }
  Post(url:string,val:any){
    return this.http.post(url,val);
  }
  Put(url:string,val:any){
    return this.http.put(url,val);
  }
  Delete(url:string){
    return this.http.delete(url);
  }
}
