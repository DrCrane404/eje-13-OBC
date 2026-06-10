import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../services/login-service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  //Recuperar el token
  const loginService = inject(LoginService)
  const token = loginService.recuperarToken()
  if (token) {
    const reqCLone= req.clone({
      //Layout, profesores, kardez, etc.
      setHeaders:{
        Authorization:'Bearer '+token
      }
    })
    return next(reqCLone)
  }else
    return next(req);
};
