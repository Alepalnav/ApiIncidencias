import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent
    },
    {
        path:'auth',
        loadChildren:()=> import('./auth/routes').then(mod =>mod.routes)
    },
    {
        path:'issues',
        loadChildren:()=> import('./issues/routes').then(mod =>mod.routes)
    },
    {
        path:'users',
        loadChildren:()=> import('./users/routes').then(mod =>mod.routes)
    },
    // {
    //     path: '',
    //     redirectTo: 'auth/login',
    //     pathMatch: 'full'
    // },


];
