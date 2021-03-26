import { TerapeutaPage } from './../terapeuta/terapeuta';
import { PacientePage } from './../paciente/paciente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginType:string = "";
  public userBanner:string = "assets/img/pacientIcon.png";
  public userColor:string = "danger";
  public userLabel:string = "+Sou Paciente";
  public loginEmail = "";
  public loginSenha = "";
  public loginStatus: string = 'Wating for loggin start...';
  public PacienteData;
  public TerapeutaData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.loginType = this.navParams.get('data');
    if(this.loginType == "attrxloginxvalx01")
    {
      this.userBanner = 'assets/img/pacientIcon.png';
      this.userColor = 'danger';
      this.userLabel = '+Sou Paciente';
    }
    else if(this.loginType == "attrxloginxvalx02")
    {
      this.userBanner = 'assets/img/docIcon.png';
      this.userColor = 'default';
      this.userLabel = '+Sou Médico';
    }
    else
    {
      this.navCtrl.pop();
    }
    console.log('userType=' + this.loginType);
    console.log('userLabel=' + this.userLabel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log('userLabel[2]=' + this.userLabel);
    console.log('userColor[2]=' + this.userColor);
  }

  userLoggin()
  {
    this.loginStatus = 'Wating when loggin is opend...';
    let email:string = this.loginEmail.toString();
    let senha:string = this.loginSenha.toString();
    //let params = new URLSearchParams();
    //params.append('email',email);
    //params.append('senha',senha);
    let data = {
      'email': email,
      'senha': senha
    }
    this.loginStatus = 'Wating when loggin is sended...';
    if(this.loginType == "attrxloginxvalx01")
    {
      this.loginStatus = 'Wating for loggin Paciente is sended...';
      //this.http.post("http://localhost:59109/api/pacientesapi/Login/?" + params.toString(), null).subscribe(data => {
      this.http.post("http://talktootalk.gear.host/api/pacientesapi/Login?email=" +email + "&senha=" + senha, null).subscribe(data => {
          if(JSON.stringify(data.json()).toString() != '"false"')
          {
            this.loginStatus = 'Loggin is sended, wait for result...';
            this.PacienteData = data.json();
            console.log("HTTP WEBAPI RESULT TO LOGIN = " + this.PacienteData.PacienteID);
            this.loginStatus = 'Loggin is succefuly...';
            this.navCtrl.push(PacientePage, { data: this.PacienteData.PacienteID });
          }
      }, error => {
          this.loginStatus = 'Loggin dont works...';
          console.log(JSON.stringify(error.json()));
      });
    }
    else if(this.loginType == "attrxloginxvalx02")
    {
      this.loginStatus = 'Wating for loggin Terapeuta is sended...';
      //this.http.post("http://192.168.0.7:59109/api/terapeutasapi/Login/?email=" +email + "&senha=" + senha, null).subscribe(data => {
      this.http.post("http://talktootalk.gear.host/api/terapeutasapi/Login?email=" +email + "&senha=" + senha, null).subscribe(data => {
          if(JSON.stringify(data.json()).toString() != '"false"')
          {
            this.loginStatus = 'Loggin is sended, wait for result...';
            this.TerapeutaData = data.text();
            console.log("HTTP WEBAPI RESULT TO LOGIN = " + this.TerapeutaData);
            this.loginStatus = 'Loggin is succefuly...';
            this.navCtrl.push(TerapeutaPage, { data: this.TerapeutaData });
          }
      }, error => {
          this.loginStatus = 'Loggin dont works...';
          console.log(JSON.stringify(error.json()));
      });
    }
    else
    {
      this.navCtrl.pop();
    }
  }
}
