import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PacientePage } from '../paciente/paciente';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the TerapiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terapia',
  templateUrl: 'terapia.html',
})
export class TerapiaPage {

  public terapiaIndex: string = "";
  public pacienteIndex: string = "";
  public skipIndex: string = "";
  public blobToken: string = "";
  public TerapiaItem:any = "";
  public terapiaTitulo:string = "";
  private recording: boolean = false;
  private recordingIco: string = 'assets/img/micico.png';
  private filePath: string;
  private fileName: string;
  private audio: MediaObject;
  audioList: any[] = [];
  //New Test of recording media
  public recordingMessage = "Wating for records..."
  mediaFiles = [];
  //@ViewChild('myvideo') myVideo: any;
  public MEDIA_FILES_KEY = 'mediaFiles';
  //private transfer: FileTransfer
  private audioURI:any;
  private audioFileName:any; 
  private isPlay:boolean = false;
  private audioIco: string = 'assets/img/playico.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private media: Media, private file: File, public platform: Platform,
    private storage: Storage, private transfer: FileTransfer) {
    this.terapiaIndex = this.navParams.get('terapiaIndex');
    this.pacienteIndex = this.navParams.get('pacienteIndex');
    this.skipIndex = this.navParams.get('skipIndex');
    this.blobToken = this.navParams.get('blobToken');
    console.log("Requested Index = " + this.terapiaIndex + "/" + this.pacienteIndex + "/" + this.skipIndex + "/" + this.blobToken);
    /*let params = new URLSearchParams();
    params.append('idPaciente',this.pacienteIndex);
    params.append('idTerapia',this.terapiaIndex);
    params.append('skip',this.skipIndex);
    params.append('blobtoken', this.blobToken);*/
    let params = "idPaciente=" + this.pacienteIndex + "&idTerapia=" + this.terapiaIndex + "&skip=" + this.skipIndex + "&blobtoken=" + this.blobToken;
    //this.http.post("http://localhost:59109/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
      this.http.post("http://talktootalk.gear.host/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
      console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
      if(JSON.stringify(data.json()).toString() != '"false"')
      {
        console.log("Data is Retrived");
        this.TerapiaItem = data.json();
        console.log("Terapia DATA LIST = " + this.TerapiaItem.Titulo);
        this.terapiaTitulo = this.TerapiaItem.Terapia.Titulo;
        if(JSON.stringify(data.json()).toString() == '"false"')
        {
          console.log("The Teraphy is ended by server");
          this.navCtrl.push(PacientePage, { data: this.pacienteIndex });
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerapiaPage');
  }

  requestNewItem(): void
  {
    this.skipIndex = this.skipIndex + 1;
    /*let params = new URLSearchParams();
    params.append('idPaciente',this.pacienteIndex);
    params.append('idTerapia',this.terapiaIndex);
    params.append('skip',this.skipIndex);
    params.append('blobtoken', this.blobToken);*/
    let params = "idPaciente=" + this.pacienteIndex + "&idTerapia=" + this.terapiaIndex + "&skip=" + this.skipIndex + "&blobtoken=" + this.fileName;
    //this.http.post("http://localhost:59109/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
    this.http.post("http://talktootalk.gear.host/api/pacientesapi/Ready/?" + params.toString(), null).subscribe(data => {
      console.log("HTTP WEBAPI RESULT TO GetLIST of Paciente = " + JSON.stringify(data.json()));
      if(JSON.stringify(data.json()).toString() != '"false"')
      {
        console.log("Data is Retrived");
        this.TerapiaItem = data.json();
        if(JSON.stringify(data.json()).toString() == '"end"')
        {
          console.log("The Teraphy is ended by server");
          this.navCtrl.push(PacientePage, { data: this.pacienteIndex });
        }
        console.log("Terapia DATA LIST = " + this.TerapiaItem.Titulo);
      }
    });
  }

  accessRecording()
  {
    //this.captureAudio();
    if(this.recording)
    {
      this.recordingIco = 'assets/img/micico.png';
      this.stopRecord()
    }
    else
    {
      this.recordingIco = 'assets/img/cancelico.png';
      this.startRecord();
    }
  }

  accessPlay()
  {
    //this.captureAudio();
    if(this.isPlay)
    {
      this.audioIco = 'assets/img/playico.png';
      this.platform.ready().then(() => {
        if(this.audio)
        {
          //const audio:MediaObject  = this.media.create(this.filePath);
          //this.audio.stop();
          this.audio.stop();
          this.audio.release();
          this.recordingMessage = "The audio is stoped...";
          this.isPlay = false;
        }});
    }
    else
    {
      this.audioIco = 'assets/img/cancelico.png';
      this.playAudio();
      this.isPlay = true;
    }
  }

  startRecord() {
    this.recordingMessage = "Device is preparing to record...";
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
      this.filePath = this.file.dataDirectory + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.platform.ready().then(() => {
        this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.mp3';
        this.filePath = this.file.externalDataDirectory + this.fileName;
        this.audio = this.media.create(this.filePath);
        this.audio.onStatusUpdate.subscribe(status => console.log('status>>>>>>>>>', status)); // fires when file status changes
        this.audio.onSuccess.subscribe(() => console.log('Action is successful'));
        this.audio.onError.subscribe(error => console.log('Error!', error)); 
        console.log("recording file = " + this.filePath);
        console.log("start recording...");
        console.log("recording is started...");
        this.recordingMessage = "Device is recording...";    
        this.audio.startRecord();    
        this.recording = true;
      });
    }
  }

  stopRecord() {
    this.platform.ready().then(() => {
      this.audio.stopRecord();
      this.audio.release();
      console.log("Recording is stoped...");
      this.recordingMessage = "Recording is ended...";
/*      let data = { filename: this.fileName };
      this.audioList.push(data);
      localStorage.setItem("audiolist", JSON.stringify(this.audioList));*/
      this.recording = false;
      this.uploadFile();
    });
  }

  playAudio() {
    if (this.platform.is('ios')) {
      this.filePath = this.file.dataDirectory + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.platform.ready().then(() => {
        if(this.audio)
        {
          this.audio  = this.media.create(this.filePath);
          //this.audio.stop();
          this.audio.play();
          this.audio.setVolume(0.8);
          console.log("The device is playing audio...");
          this.recordingMessage = "Device is playing audio...";
          console.log(this.audio);
        }
        else
        {
          console.log("The device not yeat ready or instance is null...");
          console.log(this.audio);
        }
      });
    }
  }

  //Too upload file
  uploadFile() {
    this.recordingMessage = "Uploading recording...";
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.recordingMessage = "Upload object is created...";
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.fileName,
      chunkedMode: false,
      //mimeType: "audio/3gpp",
      //headers: {}
    }
    this.recordingMessage = "Upload options is created...";
    console.log("Upload options is created for " + this.filePath);
    this.file.checkFile(this.file.dataDirectory + 'rec/', this.fileName).then(
      (files) => {
        this.recordingMessage = "Upload file exists...";
        console.log("files found" + files)
      }
    ).catch(
      (err) => {
        this.recordingMessage = "Upload file not exists...";
        console.log("files not found ")
    });

    fileTransfer.upload(this.filePath, encodeURI('http://talktootalk.gear.host/api/pacientesapi/UploadAppAudio'), options, true)
      .then((data) => {
      this.fileName = data.response.replace(/"([^"]+(?="))"/g, '$1');
      console.log(data.response+" Uploaded Successfully | File = http://talktootalk.gear.host/Up/Recordings/" + this.fileName);
      this.audioFileName = "http://talktootalk.gear.host/Up/Recordings/" + data.response.replace(/"([^"]+(?="))"/g, '$1');
      this.recordingMessage = "Recording uploaded successfully...";
    }, (err) => {
      console.log("UPLOAD ERROR = " + err.exception);
      //this.recordingMessage = "Upload Error...";
    });
  }
}
