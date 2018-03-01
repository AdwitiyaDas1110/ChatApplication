import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()

export class HttpService {
    private baseUrl: string;
    respond : any ;
    currentUserToken : string = "";
    currentUserId : number = 0;
    constructor(private _httpClient : HttpClient, private _http : Http){
        this.baseUrl = "https://chat.promactinfo.com/api/";
    }

    postName(uName : string){
        let params  = {name:uName};
        return this._httpClient.post(this.baseUrl+"user/login",params);

    }

    getUsers(){
        // console.log(this.currentUserToken);
        // console.log(this.currentUserId);
        const httpOptions = new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : JSON.parse(this.currentUserToken)
        });
        console.log(httpOptions);
      

       return this._http.get(this.baseUrl+"user", { headers: httpOptions }).map((res:Response) => res.json());
    }
}