import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    _url = '';

    @Input() description='';
    
    @Input() set url(url: string) {
        if (url.startsWith('data')) {
            this._url = url;
        } else {
            this._url = CLOUD + url;
        }
    }

    get url(): string {
        return this._url;
    }

    handleClick(target) {
        console.log(target);
    }
}