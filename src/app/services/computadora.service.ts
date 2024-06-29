import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputadoraService {

  //Propiedades del service
  // baseUri:string='http://localhost:4000/api';
  baseUri:string='https://pc-mean.onrender.com/api';
  headers=new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) {}

  //Metodo para agregar una computadora 
  agregarComputadora(data):Observable<any>{
    let url=`${this.baseUri}/agregar`;
    return this.http.post(url,data)
    .pipe(catchError(this.errorManager));
  }

  //Metodo para obtener todas las computadoras
  getComputadoras(){
    let url=`${this.baseUri}/computadoras`;
    return this.http.get(url);
  }

  //Metodo que obtiene una computadora por su id
  getComputadora(id):Observable<any>{
    let url=`${this.baseUri}/computadora/${id}`;
    return this.http.get(url,
      {headers:this.headers}
    )
    .pipe(map((res:Response)=>{
      return res || {};
    }),
    catchError(this.errorManager)
    );
  }

  //Metodo para actualizar una computadora
  updateComputadora(id,data):Observable<any>{
    let url=`${this.baseUri}/actualizar/${id}`;
    return this.http.put(url,data,{
      headers:this.headers
    }).pipe(catchError(this.errorManager));
  }

  //Metodo para eliminar una computadora
  deleteComputadora(id):Observable<any>{
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