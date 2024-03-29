import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialComponent } from './components/material/material.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradeComponent } from './components/grade/grade.component';
import { MatButtonModule } from '@angular/material/button' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule} from '@angular/material/input' ;
import { MatDialogModule} from '@angular/material/dialog';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { UploadpdfComponent } from './components/uploadpdf/uploadpdf.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifSetupComponent } from './components/verif-setup/verif-setup.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    AddCourseComponent,
    CoursesComponent,
    MaterialComponent,
    AssignmentComponent,
    GradeComponent,
    SubmissionsComponent,
    PdfViewerComponent,
    UploadpdfComponent,
    ProfileComponent,
    UsersListComponent,
    ResetPasswordComponent,
    DashboardComponent,
    VerifSetupComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
