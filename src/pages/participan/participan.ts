import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParticipanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-participan',
  templateUrl: 'participan.html',
})
export class ParticipanPage {
  participantes: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.participantes = [
      {
        name: "Autoridades Ambientales",
        childs: [
          {name: "Cardique", logo:"cardique.jpg"},
          {name: "Corporación Autónoma Regional del Sur de Bolívar", logo:"csb.jpg"},
          {name: "Establecimiento Público Ambiental", logo:"epa.jpg"},
          {name: "Cormagdalena", logo:"cormagdalena.jpg"},
          {name: "Parques Nacionales naturales", logo:"pnn.jpg"}
        ]
      },
      {
        name: "POTS Modernos",
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
