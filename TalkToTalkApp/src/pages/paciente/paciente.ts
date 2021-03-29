import { TerapiaPage } from './../terapia/terapia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {

  public TerapiasList;
  public userIndex: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.userIndex = this.navParams.get('data');
    console.log("Requested User Index = " + this.userIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientePage');
    //let params = new URLSearchParams();
    //params.append('id',this.userIndex);
    let params = "id=" + this.userIndex;
    //this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
    this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
      console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
      if(JSON.stringify(data.json()).toString() != '"false"')
      {
        var listTerapia = data.json();
        console.log("Data is Retrived");
        console.log(listTerapia[0].Titulo);
        this.TerapiasList = data.json();
        console.log("DATA LIST = " + this.TerapiasList.Titulo);
      }
    });
  }

  readyTerapia(terapiaIndex:string): void
  {
    let blobtoken = Math.floor(Math.random()*1000000)+1;
    console.log("SENDER FLAG = " + terapiaIndex + "|" + this.userIndex + "|" + 1 + "|" + blobtoken );
    this.navCtrl.push(TerapiaPage, { terapiaIndex: terapiaIndex, pacienteIndex: this.userIndex, skipIndex: 0, blobToken: blobtoken});
  }

}
