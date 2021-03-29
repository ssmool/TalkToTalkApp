import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { File, FileEntry } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Media, MediaObject } from '@ionic-native/media';
import * as test from '../../assets/js/teste';

declare var ProcessAudio: any;
declare var testejs: any;
/**
 * Generated class for the TerapeutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terapeuta',
  templateUrl: 'terapeuta.html',
})
export class TerapeutaPage {

  public TerapiasList;
  public TerapiasListPaciente;
  public TerapiaItem;
  public userIndex: any;
  public userName: any;
  public itemDate: any;
  public itemAverage: any;
  public itemAudio: any;
  public itemIsVisible: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public file: File, public txfr: FileTransfer, public audio: Media) {
    this.userIndex = this.navParams.get('data');
    console.log("Requested User Index = " + this.userIndex);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerapeutaPage');
    let params = "id=" + this.userIndex;
    //this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
    this.http.post("http://localhost:59109/api/pacientesapi/GetListTerapia/?" + params.toString(), null).subscribe(data => {
      console.log("HTTP WEBAPI RESULT TO GetLIST of Pacientes = " + JSON.stringify(data.json()));
      if(JSON.stringify(data.json()).toString() != '"false"')
      {
        var listTerapia = data.json();
        console.log("Data is Retrived");
        console.log(listTerapia[0].Nome);
        this.TerapiasList = listTerapia;
        console.log("DATA LIST = " + listTerapia[0].Nome);
      }
    });
  }

  getUserTerapias(id: number, name: string):void
  {
      this.userName = name;
      this.http.post("http://localhost:59109/api/terapeutasapi/GetTerapiasUsersEvaluate/?id=" + id, null).subscribe(data => {
        console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
        if(JSON.stringify(data.json()).toString() != '"false"')
        {
          var listTerapiaPaciente = data.json();
          console.log("Data is Retrived");
          console.log(listTerapiaPaciente[0].TerapiaHistoricoID);
          this.TerapiasListPaciente = listTerapiaPaciente;
          console.log("DATA LIST = " + listTerapiaPaciente[0].TerapiaHistoricoID);
        }
      });
  }

  getUserTerapiaItem(id:number)
  {
    this.itemIsVisible = true;
    this.http.post("http://localhost:59109/api/terapeutasapi/GetTerapiasUsersEvaluateItem/?id=" + id, null).subscribe(data => {
      console.log("HTTP WEBAPI RESULT TO GetTerapiaItem of Paciente = " + JSON.stringify(data.json()));
      if(JSON.stringify(data.json()).toString() != '"false"')
      {
        var terapiaTopico = data.json();
        console.log("Data is Retrived");
        console.log(terapiaTopico.TerapiaHistoricoID);
        this.TerapiaItem = terapiaTopico;
        console.log("DATA LIST = " + terapiaTopico.TerapiaHistoricoID);
        this.itemDate = terapiaTopico.DataCadastro;
        this.itemAverage = terapiaTopico.Avaliacao;
        this.itemAudio = "http://localhost:59109/Up/Recordings/" + terapiaTopico.audioProcessado;
      }
    });
  }

  playAudioItem(file:string)
  {
    let fileUrl: string  = "http://localhost:59109/Up/Recordings/" + file;
    let ft: FileTransferObject = this.txfr.create();
    let fn = this.file.dataDirectory + fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    ft.download( fileUrl, fn ).then(
      (fe: FileEntry) => {
        let song: MediaObject = this.audio.create(fe.nativeURL);
        song.play();
        //this.ProcessAudio(audiofile);
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
  }

  closeItem()
  {
    this.itemIsVisible = false;
  }
}
