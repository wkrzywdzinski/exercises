import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {
    getAuthors() {
        return ['Ziemowit Szczerek', 'Szczepan Twardoch', 'Joanna Bator'];
    }
    getText() {
        return 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    }
}
