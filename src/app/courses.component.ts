import {Component} from '@angular/core';

@Component({
    selector : '<courses>',
    template : `
    <h2>
    {{getTitle()}}
    <ul>

    <li *ngFor="let course of courses">
    {{course}}
    </li>

    </ul>
    </h2>`
})
export class CoursesComponent {
    title = "List of Courses";

    courses = ["course 1","course 2","course 3"];

    getTitle(){
        return this.title;
    }
}