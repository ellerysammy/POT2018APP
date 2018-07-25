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
          {name: "Cardique", logo:"cardique.jpg"},
          {name: "Corporación Autónoma Regional del Sur de Bolívar", logo:"csb.jpg"},
          {name: "Establecimiento Público Ambiental", logo:"epa.jpg"},
          {name: "Cormagdalena", logo:"cormagdalena.jpg"},
          {name: "Parques Nacionales Naturales", logo:"pnn.jpg"}
        ]
      },
      {
        name: "POTS Modernos",
        value: "PMO",
        childs: [
          {name: "Inypsa", logo:"inypsa.png"}
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
