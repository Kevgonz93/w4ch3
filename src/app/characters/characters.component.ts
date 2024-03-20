import { Component } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  selector: 'got-characters',
  standalone: true,
  imports: [CharacterListComponent],
  template: `<p>character works!</p>
    <got-character-list /> `,
  styles: ``,
})
export class CharactersComponent {}
