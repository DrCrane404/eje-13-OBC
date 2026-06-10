import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Materias } from './components/pages/materias/materias';
import { Profesores } from './components/pages/profesores/profesores';
import { Kardex } from './components/pages/kardex/kardex';
import { Dash } from './components/pages/dash/dash';
import { Login } from './components/auth/login/login';
import { Registro } from './components/auth/register/register';
import { Forgot } from './components/auth/forgot/forgot';
import { Notfound } from './components/pages/notfound/notfound';
import { AuthGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
    {
        path:'layout',
        component:Layout,
        canActivate:[AuthGuard],
        children:[
            {
                path:'',
                redirectTo:'/layout/dash',
                pathMatch: 'full'
            },
            // http://localhost:4200/layout/dash
            {
                path:'dash',
                component:Dash
            },
            // http://localhost:4200/layout/kardex
            {
                path:'kardex',
                component:Kardex
            },
            // http://localhost:4200/layout/materias
            {
                path:'materias',
                component:Materias
            },
            // http://localhost:4200/layout/profesores
            {
                path:'profesores',
                component:Profesores
            },

            {
                path:'register',
                component:Registro
            }
        ]
    },
    
    {
        path:'login',
        component:Login
    },

     {
        path: 'register',
        component:Registro
    },
    {
        path: 'recuperar',
        component:Forgot
    },
    {
        path: '**', //cualquier ruta que no exista, redirige a login
        component:Notfound
    }
];
