import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let item of courses">
                {{ item }} <button class="btn btn-primary" (click)="onSave($event)">Save</button>
                <input [(ngModel)]="email" + (keydown.enter)="email = $event.target.value" />
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of courses!';
    email = 'wojti@wojti';
    courses;
    onSave($event) {
        console.log($event.target);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
