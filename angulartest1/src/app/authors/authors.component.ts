import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';
@Component({
    selector: 'authors',
    template: `
        <h1>Number of authors: {{ authors.length }}</h1>
        <ul>
            <li *ngFor="let item of authors">{{ item }}</li>
        </ul>
        <p>{{ text | summary: 7 }}</p>
    `,
    styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
    title = 'List of authors:';

    authors;
    text;
    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
        this.text = service.getText();
    }
}
