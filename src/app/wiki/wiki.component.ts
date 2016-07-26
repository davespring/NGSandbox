import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService } from './wikipedia.service';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'wiki',
    templateUrl: 'wiki.component.html',
    providers: [JSONP_PROVIDERS, WikipediaService]
})
export class WikiComponent implements OnInit {
    constructor (private wikipediaService: WikipediaService) { }
    
    ngOnInit(){
        console.log("WikiComponent Initialized");
    }

    private searchTermStream = new Subject<string>();
    
    search(term: string) { this.searchTermStream.next(term); }
    
    items: Observable<string[]> = this.searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term: string) => this.wikipediaService.search(term));

}