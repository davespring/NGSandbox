import { Component, OnInit } from '@angular/core';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story/story-list.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product.service';
import { Http, Response, HTTP_PROVIDERS } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [StoryComponent, StoryListComponent, ProductListComponent],
  providers: [ProductService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit(): void {
    console.log("App Component Initialized");
  }
}
