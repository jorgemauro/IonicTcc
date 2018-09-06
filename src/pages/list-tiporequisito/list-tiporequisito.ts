import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {TipoRequisito} from "../../modelo/TipoRequisito";
/**
 * Generated class for the ListTiporequisitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-tiporequisito',
  templateUrl: 'list-tiporequisito.html',
})
export class ListTiporequisitoPage {
public tiporequisito:TipoRequisito[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:HttpClient) {
    this._http.get<TipoRequisito[]>('http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/LISTTIPOREQUISITO/null')
      .subscribe(
        (tiporequisito)=>{
          this.tiporequisito=tiporequisito;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTiporequisitoPage');
  }

}
