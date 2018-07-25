import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage {
  items: any = [];
  diagnosticoSelected: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private theInAppBrowser: InAppBrowser) {
    this.items = [
      {
          name: "Ambiental", 
          value: "AMB",
          groupicon: "flower",
          childs: [
                      { name: "Estructura ecológica principal", url:"http://www.podbolivar2018.com/docs/ambiental/estructecolo.pdf" },
                      { name: "Sistema marino costero", url:"http://www.podbolivar2018.com/docs/ambiental/marinocostero.pdf"  },
                      { name: "Gestión del riesgo", url:"http://www.podbolivar2018.com/docs/ambiental/riesgo.pdf" },
                      { name: "Adaptación al cambio clímatico", url:"http://www.podbolivar2018.com/docs/ambiental/cambioclimatico.pdf" }
                  ]
      },
      {
          name: "Social", 
          value: "SOC",
          groupicon: "contacts",
          childs: [
                      { name: "Salud", url:"http://www.podbolivar2018.com/docs/social/salud.pdf" },
                      { name: "Seguridad", url:"http://www.podbolivar2018.com/docs/social/seguridad.pdf" },
                      { name: "Educación", url:"http://www.podbolivar2018.com/docs/social/educ.pdf" },
                      { name: "Bienestar y Pobreza", url:"http://www.podbolivar2018.com/docs//social/bienestar.pdf" },
                      { name: "Victimas y Grupos Vulnerables", url:"http://www.podbolivar2018.com/docs/social/vulnerablesvictimas.pdf" }
                  ]
      },
      {
          name: "Patrimonio", 
          value: "PAT",
          groupicon: "cash", 
          childs: [
                      { name: "Material", url:"http://www.podbolivar2018.com/docs/patrimonio/patrimonio.pdf" },
                      { name: "Inmaterial", url:"http://www.podbolivar2018.com/docs/patrimonio/patrimonio.pdf" },
                      { name: "Equipamientos", url:"http://www.podbolivar2018.com/docs/patrimonio/patrimonio.pdf" }
                  ]
      },
      {
          name: "Institucional", 
          value: "INS",
          groupicon: "briefcase",
          childs: [
            { name: "Servicios Institucionales", url:"http://www.podbolivar2018.com/docs/Institucional/SERVICIOS%20INSTITUCIONALES.pdf" },
            { name: "Estructura Administrativa", url:"http://www.podbolivar2018.com/docs/Institucional/ORGANIZACI%C3%93N%20ADMINISTRATIVA.pdf" },
            { name: "Esquemas Asociativos", url:"http://www.podbolivar2018.com/docs/Institucional/ESQUEMAS%20ASOCIATIVOS.pdf" }
          ]
      },
      {
          name: "Conectividad", 
          value: "CON",
          groupicon: "at",
          childs: [
                      { name: "Sistema Carretero", url:"http://www.podbolivar2018.com/docs/conectividad/Conectividad%20Terrestre.pdf" },
                      { name: "Sistema Marítimo", url:"http://www.podbolivar2018.com/docs/conectividad/Conectividad%20Maritima.pdf" },
                      { name: "Sistema Fluvial", url:"http://www.podbolivar2018.com/docs/conectividad/Conectividad%20Fluvial.pdf" },
                      { name: "Sistema Áereo", url:"http://www.podbolivar2018.com/docs/conectividad/Conectividad%20Aerea.pdf" }
                  ]
      }
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticoPage');
  }

  showDocument(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target);//,this.options);
  }

}
