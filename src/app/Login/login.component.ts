import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../httptest.service';
import { Router } from '@angular/router';
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {


    username : string = "";
    token:string = "";
    user : any;
    constructor(private _http : HttpService , private _router : Router, private http : HttpClient ){

    }
    SubmitUsername() {
        
        var regSpace = new RegExp("[\s]");
        if(this.username != ""){

            if(!regSpace.test(this.username)){
               
               
	           this._http.postName(this.username)
                .subscribe(data => {if((JSON.stringify(data["token"]))!=null)
                                        this.token = (JSON.stringify(data['token']));
                                        setTimeout(()=>{this._http.currentUserToken=this.token;
                                                        this._http.currentUserId=JSON.parse(JSON.stringify(data['id']));
                                                        // console.log(this.token);
                                                        this._router.navigate(['/chat'])
                                                    },1000);                  
                                   },
                           () =>console.log("It's done"));
               
            }
            else{
                alert("Username should not contain any white-space");
            }
        }
        else{
            alert("Username cannot be blank");
        }
    }
}