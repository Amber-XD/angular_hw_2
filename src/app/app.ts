import { Component, signal } from '@angular/core';
import { NumberFilterPipe } from './number-filter-pipe';
import { TextLimitPipe } from './text-limit-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NumberFilterPipe, TextLimitPipe, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_hw_2');

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  category = 'Електроніка';

  products = [
    { name: 'Ноутбук', category: 'Електроніка' },
    { name: 'Телефон', category: 'Електроніка' },
    { name: 'Футболка', category: 'Одяг' },
    { name: 'Куртка', category: 'Одяг' },
    { name: 'Рюкзак', category: 'Аксесуари' },
    { name: 'Годинник', category: 'Аксесуари' },
  ];

  a = 0;
  b = 0;
  operation = '+';

  calculate(): number {
    switch (this.operation) {
      case '+':
        return this.a + this.b;
      case '-':
        return this.a - this.b;
      case '*':
        return this.a * this.b;
      case '/':
        return this.b != 0 ? this.a / this.b : 0;
      default:
        return 0;
    }
  }
}


