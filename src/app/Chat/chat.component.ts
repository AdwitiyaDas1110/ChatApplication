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
    users : any[];
    ngOnInit(){
        console.log(this._http.currentUser);
        this._http.getUsers()
        .subscribe(data => console.log(JSON.stringify(data)),
                error => alert(error),
                () =>console.log("It's done"));
    }
}

           
       