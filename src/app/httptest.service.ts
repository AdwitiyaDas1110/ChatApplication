import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()

export class HttpService {
    private baseUrl: string;
    respond : any ;
    currentUser : string = "";
    constructor(private _http : HttpClient, private http : Http){
        this.baseUrl = "https://chat.promactinfo.com/api/";
    }

    postName(uName : string){
        let params  = {name:uName};
        return this._http.post(this.baseUrl+"user/login",params);

    }

    getUsers(){
        let header = new HttpHeaders();
        header.set('Authorization', this.currentUser);
       // let options = new RequestOptions({ headers: header, params : null });

        return this._http.get('https://chat.promactinfo.com/api/user', 
        {
             headers : header
        });
    
    }
}