import { Component } from "@angular/core";
import { ApiProvider } from "../../providers/api/api";
import { NavParams, NavController } from "ionic-angular";
import { ProductDetailsComponent } from "../product-details/product-details";

/**
 * Generated class for the ProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "products",
  templateUrl: "products.html"
})
export class ProductsComponent {

  name: string;
  image:string;
  products =[];

  constructor( private navParams: NavParams,public navCtrl: NavController) {
    //recieved data from home page
    let response = navParams;

    this.name = response.data.name;
    this.image = response.data.image;
    this.products = response.data.products;
  }

  goToProductsComponent(name:string) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
   
    this.navCtrl.push(ProductDetailsComponent, {
      name: name     
    });
      //console.log("name of product is: " + name);

  }
}
