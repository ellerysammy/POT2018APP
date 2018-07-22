import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccordionListComponent } from '../../components/accordion-list/accordion-list';

@Component({
  selector: 'page-normativo',
  templateUrl: 'normativo.html'
})
export class NormativoPage {
    items: any = [];
    itemHeight: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
        {
            name: "Norma Nacional", 
            expanded: false, 
            childs: [{ name: "Ley 1454" },{ name: "Ley 388" },{ name: "Ley Distritos" },{ name: "Ley Área Metropolitana" },{ name: "Ley Acuerdo COT" }]
        },
        {
            name: "Norma Departamental", 
            expanded: false, 
            childs: [{ name: "Ordenanza 153" },{ name: "Ordenanza 211" },{ name: "Ordenanza 187" },{ name: "Decreto 924" },{ name: "Resolución 706" }]
        },
        {
            name: "Otras Disposiciones", 
            expanded: false, 
            childs: [{ name: "ODS" },{ name: "POTS Modernos - RIMIS" }]
        }
    ];
  }
  expandItem(item){
 
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });

}
}
