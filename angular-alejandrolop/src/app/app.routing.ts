import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CreatepedidoComponent } from './components/createpedido/createpedido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubos/:marca', component: CubosmarcaComponent },
  { path: 'cubo/:id', component: CuboComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'pedido', component: CreatepedidoComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
