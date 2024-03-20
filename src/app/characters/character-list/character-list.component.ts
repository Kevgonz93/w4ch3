import { Component } from '@angular/core';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { character } from '../../data';
import { anyCharacter } from '../../model/character-model';

@Component({
  selector: 'got-character-list',
  standalone: true,
  imports: [],
  template: ` <ul>
    @for (item of characters; track item.name) {
    <got-character-card [characters]="item" />
    }
  </ul>`,
  styles: ``,
})
export class CharacterListComponent {
  character: anyCharacter[] = [];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    character().then((characters) => {
      this.character = characters;
    });
  }
}
