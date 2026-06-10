import { Component } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  imports: [],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  constructor(private loginService:LoginService, private router:Router){

  }

  logout(){
    //1. Cerrar sesion
    this.loginService.cerrarSesion();
    //2. rediccionar al login
    this.router.navigateByUrl('/login')
  }
}
