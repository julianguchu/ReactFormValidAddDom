import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

get obtieneArregloControl(){
    return this.x.get('telefonos') as FormArray;
  }



  x=this.builder.group({
nombre: ['', {validators:[Validators.required, Validators.minLength(3)]}],
apellido: ['', {validators:[Validators.required, Validators.minLength(3)]}],
sexo: ['', {validators:Validators.required}] ,
telefonos: this.builder.array([])
});




personaMostrar={nombreRecibido:'', apellidoRecibido:'' ,sexoRecibido:''}
arreglo:any[]=[];
  constructor(private builder: FormBuilder) { }


  ngOnInit(): void {

  } 

  agregar(){
  	const  pequeñoFormulario = this.builder.group({
  		telefono: [''] ,
  		descripcion:['']

  	});
  	this.obtieneArregloControl.push(pequeñoFormulario);





  }


 



registrar(){

	//console.log(this.x.value);
	this.personaMostrar.nombreRecibido=this.x.value.nombre;
	this.personaMostrar.apellidoRecibido=this.x.value.apellido;
	this.personaMostrar.sexoRecibido=this.x.value.sexo;
	this.arreglo=this.x.value.telefonos;
	console.log("Nombre persona:"+this.personaMostrar.nombreRecibido);
	console.log("Apellido Persona"+this.personaMostrar.apellidoRecibido);
	console.log("Genero:"+this.personaMostrar.sexoRecibido);
this.arreglo.forEach(x=>{


console.log("Telefono:"+ x.telefono +  " ,"+ "Descripción:" + x.descripcion );

});
}

}
