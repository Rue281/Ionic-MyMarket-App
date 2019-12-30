import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsComponent {

  name: string;


  constructor(private navParams: NavParams) {
    
    //recieved data from products component
    let response = navParams;
    this.name = response.data.name;
    //console.log("name of product in product-details: " + this.name);
  }

}
