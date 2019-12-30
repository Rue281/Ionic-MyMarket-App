import { Component, ViewChild } from "@angular/core";
import { NavController, MenuController, Slides, App } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { ProductsComponent } from "../../components/products/products";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  slidePages = [];
  images = [];
  id: number;
  @ViewChild(Slides) private slides: Slides;
  pager: true;

  categories: string[];
  constructor(
   app: App,public menu: MenuController,
    public navCtrl: NavController,
    public provider: ApiProvider
  ) {
    menu.enable(true);
  }

  // toggleMenu() {
  //   this.menu.toggle();
  // }
  
  goToOtherPage(name:string, image:string, products: []) {

    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    // console.log("products: ");
    // console.log(products);
    this.navCtrl.push(ProductsComponent, {
      name: name,
      image: image,
      products: products
    });
  }

  ionViewDidLoad() {
    this.getCategories();
  }
  
  //get data from provider
  getCategories() {
    this.provider
      .getCategories()
      .subscribe(categories => (this.categories = categories));
  }

  public ngOnInit() {
    this.provider.getCategories();
    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true
    };
  }
}
