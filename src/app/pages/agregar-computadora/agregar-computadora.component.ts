import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputadoraService } from '../../services/computadora.service';

@Component({
  selector: 'app-agregar-computadora',
  templateUrl: './agregar-computadora.component.html',
  styleUrl: './agregar-computadora.component.css'
})
export class AgregarComputadoraComponent implements OnInit {
  //Propiedades
  computadoraForm: FormGroup;
  enviado=false;
  computadoraMarca:any=[
    'HP','Acer','Apple','Lenovo','Asus','Huawei','MSI','DELL','Otra'
  ];
  computadoraGrafica:any=[
    'NVIDIA','AMD','PowerColor','Sapphire','XFX','Otra'
  ];
  computadoraRam:any=[
    2,4,6,8,12,16,24,32,64,128
  ];
  computadoraProcesador:any=[
    'NVIDIA','AMD','Intel','Apple','Qualcomm','Otra'
  ];

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private computadoraService:ComputadoraService,
  ){
    this.mainForm();
  }

  ngOnInit(): void {
  }

  //Metodo para generar el formulario:
  mainForm(){
   this.computadoraForm=this.formBuilder.group({
    modelo:['',[Validators.required]],
    marca:['',[Validators.required]],
    grafica:['',[Validators.required]],
    ram:['',[Validators.required]],
    procesador:['',[Validators.required]],
   }); 
  }

  //Metodo para asignar la marca seleccionada por el usuario
  actualizarMarca(d){
    this.computadoraForm.get('marca').setValue(d,{
      onlySelf:true
    });
  }

  //Metodo para asignar la grafica seleccionada por el usuario
  actualizarGrafica(d){
    this.computadoraForm.get('grafica').setValue(d,{
      onlySelf:true
    });
  }

  //Metodo para asignar la ram seleccionada por el usuario
  actualizarRam(d){
    this.computadoraForm.get('ram').setValue(d,{
      onlySelf:true
    });
  }

    //Metodo para asignar la ram seleccionada por el usuario
    actualizarProcesador(d){
      this.computadoraForm.get('procesador').setValue(d,{
        onlySelf:true
      });
    }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.computadoraForm.controls;
  }

  //Metodo para enviar el formulario
  onSubmit(){
    this.enviado=true;
    if(!this.computadoraForm.valid){
      return false;
    }
    else{
      return this.computadoraService.agregarComputadora(this.computadoraForm.value)
      .subscribe({
        complete:()=>{
          console.log('La computadora fue agregada correctamente')
          this.ngZone.run(()=>this.router.navigateByUrl('/listar-computadoras'));
        },
        error:(e)=>{
          console.log(e);
        }
      });
    }
  }
}
