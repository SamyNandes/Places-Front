import { Component } from '@angular/core';
import { AuthgoogleService } from '../../authgoogle.service'
import { profile } from '../profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-pages',
  standalone: false,
  templateUrl: './landing-pages.component.html',
  styleUrl: './landing-pages.component.scss'
})
export class LandingPagesComponent {
  profile: profile | undefined;
  constructor(
    private auth: AuthgoogleService,
    private router: Router
  ){}
  logarComGoogle(){
    this.auth.login()
  }
  estaLogado(): boolean {
    const dadosGoogle = this.auth.getLoggedProfile()

    this.profile = dadosGoogle
    return !!this.profile
  }
  mudarDePagina(){
    this.router.navigate(['/paginas/galerias'])
  }
}
