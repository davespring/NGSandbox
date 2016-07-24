import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html'
})

export class StoryComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
    title = "TestTitle";
    titleColor = "blue";
    showDescription: boolean = false;
    description: string = "This is a description for a test story";


    ToggleDescription(): void {
        this.showDescription = !this.showDescription;
    }
}