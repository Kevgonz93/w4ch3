import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { anyCharacter } from '../../model/character-model';

@Component({
  selector: 'got-character-card',
  standalone: true,
  imports: [FormsModule],
  template: `<li>
    <div>
      Nombre: <span> {{ character.name }} </span>
    </div>
    <div>
      Familia: <span> {{ character.name }} </span>
    </div>
    <div>
      Edad: <span> {{ character.age }} </span>
    </div>
    <div>
      Categoria: <span> {{ character.category }} </span>
    </div>
    <div>
      Estado: <span> {{ character.isAlive }} </span>
    </div>
    <span> <button type="button" (click)="talk()">Mensaje</button></span>
  </li>`,
  styles: ``,
})
export class CharacterCardComponent {
  message!: string;
  @Input({ required: true }) character!: anyCharacter;
  talk() {
    this.message = this.character.message;
  }
}
