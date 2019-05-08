import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    template: '<div class="box" [class.clicked]="clicked" (click)="onLike()" [style.backgroundColor]="blue"></div>',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    @Input() clicked = false;
    @Output() change2 = new EventEmitter();
    onLike() {
        if (this.clicked) {
            this.clicked = false;
        } else {
            this.clicked = true;
        }
        this.change2.emit();
    }
    constructor() {}

    ngOnInit() {}
}
