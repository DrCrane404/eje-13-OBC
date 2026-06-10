import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  
  login(){
    this.loginService.login(this.loginModel()).subscribe({
      next:(response)=>{
        console.log(response.user.role)
        this.loginService.guardarToken(response.acces_token)

      }
    })
  }
}
