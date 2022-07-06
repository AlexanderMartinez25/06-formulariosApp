import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    precio: 1500,
    existencias: 18,
    producto: 'RTX 4080TI'
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo Exitoso');
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
      producto: 'Algo'
    })
  }

  nombreValido(): boolean {

    return this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio.value < 0;
  }

}
