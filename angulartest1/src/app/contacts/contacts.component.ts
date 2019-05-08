import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    text: string;
    log(e) {
        console.log(e);
        console.log(this.text);
    }
    onSubmit(e) {
        console.log(e);
    }
    constructor() {}

    ngOnInit() {}
}
