import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { SignInService } from '../sign-in-service.service';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css'],
  providers: [SignInService],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponentComponent implements OnInit {

  user: User = {username:"", password:null};

  constructor(private signInService: SignInService) {
  }

  ngOnInit() {
  }

  submit(){
    this.signInService.loginUser(this.user.username,this.user.password).subscribe((res) => console.log(res));
  }

}
