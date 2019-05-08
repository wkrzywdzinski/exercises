import { Component, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
    tytul = 'Type your favourite title to format';
    constructor() {}

    ngOnInit() {}
}
