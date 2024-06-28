import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Computadora } from '../../models/computadora';
import { ComputadoraService } from '../../services/computadora.service';

@Component({
  selector: 'app-editar-computadora',
  templateUrl: './editar-computadora.component.html',
  styleUrl: './editar-computadora.component.css'
})
export class EditarComputadoraComponent implements OnInit {

  //propiedades:
  editarComputadoraForm:FormGroup;
  enviado = false;
  computadoraMarca:any=[
    'HP','Acer','Apple','Lenovo','Asus','Huawei','MSI','DELL','Otra'
  ];
  computadoraGrafica:any=[
    'Nvidia','AMD','PowerColor','Sapphire','XFX','Otra'
  ];
  computadoraRam:any=[
    2,4,6,8,12,16,24,32,64,128
  ];
  computadoraProcesador:any=[
    'NVIDIA','AMD','Intel','Apple','Qualcomm','Otra'
  ];
  computadoraData :Computadora[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private computadoraService: ComputadoraService,
    private actRoute : ActivatedRoute
  ){}

  ngOnInit(): void { 
    this.mainForm();
    let id= this.actRoute.snapshot.paramMap.get('id');
    this.getEmpleado(id);
    this.editarComputadoraForm = this.formBuilder.group({
      modelo:['',[Validators.required]],
      marca:['',[Validators.required]],
      grafica:['',[Validators.required]],
      ram:['',[Validators.required]],
      procesador:['',[Validators.required]],
    });
  }

//metodo para generar el formulario
mainForm(){
  this.editarComputadoraForm = this.formBuilder.group({
    modelo:['',[Validators.required]],
    marca:['',[Validators.required]],
    grafica:['',[Validators.required]],
    ram:['',[Validators.required]],
    procesador:['',[Validators.required]],
  });
}

//Metodo para asignar la marca seleccionada por el usuario
actualizarMarca(d){
  this.editarComputadoraForm.get('marca').setValue(d,{
    onlySelf:true
  });
}

//Metodo para asignar la grafica seleccionada por el usuario
actualizarGrafica(d){
  this.editarComputadoraForm.get('grafica').setValue(d,{
    onlySelf:true
  });
}

//Metodo para asignar la ram seleccionada por el usuario
actualizarRam(d){
  this.editarComputadoraForm.get('ram').setValue(d,{
    onlySelf:true
  });
}

  //Metodo para asignar la ram seleccionada por el usuario
  actualizarProcesador(d){
    this.editarComputadoraForm.get('procesador').setValue(d,{
      onlySelf:true
    });
  }

//getter oara acceder a los controles del formulario
get myForm(){
  return this.editarComputadoraForm.controls;
}

//metodo para buscar el empleado de la base de datos con base a su ID
getEmpleado(id){
  this.computadoraService.getComputadora(id).subscribe((data)=>{
    this.editarComputadoraForm.setValue({
      modelo : data['modelo'],
      marca : data['marca'],
      grafica : data['grafica'],
      ram : data['ram'],
      procesador : data['procesador']
    });
  });
}



//metodo para enviar el formulario
onSubmit(){
  this.enviado = true;
  if(!this.editarComputadoraForm.valid){
    return false;
  }else{
    if(window.confirm('¿Estas seguro de que lo deseas modificar?')){
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.computadoraService.updateComputadora(id,this.editarComputadoraForm.value).subscribe({
        complete:()=>{
          this.router.navigateByUrl('/listar-computadoras');
          console.log('se actualizo correctamente');
        },
        error:(e)=>{
          console.log(e);
        }
      });
    }
  }
}



}