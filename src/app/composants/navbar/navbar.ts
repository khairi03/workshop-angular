import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',

})
export class Navbar {
  links = signal([
  { name: 'Accueil', path: '/home' },
  { name: 'Profil', path: '#profil' },
  { name: 'Conférences', path: '#conference-list' },
  { name: 'Détail', url: '#conference' },
  { name: 'Amis', url: '#amis' },
  { name: 'Notifications', url: '#notifications' }
]);

}
