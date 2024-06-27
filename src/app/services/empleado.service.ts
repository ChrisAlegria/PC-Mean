import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Propiedades del service
  // baseUri:string='http://localhost:4000/api';
  baseUri:string='https://api.render.com/deploy/srv-cpu9c55ds78s73e35u1g?key=_G6sYh7D18k'
  headers=new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) {}

  //Metodo para agregar un empleado
  agregarEmpleado(data):Observable<any>{
    let url=`${this.baseUri}/agregar`;
    return this.http.post(url,data)
    .pipe(catchError(this.errorManager));
  }

  //Metodo para obtener todos los empleados
  getEmpleados(){
    let url=`${this.baseUri}/empleados`;
    return this.http.get(url);
  }

  //Metodo que obtiene un empleado por su id
  getEmpleado(id):Observable<any>{
    let url=`${this.baseUri}/empleado/${id}`;
    return this.http.get(url,
      {headers:this.headers}
    )
    .pipe(map((res:Response)=>{
      return res || {};
    }),
    catchError(this.errorManager)
    );
  }

  //Metodo para actualizar un empleado
  updateEmpleado(id,data):Observable<any>{
    let url=`${this.baseUri}/actualizar/${id}`;
    return this.http.put(url,data,{
      headers:this.headers
    }).pipe(catchError(this.errorManager));
  }

  //Metodo para eliminar a un empleado
  deleteEmpleado(id):Observable<any>{
    let url=`${this.baseUri}/delete/${id}`;
    return this.http.delete(url,{
      headers:this.headers
    }).pipe(catchError(this.errorManager));
  }

  //Manejador de errores
  errorManager(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      //Obtenemos el error del lado del cliente
      errorMessage=error.error.message;
    }else{
      //Obtenemos el error del lado del servidor
      errorMessage=`Error:${error.status}
      Mensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>{
      return errorMessage;
    });
  }
}
