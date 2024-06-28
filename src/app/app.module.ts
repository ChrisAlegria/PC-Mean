import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComputadoraComponent } from './pages/agregar-computadora/agregar-computadora.component';
import { ListarComputadorasComponent } from './pages/listar-computadoras/listar-computadoras.component';
import { EditarComputadoraComponent } from './pages/editar-computadora/editar-computadora.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComputadoraComponent,
    ListarComputadorasComponent,
    EditarComputadoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
