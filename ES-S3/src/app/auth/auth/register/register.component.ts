import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iUser } from '../../../Models/i-user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerPage!: FormGroup;
  newUser: Partial<iUser> = {};
  /* Dichiaro la loginPage tipizzandola come FormGroup */

  constructor(
    private fg: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    /* Inizializzo tutti gli input presenti nel form assegnando valore di null al caricamento della pagina */
    this.registerPage = this.fg.group({
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
      username: [[null], [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerPage.valid) {
      console.log(this.registerPage);
    } else {
      console.log('Form non valido');
    }
  }
  reg() {
    this.authSvc.register(this.newUser).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
