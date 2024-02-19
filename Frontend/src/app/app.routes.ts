import { Routes } from '@angular/router';
import { UserComponent } from './components/dashboard/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToursAddComponent } from './components/tours-add/tours-add.component';

export const routes: Routes = [

    {path: '', component:UserComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'notfound', component:NotFoundComponent},
    {path: 'fomr-tours', component:ToursAddComponent},

];
