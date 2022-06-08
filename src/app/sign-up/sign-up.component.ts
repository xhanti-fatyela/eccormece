import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl('')
  })
  
  users: User[] = JSON.parse(`${localStorage.getItem('users')}`) ? JSON.parse(`${localStorage.getItem('users')}`) : []
  email: any
  password: any
  repassword: any

  constructor( private userService: UserService, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    let user = {
      email: this.regForm.value.email,
      password: this.regForm.value.password
    }
    if(this.regForm.value.repassword == this.regForm.value.password){
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
        this.router.navigate(['/homepage'])
        // return alert('Welcome, Now Lets Sign In')
    }

    else if (this.regForm.value.repassword !== this.regForm.value.password) {
      alert('Incorrect Entry')
    }
    
  }

}
