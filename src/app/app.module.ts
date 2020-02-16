import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CoursesService } from './courses.service';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';
import { AuthorsServiceService } from './authors-service.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent, CourseComponentComponent, AuthorsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService,AuthorsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
