import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    list = ['Online', 'Offline', 'Abroad'];
    log(e) {
        console.log(e);
    }
    constructor() {}

    ngOnInit() {}
}
