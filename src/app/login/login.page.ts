import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { UserConnection } from '../auth/user-connection';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: UserConnection;
  formulaire: FormGroup;



  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

  }


  ngOnInit() {
    this.formulaire= this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  submitLogin() {
     let username = this.formulaire.value.username;
          let password = this.formulaire.value.password;

     if (username == "user" && password == "user") {
      this.router.navigate(['/home'])

    } else  {
       window.alert("Wrong username/password, please retry")
     }

 }

submitLogin2(): void {
  let username = this.formulaire.value.username;
  let password = this.formulaire.value.password;
  console.log(username)
  console.log(password)
  this.authService.makeLogin(username, password);
  this.router.navigate(['/home']);
}}

