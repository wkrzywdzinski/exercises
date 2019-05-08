import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: string) {
        if (!value) {
            return null;
        }
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    }
}
