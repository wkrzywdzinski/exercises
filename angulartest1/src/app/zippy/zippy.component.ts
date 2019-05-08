import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
    selected: string;
    onClick(value) {
        if (value === this.selected) {
            this.selected = 'none';
            console.log(this.selected);
        }
        this.selected = value;
    }

    constructor() {}

    ngOnInit() {}
}
