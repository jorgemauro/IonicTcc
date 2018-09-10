import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TipoRequisito} from "../../modelo/TipoRequisito";
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tiporequisito:TipoRequisito[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:HttpClient) {
    this._http.get<TipoRequisito[]>('/api/GenericRestService/rest/querytojson/LISTTIPOREQUISITO/null')
      .subscribe(
        (tiporequisito)=>{
          console.log(tiporequisito);
          this.tiporequisito=tiporequisito;
        }
      );
  //  this.tiporequisito=[{codtipreq:1,nomtipreq:'requisito 1' },{codtipreq:2, nomtipreq:'requisito2'}];
  }

}
