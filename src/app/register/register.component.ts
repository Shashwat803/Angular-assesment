import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  otpMessage: string = "";
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required,],
      otp: ['', Validators.required]
    })
    this.otp()
  }
  FormData: any = []
  phone = false

  signup() {
    if (Number(localStorage.getItem('otp')) > 0) {
      this.validateOtp(this.registerForm.value.otp)
    } else {
      const userData = this.registerForm.value;
      this.FormData = localStorage.setItem('FormData', JSON.stringify(userData))
      this.otpMessage = `Enter OTP sent to your registered mobile number`
      this.otp();
      console.log(this.registerForm.value)
    }

  }
  OtpNumber: any = null
  otp() {
    let val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);;
    localStorage.setItem('otp', val.toString())
  }
  validateOtp(input: number) {
    if (input == Number(localStorage.getItem('otp'))) {
      this.registerForm.reset
      localStorage.removeItem('otp')
      this.router.navigate(['home'])
    } else {
      alert("Incorrect OTP");
    }
  }

}
