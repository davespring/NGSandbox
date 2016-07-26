import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story/story-list.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product.service';
//import { WikipediaService } from './wiki/wikipedia.service';
import { Http, Response, HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HomeComponent, StoryComponent, StoryListComponent, ProductListComponent, NavigationComponent],
  providers: [ProductService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit(): void {
    console.log("App Component Initialized");
  }
}
