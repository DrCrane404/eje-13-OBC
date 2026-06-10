import { Component, signal } from '@angular/core';
import { form, maxLength, minLength, pattern, required, FormField } from '@angular/forms/signals';
import { RegisterInterface } from '../../../models/register-interface';
import { RegisterService } from '../../../services/register-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterLink,FormField],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Registro {
  //MOdelo para el registro
  //Señales - Para un render mas repido
  registerModel = signal<RegisterInterface>({
    nombre:'Jose',
    username:'Jose@gmail.com',
    password:'1234567'
  })

  //Validaciones Nombre
  //1.Requerido
  //2.Minimo 2 y maximo 100


  //Validacion del username
  //1. Requerido
  //2. No vacio, minimo 3 y maximo 50
  //3. Solo puede contener letras, numeros y guion bajo
  
  //Validacion COntraseña
  //1.Requerido
  //2.No vacio: minimo 8
  //3.Debe tener mayuscula, minuscula y un numero



  registerForm = form(this.registerModel,(schemaPath)=> {
    required(schemaPath.nombre, {message: 'El nombre es requerido'})
    minLength(schemaPath.nombre,2,{message:'El nombre debe de tener minimo 2 caracteres'})
    maxLength(schemaPath.nombre,100,{message:'El nombre no debe de esceder los 100 caracteres'})
    //username
    required(schemaPath.username,{message:'El nombre de usuario es requerido'})
    minLength(schemaPath.username,3,{message:'El nombre de usuario bede de tener minimo 3 caracteres'})
    maxLength(schemaPath.username,50,{message:'El nombre de usuario no debe de exceder los 50 caracteres'})
    pattern(schemaPath.username,/^[a-zA-Z0-9_]+$/,{message:'El username solo puede contener letras, numeros y guion bajo'})
    //password
    required(schemaPath.password,{message:'La contraseña es requerida'})
    minLength(schemaPath.password, 8, {message:'La contraseña debe de tener minimo 8 caracteres'})
    //La otra validacion la dejamos pendiente
    pattern(schemaPath.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,{message:'La contaseña debe de contener una minuscula, mayuscula y un nunmero'})
  })

  constructor(private registerService:RegisterService){

  }

  registro(){
    //Registro al servicio
    this.registerService.registrarse(this.registerModel()).subscribe({
      next:(respuesta) =>{
        console.log(respuesta)
      },
      error:(err)=>{
        console.log(err)
      },
    })
  }
}
