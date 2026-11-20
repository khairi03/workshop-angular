import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title1=signal('GESTION DES CONFÉRENCES')
   title2=signal('Conference App')

}
