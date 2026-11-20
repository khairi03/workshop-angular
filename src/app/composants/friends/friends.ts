import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [ FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends=signal(
    [
      { name: 'Sami' },
      { name: 'Sarra',},
      { name: 'Ahmed',}
      ]);
    }
   
