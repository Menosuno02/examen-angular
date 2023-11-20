import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProvider, routing } from './app.routing';
import { ServiceTienda } from './services/service.tienda';
import { HomeComponent } from './components/home/home.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreatepedidoComponent } from './components/createpedido/createpedido.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, CuboComponent, CubosmarcaComponent, LoginComponent, RegisterComponent, PerfilComponent, ComprasComponent, LogoutComponent, CreatepedidoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [appRoutingProvider, ServiceTienda],
  bootstrap: [AppComponent],
})
export class AppModule {}
