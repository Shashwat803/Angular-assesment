import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  otpMessage: string = "";
  buttonMessage: string=""
  constructor(private formbuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      mobile: [''],
      otp: ['']
    })
    this.buttonMessage= "Generate OTP"
  }

  formData = [localStorage.getItem('FormData')]

  login() {
    if (Number(localStorage.getItem('otp')) > 0) {
      this.validateOtp(this.loginForm.value.otp)
    } else {
     
      this.otpMessage = `Enter OTP sent to your registered mobile number`

      this.otp();
      this.buttonMessage="Login";
    }
  }
  otp() {
    let val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);;
    localStorage.setItem('otp', val.toString())
  }
  validateOtp(input: number) {
    if (input == Number(localStorage.getItem('otp'))) {

      localStorage.removeItem('otp')
      this.router.navigate(['home'])
    } else {
      alert("Incorrect OTP");
    }
  }

}

