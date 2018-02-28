import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response } from '@angular/http';
import { HttpService } from '../httptest.service';
@Component({
    selector: 'chat',
    styleUrls: ['./chat.component.css'],
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit{
    constructor(private _http : HttpService, private http : HttpClient){

    }
    users : Array<any> = [];
    userID : number = 0;
    ngOnInit(){
        this.userID = this._http.currentUserId;
        this._http.getUsers()
        .subscribe(data => {
                                setTimeout(() => {
                                     this.users = JSON.parse(JSON.stringify(data));
                                    //  for (var index = 0; index < this.users.length; index++) {
                                    //      var element = this.users[index];
                                         // console.log(this.userID);
                                    //  }
                              },100);
                           },
                error => alert(JSON.stringify(error)),
                () => console.log("It's done"));
        
    }

}

           
       