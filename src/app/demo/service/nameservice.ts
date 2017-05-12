import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Name} from '../domain/name';

@Injectable()
export class NameService {

    constructor(private http: Http) {}

    getNames() {
        return this.http.get('assets/demo/data/names.json')
                    .toPromise()
                    .then(res => <Name[]> res.json().data)
                    .then(data => { console.log(data); return data; });
    }
}
