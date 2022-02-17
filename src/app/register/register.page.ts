import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  user: User;

  constructor(private http: HttpClient,
              private authService: AuthService) { }
              
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save(): void {
    this.authService.create({id: null, name: this.user.name, email: this.user.email, password: this.user.password})
    .subscribe();
  }

}
