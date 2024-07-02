import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComputadoraComponent } from './pages/agregar-computadora/agregar-computadora.component';
import { ListarComputadorasComponent } from './pages/listar-computadoras/listar-computadoras.component';
import { EditarComputadoraComponent } from './pages/editar-computadora/editar-computadora.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-empleado'},
  {path:'agregar-computadora',component:AgregarComputadoraComponent},
  {path:'listar-computadoras',component:ListarComputadorasComponent},
  {path:'editar-computadora/:id',component:EditarComputadoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
