import { LightningElement, api, wire } from 'lwc';
import qrcode from './qrcode.js';

// refer: https://gitlab.com/rendaw/qrcode-generator-es6/blob/master/readme.md

export default class Qrc extends LightningElement {
    @api recordId;
    @api percentage = 30;

    renderedCallback() {
            const qrc = new qrcode(0, 'H');
            // get the recordId
            let str =  `${this.recordId}`;
            // console.log(`recordid: ${str}`);
            qrc.addData(str);
            qrc.make();
            let ele = this.template.querySelector("div.qrc"); 
            ele.innerHTML = qrc.createSvgTag({});
            // put qr text 
            let txtEle = this.template.querySelector("div.qrctext");
            txtEle.innerHTML = `RecordId: ${str}`;
    }

 }
