import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellitoPattern)]],
    // la unica validacion que es asincrona
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['', [Validators.required, this.vs.noPuedeSerStraider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  // obtenemos todos los errores del email
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato válido'
    } else if (errors?.emailTomado) {
      return 'El mail ya fue tomado'
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private ev: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alexander Martinez',
      email: 'test1@test.com',
      username: 'Alex_28Mart',
      password: '123456',
      password2: '123456',
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
