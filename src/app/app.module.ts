import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AuthModule } from './auth/auth.module';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';


export function tokenGetter(): string | null {
  return localStorage.getItem('jwt_token')
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    IonicStorageModule.forRoot()
  ],
  providers: [Camera,Crop,File, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
