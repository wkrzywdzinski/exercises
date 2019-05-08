import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angulartest123';
    tweet = {
        likes: 15,
        isLiked: false
    };
    post = {
        title: 'title',
        clicked: false
    };
    repeat = {
        txt: 'textpapapapaapap'
    };
    onChange() {
        console.log('onchange');
    }
    onOutput(e) {
        console.log(e);
    }
}
