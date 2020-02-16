import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent, CourseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
