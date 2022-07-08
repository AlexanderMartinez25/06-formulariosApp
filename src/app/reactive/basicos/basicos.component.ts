import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTC 4080TI'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // le asignamos un valor al formulario
    this.miFormulario.reset({
      nombre: 'RTX 4080TI',
      precio: 1600,
      existencias: 2
    })
  }

  // validamos campos
  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    // marcar todos los campos como tocados
    // para que se activen todos los errores al guardar
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    // limpiar form
    this.miFormulario.reset();

  }
}
