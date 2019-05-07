import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormStyle } from '@angular/common';

@NgModule({
    declarations: [AppComponent, CoursesComponent, AuthorsComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [CoursesService, AuthorsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
