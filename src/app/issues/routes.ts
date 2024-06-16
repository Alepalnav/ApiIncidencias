import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { jwtGuard } from "../guards/jwt.guard";

export const routes: Routes = [
    {path:'list',component:ListComponent,canMatch:[jwtGuard]},
    {path:'form',component:FormComponent, canMatch:[jwtGuard]},
]