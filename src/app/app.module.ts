import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CoursesService } from './courses.service';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';
import { AuthorsServiceService } from './authors-service.service';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent, CourseComponentComponent, AuthorsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService,AuthorsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
