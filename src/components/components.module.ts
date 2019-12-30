import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products";
import { ProductDetailsComponent } from './product-details/product-details';
@NgModule({
  declarations: [ProductsComponent,
    ProductDetailsComponent],
  imports: [],
  exports: [ProductsComponent,
    ProductDetailsComponent]
})
export class ComponentsModule {}
