import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-participan',
  templateUrl: 'participan.html',
})
export class ParticipanPage {
  participantes: any = [];
  participaSelected: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.participantes = [
      {
        name: "Autoridades Ambientales",
        value: "AMB",
        childs: [
          {name: "Cardique", logo:"cardique.png", info: "3135742104"},
          {name: "CSB", logo:"csb.jpg", info: "(5) 6878016"},
          {name: "Establecimiento Público Ambiental", logo:"epa.jpg", info: "(5) 6644119"},
          {name: "Cormagdalena", logo:"cormagdalena.jpg", info: "(5) 3565914"},
          {name: "Parques Nacionales Naturales", logo:"pnn.jpg", info: "(5) 6655317"}
        ]
      },
      {
        name: "POTS Modernos",
        value: "PMO",
        childs: [
          {name: "Inypsa", logo:"inypsa.png", info: " (1) 3399631"}
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipanPage');
  }
  expandItem(item){
    this.participantes.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
}

}
