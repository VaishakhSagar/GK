import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required),
  });

  constructor(
    private mainService:MainService,
    private cookieService:CookieService,
    private Router:Router
  ) { }

  ngOnInit() {
    this.cookieService.deleteAll();
  }

  submitLogin(){
    if(this.loginForm.valid){
      let params = {userName:this.loginForm.value["userName"],passWord:this.loginForm.value["passWord"]}
      this.mainService.loginCall(params).subscribe(
        data=>{
          let datas:any=data;
          this.cookieService.set('token',datas.key);
          this.Router.navigate(['/dashboard']);
        },
        err=>{
          alert('invalid username or password')
        }
      )
    }
  }

}

