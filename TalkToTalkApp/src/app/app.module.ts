import { TerapeutaPage } from './../pages/terapeuta/terapeuta';
import { PacientePage } from './../pages/paciente/paciente';
import { TerapiaPage } from '../pages/terapia/terapia';
import { LoginPage } from './../pages/login/login';
import { TerapeutaPageModule } from './../pages/terapeuta/terapeuta.module';
import { PacientePageModule } from './../pages/paciente/paciente.module';
import { TerapiaPageModule } from '../pages/terapia/terapia.module';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    PacientePageModule,
    TerapeutaPageModule,
    TerapiaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PacientePage,
    TerapeutaPage,
    TerapiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    Media,
    File
  ]
})
export class AppModule {}
