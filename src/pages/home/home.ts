import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
qrdata = null;
createdCode=null ;
scannedCode = null;
  constructor(public navCtrl: NavController,private barcodeScanner:BarcodeScanner) {

  }

  createcode(){
    this.createdCode = this.qrdata;
  }
  scancode(){
this.barcodeScanner.scan().then(barcodeData=>{
  this.scannedCode = barcodeData.text;
})
  }
}
