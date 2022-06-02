import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormControlName,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  userForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
    
  })

  email: any
  password: any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    let users = JSON.parse(`${localStorage.getItem('users')}`)
      users.filter((elem: any) => {
        if((!this.userForm.value.email || !this.userForm.value.password) || (elem.email == !this.userForm.value.email || elem.password == !this.userForm.value.password)) return alert("Please ensure that you signing up first")
        else if(elem.email == this.userForm.value.email && elem.password == this.userForm.value.password){
          localStorage.setItem('token', JSON.stringify(elem))
          this.router.navigate(['homepage'])
          return alert('Welcome Happy Shopping !')
        }
      })
  }

}
