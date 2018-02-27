import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HttpTestComponent } from './http-test.component';

export const rootRouterConfig: Routes = [

      {path: 'chat', component: ChatComponent },
      {path : 'login', component : LoginComponent},
      {path : 'http-test' , component : HttpTestComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full' }
 
];

