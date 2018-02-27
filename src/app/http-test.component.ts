import { Component } from '@angular/core';
import { HttpService } from './httptest.service';
@Component ({
    selector : 'http-test',
    templateUrl : './http-test.component.html'
})
export class HttpTestComponent{
    getData : string = "";
    postData : string = "";
    constructor(private http_service : HttpService){}
    getCurrentTime(){
    //    this.http_service.postName()
    //     .subscribe(data => document.write(JSON.stringify(data)),
    //     error => alert(error),
    //     () =>console.log("It's done"));
    }
}