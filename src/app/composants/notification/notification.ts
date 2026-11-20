import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  notifications = signal ([
    { message: 'Une nouvelle conférence est disponible.', read: false },
    { message: 'Sami vous a envoyé une invitation.', read: false },
    { message: 'Votre profil a été mis à jour avec succès.', read: true },
  ]);
show=signal(false);
bntTxt=signal('afficher les notifications');
showNotifications() {
  this.show.set(!this.show());
  this.bntTxt.set(this.show() ? 'masquer les notifications' : 'afficher les notifications');
}


}
