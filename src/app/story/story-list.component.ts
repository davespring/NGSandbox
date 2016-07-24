import { Component, OnInit } from '@angular/core';
import { StoryFilterPipe } from './story-filter.pipe';

@Component({
    moduleId: module.id,
    selector: 'story-list',
    templateUrl: 'story-list.component.html',
    styleUrls: ['story-list.component.css'],
    pipes: [StoryFilterPipe]
})

export class StoryListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    storiesFilter: string = "";

    stories: any[] = [
        {"id":1,"title":"ut erat id mauris vulputate","description":"nisi at nibh in hac habitasse platea dictumst aliquam augue quam"},
        {"id":2,"title":"volutpat convallis","description":"tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac"},
        {"id":3,"title":"ut massa volutpat convallis morbi","description":"turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"},
        {"id":4,"title":"luctus tincidunt nulla mollis","description":"felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus"},
        {"id":5,"title":"varius nulla facilisi cras","description":"posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut"},
        {"id":6,"title":"neque libero convallis eget eleifend","description":"vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede"},
        {"id":7,"title":"dictumst aliquam augue quam","description":"quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis"},
        {"id":8,"title":"eleifend luctus ultricies","description":"nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis"},
        {"id":9,"title":"nulla","description":"rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet"},
        {"id":10,"title":"urna pretium nisl ut","description":"phasellus in felis donec semper sapien a libero nam dui proin"}
    ]
}