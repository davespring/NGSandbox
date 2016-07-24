import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'
import { Observable }     from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    
    products: Observable<IProduct[]>;

    constructor(private _productService: ProductService) {

    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts(){
        this.products = this._productService.getProducts();
    }
}