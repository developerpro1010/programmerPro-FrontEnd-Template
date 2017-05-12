import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HomeSlider} from '../domain/homeslider';

@Injectable()
export class HomeSliderService {

    constructor(private http: Http) {}

    getImages() {
        return this.http.get('assets/demo/data/homeslider.json')
                    .toPromise()
                    .then(res => <HomeSlider[]> res.json().data)
                    .then(data => { console.log(data); return data; });
    }
}
