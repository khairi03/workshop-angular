import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../model/conference';
import { ConferenceList } from '../../model/conference-list';

@Component({
  selector: 'app-confirences',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './confirences.html',
  styleUrl: './confirences.css',
})
export class Confirences {
  conferences = signal<Conference[]>(ConferenceList);
  searchTerm = signal('');

  // conférences à venir + filtre sur le titre
  upcoming = computed(() => {
    const now = new Date();
    const term = this.searchTerm().toLowerCase();
    return this.conferences().filter(
      c => c.date >= now && c.title.toLowerCase().includes(term)
    );
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  buttonClass(c: Conference): string {
    const rest = this.remaining(c);
    if (rest === 0) return 'btn-red';
    if (rest < 10) return 'btn-orange';
    return 'btn-green';
  }

  register(id: number): void {
    this.conferences.update(list =>
      list.map(c =>
        c.id === id && this.remaining(c) > 0
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c
      )
    );
  }
}