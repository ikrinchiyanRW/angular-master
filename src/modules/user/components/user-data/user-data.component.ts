import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: UserInterface;

  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
    console.log(this.user);
    //this.parent.user = { ...this.user };
  }

}
