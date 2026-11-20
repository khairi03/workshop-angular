import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './composants/header/header';
import { Navbar } from './composants/navbar/navbar';
import { Footer } from './composants/footer/footer';
import { Friends } from './composants/friends/friends';
import { Notification } from './composants/notification/notification';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Footer, Friends, Notification],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectName');
}
