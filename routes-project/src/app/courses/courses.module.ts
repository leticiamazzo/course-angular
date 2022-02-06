// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

// services / routing module
import { CoursesService } from './courses.service';
import { CoursesRoutingModule } from './courses-routing.module';

// angular material
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseNotFoundComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,

    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
  ],
  providers: [CoursesService],
})
export class CoursesModule { }
