import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {CarService} from '../service/carservice';
import {NodeService} from '../service/nodeservice';
import {EventService} from '../service/eventservice';
import {Car} from '../domain/car';
import {TreeNode} from 'primeng/primeng';

@Component({
    templateUrl: './signup.html',
    encapsulation: ViewEncapsulation.None
})
export class SignUp implements OnInit {

constructor() { }

ngOnInit() {

}
}
