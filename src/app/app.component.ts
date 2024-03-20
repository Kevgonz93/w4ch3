import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

@Component({
  selector: 'got-root',
  standalone: true,
  template: `
    <header>
      <h1>Welcome to {{ title }}!</h1>
    </header>
    <main>
      <got-characters />
    </main>
    <footer></footer>
  `,
  styles: [],
  imports: [RouterOutlet, CharactersComponent],
})
export class AppComponent {
  title = 'w04challange03';
}
