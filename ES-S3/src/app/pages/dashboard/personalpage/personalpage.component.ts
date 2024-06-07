import { Component } from '@angular/core';
import { iUser } from '../../../Models/i-user';
import { IFavMovie } from '../../../Models/i-fav-movie';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrl: './personalpage.component.scss',
})
export class PersonalpageComponent {
  user!: iUser;
  favMovie: IFavMovie[] = [];

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.authSvc.user$.subscribe((user) => {
      if (user) this.user = user;
    });

  }


}
