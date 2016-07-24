import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ProductService {

    constructor(private _http: Http) { }

    private productsUrl ='app/products'; // URL to web API

    getProducts(): Observable<IProduct[]>{
      return this._http.get('app/products.json')
        .map((response: Response) => <IProduct[]>response.json().products)
        .do(products => console.log(products))
        .catch(this.handleError);
    }


    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}