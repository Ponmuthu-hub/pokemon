import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-response',
  templateUrl: './error-response.component.html',
  styleUrls: ['./error-response.component.css']
})
export class ErrorResponseComponent implements OnInit {
  title = 'Angular-Interceptor';
  errorresponse:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { 
    this.errorresponse=data;
  }


  ngOnInit(): void {
  }

}
