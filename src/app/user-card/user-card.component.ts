import {Component, Input, OnInit} from '@angular/core';
import {User} from '../entity/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  @Input() u: User = new User();

  ngOnInit(): void {
  }

}
