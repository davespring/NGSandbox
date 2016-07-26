import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class QuandlService {
//   constructor(private jsonp: Jsonp) {}
  
//   search (term: string) {
//     let wikiUrl = 'http://en.wikipedia.org/w/api.php';
//     let params = new URLSearchParams();
    
//     params.set('action', 'query');
//     params.set('prop', 'extracts');
//     params.set('exintro', 'explaintext');
//     params.set('titles', term);
//     params.set('format', 'json');
//     params.set('callback', 'JSONP_CALLBACK');
    
//     // TODO: Add error handling
//     return this.jsonp
//                .get(wikiUrl, { search: params })
//                .map(request => <string[]> request.json()[1]);
//    }

    constructor(private jsonp: Jsonp, private _http: Http) {}
    
    search (term: string) {
        let quandlUrl = 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json';
        let params = new URLSearchParams();
        
        // TODO: Add error handling
    }

    getData(term: string): Observable<string[]>{
    let quandlUrl = 'https://www.quandl.com/api/v3/datasets/WIKI/' + term + '/data.json';
    
      return this._http.get(quandlUrl)
        .map((response: Response) => <string[]>response.json().dataset_data["data"])
        .do(dataset_data => console.log(dataset_data));
    }
}
