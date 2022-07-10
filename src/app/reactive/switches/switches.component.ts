import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // tambien se puede con setValue pero dará error 
    // por no tener las condiciones en el obj persona
    this.miFormulario.reset({
      ...this.persona,
      // utilizamos el spread operator para mandar las ondiciones tambien
      condiciones: false
    })


    /*para mantener tanto el formulario como el obj persona sinconizado
    se debe usar el ejemplo de aqui/ */
    this.miFormulario.valueChanges.subscribe(({ condiciones, ...restoDeArgumentos }) => {
      // ejemplo de como eliminar una propiedad de un objeto
      // delete form.condiciones;

      // solo le pasamos el genero y notificaciones obviando las condiciones
      this.persona = restoDeArgumentos
    })
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    // para que el formmulario funciones solo cuando el boolena sea true
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }
  guardar() {
    const formValue = { ...this.miFormulario.value };

    // ejemplo de como eliminar una propiedad de un objeto
    delete formValue.condiciones;

    this.persona = formValue;

  }

}
