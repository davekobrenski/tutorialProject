import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  speakingText: string = '';
  speakingLocale = 'en-US';
  speakingRate = 160;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    

  }

  speakText() {
    let options = {
      text: this.speakingText,
      locale: this.speakingLocale,
      rate: this.speakingRate / 100
    };

    this.tts.speak(options)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
    console.log(this.selectedItem);
    this.speakingText = this.selectedItem.note + ', with a ' + this.selectedItem.icon + ' icon.';
    this.speakText();
  }
}
