import { Component, OnInit } from '@angular/core';
import { ComputadoraService } from '../../services/computadora.service';


@Component({
  selector: 'app-listar-computadoras',
  templateUrl: './listar-computadoras.component.html',
  styleUrl: './listar-computadoras.component.css'
})
export class ListarComputadorasComponent implements OnInit {

  //Propiedades
  computadoras:any=[];

  constructor(private computadoraService:ComputadoraService){
    this.getComputadoras();
  }

  ngOnInit(): void {
    
  }

  //Método para obtener las computadoras
  getComputadoras(){
    this.computadoraService.getComputadoras().subscribe((data)=>{
      this.computadoras=data;
    })
  }

  //Metodo para eliminar el empleado
  eliminarComputadora(computadora,index){
    if(window.confirm('¿Estas seguro de eliminar la computadora?')){
        this.computadoraService.deleteComputadora(computadora._id)
      .subscribe((data)=>{
        this.computadoras.splice(index,1);
      })
    }
  }
}
