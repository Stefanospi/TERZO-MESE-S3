import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginPage!: FormGroup;
  /* Dichiaro la loginPage tipizzandola come FormGroup */

  constructor(private fg: FormBuilder) {}

  ngOnInit() {
    /* Inizializzo tutti gli input presenti nel form assegnando valore di null al caricamento della pagina */
    this.loginPage = this.fg.group({
      /* Nel caso in cui raggruppo più elementi input all'interno di un formGroupName bisogna eseguire la seguente procedura */
      fullName: this.fg.group({
        /* SE VOGLIO INSERIRE ALTRI VALIDATORS METTO LE QUADRE */
        nome: [null, [Validators.required]],
        cognome: [null, [Validators.required]],
      }),
      authData: this.fg.group({
        confermaPassword: [null, [Validators.required]],
        email: [[null], [Validators.required, Validators.email]],
        password: [[null], [Validators.required]],
      }),
      genere: ['x', Validators.required],
      immagineProfilo: [[null], [Validators.required]],
      biografia: [
        [null],
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(150),
        ],
      ],
      username: [[null], [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginPage.valid) {
      console.log(this.loginPage);
    }else {
      console.log('Form non valido');
    }
  }
}
