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
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { TextComponent } from './text/text.component';
import { TitlePipe } from './title.pipe';
import { RepeatComponent } from './repeat/repeat.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent,
        SummaryPipe,
        StarComponent,
        TextComponent,
        TitlePipe,
        RepeatComponent,
        ZippyComponent,
        ContactsComponent,
        CourseComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [CoursesService, AuthorsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
