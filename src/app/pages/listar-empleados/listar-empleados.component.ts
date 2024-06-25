import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrl: './listar-empleados.component.css'
})
export class ListarEmpleadosComponent implements OnInit {

  //Propiedades
  empleados:any=[];

  constructor(private empleadoService:EmpleadoService){
    this.getEmpleados();
  }

  ngOnInit(): void {
    
  }

  //Método para obtener a los empleados
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data)=>{
      this.empleados=data;
    })
  }

  //Metodo para eliminar el empleado
  eliminarEmpleado(empleado,index){
    if(window.confirm('¿Estas seguro de eliminar al usuario?')){
        this.empleadoService.deleteEmpleado(empleado._id)
      .subscribe((data)=>{
        this.empleados.splice(index,1);
      })
    }
  }
}
