// angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// modules
// import { CoursesModule } from './courses/courses.module';
// import { StudentsModule } from './students/students.module';

// services
import { AuthGuard } from './guards/auth.guard';
import { CoursesGuard } from './guards/courses.guard';
import { StudentsGuard } from './guards/students.guard';
import { AuthService } from './login/auth.service';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // CoursesModule,
    // StudentsModule,

    AppRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    CoursesGuard,
    StudentsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
