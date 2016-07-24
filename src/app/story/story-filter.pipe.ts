import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'storyFilter'
})

export class StoryFilterPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((story: any) =>
            story.title.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}