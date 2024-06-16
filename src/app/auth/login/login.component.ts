import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  email!:string;
  password!:string;

  submit(){
    this.authService.login(this.email,this.password).subscribe({
      next:(res)=>{
        console.log("Login realizado");
      }
    })
  }

}
