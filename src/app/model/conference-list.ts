import { Conference } from './conference';

export const ConferenceList: Conference[] = [
  { id: 1, title: 'Angular 21 en pratique', description: 'Signals, zoneless et contrôle de flux.',
    date: new Date('2027-01-15'), place: 'Tunis', maxParticipants: 100, nbParticipants: 60 },
  { id: 2, title: 'Introduction au MLOps', description: 'Déployer un modèle en production.',
    date: new Date('2027-02-10'), place: 'Sousse', maxParticipants: 50, nbParticipants: 45 },
  { id: 3, title: 'Cybersécurité bancaire', description: 'Bonnes pratiques et retours terrain.',
    date: new Date('2027-03-05'), place: 'Tunis', maxParticipants: 30, nbParticipants: 30 },
  { id: 4, title: 'Ancienne conférence', description: 'Déjà passée, ne doit pas s\'afficher.',
    date: new Date('2025-01-01'), place: 'Sfax', maxParticipants: 30, nbParticipants: 10 },
];