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
    
    
    async ngOnInit(){
        this.userID = this._http.currentUserId;
        
    await this._http.getUsers()
        .subscribe(data => this.users = JSON.parse(JSON.stringify(data)),
                   error => alert(JSON.stringify(error)),
                   () => console.log("It's done"));   
    }

}

           
       