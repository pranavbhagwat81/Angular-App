import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

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
    title = "";
    //title = " Courses";
    courses = [];
    courseCount:number = 0;

    constructor(service:CoursesService){
         this.courses = service.getCourses();
         console.log(this.courses);
         console.log(this.courses.length);
    }

    getTitle(){
        this.title = this.getCourseCount()+ " Courses";
        return this.title;
    }

    getCourseCount(){
        console.log("Im getCourseCount()")
        return this.courses.length;
    }
    

    
}