import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  // Verificar si esta con sesion iniciada
  //1. En caso de que si, permitte mostrar los componentes - dash, kaerdex
  //2. En caso de que no, redireccionar al login

  const loginService = inject(LoginService)
  const router = inject(Router)
  if (loginService.sesionIniciada()) {
    return true
  }else{
    router.navigateByUrl('/login')
    return false
  }
  
  //Por default regresa true, permite el acceso a las rutas que se van a proteger
};
