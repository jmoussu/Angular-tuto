import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';

import { AppareilService } from './service/appareil.service'
import { AuthService } from './service/auth.service';
import { AuthGurad } from './service/auth-guard.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes = [
  {
    path: '',
    canActivate: [AuthGurad],
    component: AppareilViewComponent
  },
  {
    path: 'appareils',
    canActivate: [AuthGurad],
    component: AppareilViewComponent
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGurad],
    component: SingleAppareilComponent
  },
  {
    path: 'edit',
    canActivate: [AuthGurad],
    component: EditAppareilComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'not-found',
    component: FourOhFourComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    FirstComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGurad,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
