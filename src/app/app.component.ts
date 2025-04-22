import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component'; // ✅ Import it
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: any = '0';
  title = 'wishlist';

  get visibleItems(): WishItem[] {
    const filters = [
      (item: WishItem) => item,
      (item: WishItem) => !item.isComplete,
      (item: WishItem) => item.isComplete,
    ];
    return this.items.filter(filters[this.listFilter]);
  }
}
