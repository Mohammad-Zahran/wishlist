import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: String = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.items;
    } else if (this.listFilter === '1') {
      return this.items.filter((item) => !item.isComplete);
    } else {
      return this.items.filter((item) => item.isComplete);
    }
  }

  addNewWish() {
    if (this.newWishText.trim()) {
      this.items.push(new WishItem(this.newWishText.trim()));
      this.newWishText = '';
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
