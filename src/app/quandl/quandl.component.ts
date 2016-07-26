import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { QuandlService } from './quandl.service';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'quandl',
    templateUrl: 'quandl.component.html',
    providers: [JSONP_PROVIDERS, QuandlService]
})
export class QuandlComponent implements OnInit {
    constructor (private quandlService: QuandlService) { }
    
    ngOnInit(){
        console.log("QuandlComponent Initialized");
    }

    private searchTermStream = new Subject<string>();
    
    search(term: string) { this.searchTermStream.next(term); }
    
    items: Observable<string[]> = this.searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term: string) => this.quandlService.getData(term));

}