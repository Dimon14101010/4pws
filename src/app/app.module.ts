import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { EnterPageComponent } from './enter-page/enter-page.component';
import {routes} from "./routes";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import {HttpClientModule} from "@angular/common/http";
import {GeolocationService} from "./geoLocation.service";
import {AgmCoreModule, AgmInfoWindow, InfoWindowManager} from "@agm/core";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../environments/environment";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterPageComponent,
    DashboardComponent,
    TopMenuComponent,
    BottomMenuComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAwdJD1FBcEsHDgriQfKXn_FeY1EL_4f1Q'})
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
