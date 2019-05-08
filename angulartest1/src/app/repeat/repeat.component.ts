import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-repeat',
    template: '<h1 (click)="onClick()">{{text}} </h1>',
    styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {
    @Input('txt') text: string;
    @Output('output') output = new EventEmitter();
    onClick() {
        console.log('click');

        this.output.emit(this.text);
    }
    constructor() {}

    ngOnInit() {}
}
