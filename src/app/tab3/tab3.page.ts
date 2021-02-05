import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Platform } from '@ionic/angular';
import { resolve } from 'q';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

  private scenario1 : string = 'Hello Vijay, Thanks for asking. I\'m Good. Hope you are good too. Happy to assist you in ConnectALL.';
  private scenario2 : string = 'Hello Vijay,  You have 2 integrations and a total of 220 records were synced today with 10 failures nevertheless the default retries.';
  private scenario3 : string = 'Hello Vijay,  Your integration Jira2Snow is now enabled. I can update after somewhile on the synchronisation of the integration, provided you promise to reach me';
  private scenario4 : string = 'Hello Vijay,  It would be my pleasure to assist you. Never mind! You can reach me out next time too. Have a good day.';
  public fillColor:boolean = false;
  public matches:Array<string>=[];
  private accessToken: string = '';
  private client: any;
  
  public constructor( 
      private platform:Platform, public speechRecognition: SpeechRecognition, 
              private tts: TextToSpeech) {
    /*this.client = new ApiAiClient({
      accessToken: '115260905885918982448'
    });*/
  }

  public checkPermission(){
    this.speechRecognition.hasPermission().then((permission)=>{
      if(permission){

        alert("Already has permission for speech recognition")
      }
      else{
        alert("Not permission yet")
      }

    }, (err)=>{
      alert(JSON.stringify(err));
    })
  }

  public requestPermission(){
    
    this.speechRecognition.requestPermission().then((data)=>{
      this.startListening();
    }, (err)=>{
      alert(JSON.stringify(err));
    })

  }

  public processListen(){
    if(!this.fillColor){
      this.requestPermission();
    } else {
      this.stopListening();
    }
  }
  
  public startListening(){
    
    this.fillColor = true;
    this.matches=[];
    this.speechRecognition.startListening().subscribe((speeches)=>{
    this.matches=speeches;
  },(err)=>{
    alert(JSON.stringify(err))
  })

  }

  public validateInput(){
    let content = '';
    
    for(let i=0;i<this.matches.length;i++){
      const value:string = this.matches[i];
      if(value.includes('how are you')){
        this.tts.speak(this.scenario1)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
        break;
      } else if(value.includes('records')){
        this.tts.speak(this.scenario2)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
        break;
      } else if(value.includes('Jira to snow')){
        this.tts.speak(this.scenario3)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
        break;
      } else if(value.includes('thank you')){
        this.tts.speak(this.scenario4)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
        break;
      }
    }
  }
  public stopListening(){
    this.fillColor = false;
    this.speechRecognition.stopListening();
    this.validateInput();
    
    /*this.client
      .textRequest(content)
      .then(response => {
        alert(JSON.stringify(response));
        console.log('res');
        console.log(response);
        alert(JSON.stringify(response.result.fulfillment.speech));
        this.tts.speak(response.result.fulfillment.speech)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        alert(JSON.stringify(error));
      });
      */
  }

}