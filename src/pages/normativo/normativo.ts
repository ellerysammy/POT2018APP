import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-normativo',
  templateUrl: 'normativo.html'
})
export class NormativoPage {
    items: any = [];
    itemHeight: number = 0;
    normaSelected: string = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, private theInAppBrowser: InAppBrowser) {
        this.items = [
            {
                name: "Norma Nacional", 
                value: "N",
                expanded: true, 
                childs: [
                            { name: "Ley 1454 - 2011", url:"http://www.podbolivar2018.com/docs/normativa/Nacional/LEY%201454%20DE%202011.pdf" },
                            { name: "Ley 388 - 1997", url:"http://www.podbolivar2018.com/docs/normativa/Nacional/ley%20388%20de%201997.pdf"  },
                            { name: "Ley Distritos", url:"http://www.podbolivar2018.com/docs/normativa/Nacional/ley%201617%20de%202013.pdf" },
                            { name: "Ley Área Metropolitana", url:"http://www.podbolivar2018.com/docs/normativa/Nacional/LEY%201625%20DEL%2029%20DE%20ABRIL%20DE%202013.pdf" },
                            { name: "Acuerdo COT 010", url:"#" }
                        ]
            },
            {
                name: "Norma Departamental", 
                value: "D",
                expanded: false, 
                childs: [
                            { name: "Ordenanza 153 - 2016", url:"http://www.podbolivar2018.com/docs/normativa/Departamental/ORDENANZA%20153%20DE%202016.pdf" },
                            { name: "Ordenanza 213 - 2017", url:"http://www.podbolivar2018.com/docs/normativa/Departamental/Ordenanza%20No.%20213%20-%202017.pdf" },
                            { name: "Ordenanza 188 - 2017", url:"http://www.podbolivar2018.com/docs/normativa/Departamental/Ordenanza%20No.%20188%20-%202017.pdf" },
                            { name: "Decreto 924 - 2017", url:"http://www.podbolivar2018.com/docs/normativa/Departamental/Decreto%20No.%20924%20-%202017.pdf" },
                            { name: "Resolución 706 - 2017", url:"http://www.podbolivar2018.com/docs/normativa/Departamental/Resolucion%20No.%20706%20-%202017.pdf" }
                        ]
            },
            {
                name: "Otras Disposiciones", 
                value: "O",
                expanded: false, 
                childs: [
                            { name: "ODS", url:"http://www.podbolivar2018.com/docs/normativa/OtrasDisposiciones/ODS%20-%20AGENDA%202030.pdf" },
                            { name: "POTS Modernos - RIMIS", url:"#" }
                        ]
            }
        ];
    }
    public showDocument(url : string){
        let target = "_system";
        this.theInAppBrowser.create(url,target);//,this.options);
    }
}
