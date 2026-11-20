import { Component, signal } from '@angular/core';
import { Header } from './composants/header/header';
import { Navbar } from './composants/navbar/navbar';
import { Profil } from './composants/profil/profil';
import { Confirences } from './composants/confirences/confirences';
import { Friends } from './composants/friends/friends';
import { Notification } from './composants/notification/notification';
import { Footer } from './composants/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profil, Confirences, Friends, Notification, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectName');
}