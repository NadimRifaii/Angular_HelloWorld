import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private store: ProductsService, private route: ActivatedRoute) { }
  product: any = {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if (id) {
        this.store.getProduct(parseInt(id)).subscribe(product => this.product = product)
      }
    })
  }
}
