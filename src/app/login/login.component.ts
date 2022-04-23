import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;

  

  constructor() {
    this.userForm=new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
      rollno: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
  
  
    });
  
   }
   ngOnInit(): void {
     
   }

   get firstname()
{
  return this.userForm?.get('firstname');
}
get email()
{
  return this.userForm.get('email');
}
onsubmit()
{
  console.log(this.userForm.value);
}

  
  

  

}
